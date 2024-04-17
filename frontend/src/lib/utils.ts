import { jwtDecode } from 'jwt-decode';

function getToken(): string {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No token found');
    }
    return token;
}

export async function fetchData(endpoint: string, method: string, body?: any) {
    const URL = import.meta.env.VITE_SERVER_URL;
   
    const response = await fetch(`${URL}${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        return response.json();
    } else {
        try {
            const errorData = await response.json();
            throw new Error(errorData.message);
        } catch (error) {
            throw new Error('Erreur lors de la requête');
        }
    }
}

export async function fetchDataWithMerchantId(body: any) {
        const merchantId = jwtDecode(getToken()).sub;
        return fetchData(`/product/merchant_id/${merchantId}`, 'POST', body);
}

export async function fetchAllProducts() {
    const merchantId = jwtDecode(getToken()).sub;
    return fetchData(`/product/merchant_id/${merchantId}`, 'GET');
}

export async function fetchDeleteProduct(productId: string) {
    return fetchData(`/product/${productId}`, 'DELETE');
}

export async function fetchById(productId: string) {
    return fetchData(`/product/${productId}`, 'GET');
}

export async function updateProduct(productId: string, body: any) {
    return fetchData(`/product/${productId}`, 'PUT', body);
}


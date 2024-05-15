import { jwtDecode } from 'jwt-decode';

function getToken(): string {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No token found');
    }
    return token;
}

export async function fetchData(endpoint: string, method: string, body?: any) {
    //const URL = import.meta.env.URL_NETWORK;
    const URL = import.meta.env.VITE_SERVER_URL; 
   // const URL ='http://192.168.1.113:3000' //network simplon
   //const URL ='http://192.168.0.45:3000' //network perso
   console.log(URL)
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
        throw new Error('Erreur lors de la requête');
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


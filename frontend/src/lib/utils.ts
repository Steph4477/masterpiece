import { jwtDecode } from 'jwt-decode';

export async function fetchData(endpoint: string, method: string, body: any) {
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
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('No token found');
        }

        const decodedToken: any = jwtDecode(token);
        const merchantId = decodedToken?.sub;

        console.log('MerchantId:', merchantId);

        const URL = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(`${URL}/product/merchant_id/${merchantId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body)
        });
        console.log('response:', response);

        if (response.ok) {
            return response.json();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    } catch (error) {
        throw new Error('Error fetching data: ' + (error as Error).message);
    }
}

export async function fetchAllProducts() {
    try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('No token found');
        }

        const decodedToken: any = jwtDecode(token);
        const merchantId = decodedToken?.sub;

        console.log('MerchantId:', merchantId);

        const URL = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(`${URL}/product/merchant_id/${merchantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        console.log('response:', response);

        if (response.ok) {
            return response.json();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    } catch (error) {
        throw new Error('Error fetching products: ' + (error as Error).message);
    }
}



export async function fetchDeleteProduct(id: string) {
    const URL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${URL}/product/${id}`, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorData = await response.json(); // Read the response body
        throw new Error(errorData.message); // Throw an error with the server error message
    }
}

export async function fetchById(id: string) {
    console.log('fetchById id:', id); 
    const URL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${URL}/product/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorData = await response.json(); // Read the response body
        throw new Error(errorData.message); // Throw an error with the server error message
    }
}

export async function updateProduct(id:string, updatedProduct: any) {
    console.log('updateProduct id:', id);
    const URL = import.meta.env.VITE_SERVER_URL; 
    const response = await fetch(`${URL}/product/${id}`, {
        method: 'PUT', 
        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
        throw new Error(`Failed to update product: ${response.statusText}`);
    }

    return response.json();
}




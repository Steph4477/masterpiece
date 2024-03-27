export async function fetchData(endpoint: string, method: string, body: any) {
    const URL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${URL}${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorData = await response.json(); // Read the response body
        throw new Error(errorData.message); // Throw an error with the server error message
    }
}

export async function fetchAllProducts() {
    const URL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${URL}/product`, {
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

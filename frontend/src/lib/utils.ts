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
        throw new Error('Error: ' + response.status);
    }
}
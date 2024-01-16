/* eslint-disable @typescript-eslint/no-explicit-any */
// const API_BASE_URL = 'http://localhost:8800';

// export const fetchProducts = async () => {
// 	const response = await fetch(`${API_BASE_URL}/produtos`);
// 	console.log(response);
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		throw new Error(`Error fetching products: ${response.statusText}`);
// 	}
// };

// export const addProduct = async (data: any) => {
// 	const response = await fetch(`${API_BASE_URL}/produtos`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(data)
// 	});
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		throw new Error(`Error adding product: ${await response.text()}`);
// 	}
// };

// export const updateProduct = async (id: string, data: any) => {
// 	const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
// 		method: 'PUT',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(data)
// 	});

// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		throw new Error(`Error Updating product: ${await response.text()} `);
// 	}
// };

// export const deleteProduct = async (id: string) => {
// 	const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
// 		method: 'DELETE'
// 	});

// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		throw new Error(`Error deleting product: ${await response.text()}`);
// 	}
// };

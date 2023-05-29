import api from "./api";

export async function updateProduct(productId, body, token) {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.put(
    `/products/update/${productId}`,
    body,
    headers
  );
  return response.data;
}

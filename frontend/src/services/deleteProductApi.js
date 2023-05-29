import api from "./api";

export async function deleteProduct(productId, token) {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.delete(`/products/delete/${productId}`, headers);
  return response.data;
}

import api from "./api";

export async function createProduct(body, token) {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.post("/products/create", body, headers);
  return response.data;
}

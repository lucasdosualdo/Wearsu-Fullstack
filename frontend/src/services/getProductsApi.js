import api from "./api";

export async function getProducts(token, pagination) {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await api.get(
    `/products?from=${pagination.from}&to=${pagination.to}`,
    headers
  );
  return response.data;
}

import api from "./api";

export async function postSignIn(body) {
  const response = api.post("/signin", body);
  return response;
}

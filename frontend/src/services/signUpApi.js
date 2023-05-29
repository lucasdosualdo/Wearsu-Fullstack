import api from "./api";

export async function postSignUp(body) {
  const response = api.post("/signup", body);
  return response;
}

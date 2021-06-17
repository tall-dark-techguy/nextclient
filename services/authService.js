import cookies from "@/utils/cookieHandler";
import http from "./http";

const authTokenName = process.env.NEXT_PUBLIC_AUTH_TOKEN_NAME;

export function getAuthToken() {
  return cookies.get(authTokenName);
}

export function removeAuthToken() {
  return cookies.remove(authTokenName);
}

export function login(data) {
  return http.post(`${http.uri}/api/login`, data);
}

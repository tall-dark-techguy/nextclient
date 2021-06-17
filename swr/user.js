import useSWRHook from "./useSWRHook";
import { uri } from "@/services/http";
import { getAuthToken } from "@/services/authService";

export function useUser(token) {
  return useSWRHook(`${uri}/api/login/${token ? token : getAuthToken()}`);
}

import { useMutation } from "@apollo/client";

export default function useCustomMutation(mutation) {
  return useMutation(mutation);
}

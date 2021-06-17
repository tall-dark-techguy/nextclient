import { useQuery } from "@apollo/client";

export default function useCustomQuery(query, variables) {
  return useQuery(
    query,
    { variables: variables },
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "cache-and-network",
    }
  );
}

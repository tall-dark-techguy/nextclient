import useSWR from "swr";
import http from "@/services/http";

const useSWRHook = (url) => {
  const fetcher = (url) => http.get(url).then((res) => res.data.data);
  return useSWR(url, fetcher);
};

export default useSWRHook;

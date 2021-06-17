import Axios from "axios";

module.exports = {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  patch: Axios.patch,

  // default backend URI:
  uri: process.env.NEXT_PUBLIC_BACKEND_URI,
};

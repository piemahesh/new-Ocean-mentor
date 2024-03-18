import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-oa-admin-sms.cloudfunctions.net/app/v1/",
  // baseURL: "http://127.0.0.1:5001/oa-admin-sms/us-central1/app/v1/",
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log("Request failed:");
//     return Promise.reject(error);
//   }
// );
export default api;

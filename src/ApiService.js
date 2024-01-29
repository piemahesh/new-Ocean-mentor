import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-oa-admin-sms.cloudfunctions.net/app/v1/",
  // baseURL: "http://127.0.0.1:5001/oa-admin-sms/us-central1/app/v1/",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default api;
// https://us-central1-oa-admin-sms.cloudfunctions.net/app/v1/ firebase
// http://127.0.0.1:5001/oa-admin-sms/us-central1/app/v1/  local api
import { useQuery } from "react-query";
import api from "../ApiService";

const fetchData = async (url) => {
  const response = await api.get(url);
  //   console.log(response.data)
  return response.data;
};

const UseQueryRe = (key, url, endpoint) => {
  return useQuery(key, () => fetchData(`${url}/${endpoint}`));
};

export default UseQueryRe;

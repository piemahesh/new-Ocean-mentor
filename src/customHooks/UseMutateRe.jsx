import { useMutation } from "react-query";
import api from "../ApiService";

const useMutateRe = (apiEndpoint) => {
  const mutation = useMutation(async (variables) => {
    const response = await api.post(apiEndpoint, variables);
    return response.data;
  });

  return mutation;
};

export default useMutateRe;

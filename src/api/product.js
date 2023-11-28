import axios from "axios";

export const postAPI = (data) => {
  return axios.post(
    "https://65532f3b5449cfda0f2e4651.mockapi.io/DataPrime",
    data
  );
};
export const putAPI = (data) => {
  return axios.put(
    `https://65532f3b5449cfda0f2e4651.mockapi.io/DataPrime/${data.id}`,
    data
  );
};
export const getAPI = async () => {
  // const url = new URL("https://65532f3b5449cfda0f2e4651.mockapi.io/DataPrime");
  // url.searchParams.append("completed", false);
  // url.searchParams.append("page", 1);
  // url.searchParams.append("limit", 10);
  // return axios.get(url.href);
  return axios.get(`https://65532f3b5449cfda0f2e4651.mockapi.io/DataPrime`);
};
export const deleteAPI = (id) => {
  return axios.delete(
    `https://65532f3b5449cfda0f2e4651.mockapi.io/DataPrime/${id}`
  );
};

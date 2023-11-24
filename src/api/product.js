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
export const deleteAPI = (data) => {
  return axios.put(
    `https://65532f3b5449cfda0f2e4651.mockapi.io/DataPrime/${data.id}`
  );
};

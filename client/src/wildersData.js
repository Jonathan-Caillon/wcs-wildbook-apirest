import axios from "axios";

export const getWilder = () => {
  return axios.get("http://localhost:5000/api/wilder");
};

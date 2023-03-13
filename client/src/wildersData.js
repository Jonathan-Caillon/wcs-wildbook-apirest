import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

// Get all Wilders
export const getWilder = () => {
  return axios.get("/api/wilder");
};

// Post new Wilder
export const addWilder = (json) => {
  return axios.post("/api/wilder", json);
};

// Delete Wilder
export const deleteWilder = (id) => {
  return axios.delete(`/api/wilder/${id}`);
};

import axios from "axios";

const API = "http://localhost:4000";

export const getClothes = async () => {
  return axios.get(`${API}/clothes`);
};

export const setClothes = async (clothes) => {
  return axios.post(`${API}/clothes`, clothes);
};

export const getOneClothes = async (id) => {
  return axios.get(`${API}/clothes/${id}`);
};

export const updateClothes = async (id, clothes) => {
  return axios.put(`${API}/clothes/${id}`, clothes);
};

export const deleteClothes = async (id) => {
  return axios.delete(`${API}/clothes/${id}`);
};

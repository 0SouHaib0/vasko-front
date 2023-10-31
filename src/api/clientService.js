import axios from "axios";

const API_URL = "http://localhost:8081"; 

export const getAllClients = async () => {
  try {
    const response = await axios.get(`${API_URL}/clients`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addClient = async (name, email, phone) => {
  try {
    const response = await axios.post(`${API_URL}/clients/addClient`, { name, email, phone });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

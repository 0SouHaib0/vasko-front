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

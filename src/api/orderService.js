import axios from "axios";

const API_URL = "http://localhost:8081"; 

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOrdersByClientId = async (clientId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/by-client?client_id=${clientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getNumberOrdersByCLients= async(clientId)=>{
  try{
    const response =await axios.get(`${API_URL}/orders/number-by-client?client_id=${clientId}`)
    return response.data;
    }catch(err){
      throw err;
      }
}

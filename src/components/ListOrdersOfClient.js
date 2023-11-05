import React, { useState, useEffect } from "react";
import {  getOrdersByClientId } from "../api/orderService";

export function ListOrdersOfClient(props) {
  const [clientId, setClientId] = useState(props.clientId);
  const [clientData, setClientData] = useState(null); // State for client data

  useEffect(() => {
    async function fetchOrdersById(id) {
      try {
        const data = await getOrdersByClientId(id);
        // Set the client data in the state
        setClientData(data);
      } catch (error) {
        console.log("Error fetching client", error);
      }
    }

    // Pass clientId as a dependency to useEffect
    fetchOrdersById(clientId);
  }, [clientId]);

  return ( 
    <div>
      {clientData === null ? ( // Check if clientData is null
        <div>
          <p>No orders yet</p>
          <button onClick={() => /* handle new order button click */}>Add New Order</button>
        </div>
      ) : (
        <div>
          {/* Render the list of orders */}
          {clientData.map((order, index) => (
            <div key={index}>{order}</div>
          )}
          <button onClick={() => /* handle new order button click */}>Add New Order</button>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { getNumberOrdersByCLients } from "../api/orderService";

export function NumberOfOrders(props) {
  const [clientId, setClientId] = useState(props.clientId);
  const [clientData, setClientData] = useState(null); // State for client data

  useEffect(() => {
    async function fetchNbOrdersById(id) {
      try {
        const data = await getNumberOrdersByCLients(id);
        // Set the client data in the state
        setClientData(data);
      } catch (error) {
        console.log("Error fetching client", error);
      }
    }

    // Pass clientId as a dependency to useEffect
    fetchNbOrdersById(clientId);
  }, [clientId]);

  return (
    <div>
      {/* Check if clientData is available before rendering */}
      {<div>number of orders :{clientData}</div>}
    </div>
  );
}

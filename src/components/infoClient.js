import React, { useState, useEffect } from "react";
import { getClientById } from "../api/clientService";

export function InfoClient(props) {
  const [clientId, setClientId] = useState(props.clientId);
  const [clientData, setClientData] = useState(null); // State for client data

  useEffect(() => {
    async function fetchClientById(id) {
      try {
        const data = await getClientById(id);
        // Set the client data in the state
        setClientData(data);
      } catch (error) {
        console.log("Error fetching client", error);
      }
    }

    // Pass clientId as a dependency to useEffect
    fetchClientById(clientId);
  }, [clientId]);

  return (
    <div>
      {/* Check if clientData is available before rendering */}
      {clientData && <p>{clientData.name}</p>}
    </div>
  );
}

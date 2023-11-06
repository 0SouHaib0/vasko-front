import React, { useState, useEffect } from "react";
import { getClientById  } from "../api/clientService";
import { getNumberOrdersByCLients } from "../api/orderService";
import {useHistory} from "react-router-dom"

export function InfoClient(props) {
  const [clientId, setClientId] = useState(props.clientId);
  const [clientData, setClientData] = useState(null); 
  const [numberData, setNumberData] = useState(null); // State for client data
  const history = useHistory();

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
    async function fetchNbOrdersById(id) {
      try {
        const data = await getNumberOrdersByCLients(id);
        // Set the client data in the state
        setNumberData(data);
      } catch (error) {
        console.log("Error fetching client", error);
      }
    }

    // Pass clientId as a dependency to useEffect
    fetchNbOrdersById(clientId);
    // Pass clientId as a dependency to useEffect
    fetchClientById(clientId);
  }, [clientId]);

  const handleNewOrder = ()=>{
    history.push(`/new-order/${clientId}`);

  }

  return (
    <div>
      {/* Check if clientData is available before rendering */}
      {clientData && 
      <div className="form-form">
        <div className="info-client-details">
          <div><span className="label-info">Nom complet :</span>{clientData.name}</div>  
          <div><span className="label-info">Email :</span>{clientData.email}</div>
          <div><span className="label-info">Numero :</span>{clientData.phone}</div>
          <div><span className="label-info">Nombre d'ordres :</span> {numberData}</div>
        </div>
        <div>
          <div>
  <button className="add-new" onClick={handleNewOrder}> 
    <span className="fa fa-plus" style={{ color: "green", marginRight: 5 }}></span>
    Ajouter une nouvelle commande
  </button>
</div>
          <button className="add-new" ><span className="fa fa-rotate-left" style={{color:"green",marginRight:5}}></span>Retourner a la liste des clients</button>
          {numberData !=0 &&<button className="add-new" ><span className="fa fa-bars" style={{color:"green",marginRight:5}}></span>Accéder au liste des commandes</button>}
        </div>  
        </div>
        }
    </div>
  );
}

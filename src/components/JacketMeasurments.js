import React, { useState, useEffect } from "react";
import { getJacketMeasurments } from "../api/measurmentsService";

export function jacketMeasurments(props){
    const [clientId, setClientId] = useState(props.clientId);
    const [jacketMsData, setJacketMsData] = useState(null); 

    useEffect(() => {
   
        async function fetchJacketMs(id) {
          try {
            const data = await getJacketMeasurments(id);
            // Set the client data in the state
            setJacketMsData(data);
          } catch (error) {
            console.log("Error fetching jacket ms", error);
          }
        }
    
      
        fetchJacketMs(clientId);
      }, [clientId]);
      return(
        <div>
             <form>
        <input
          type="number"
          placeholder="Quantité veste"
          value={quantityVeste}
          onChange={(e) => setQuantityVeste(e.target.value)}
          required
        />

<input
          type="number"
          placeholder="Quantité veste"
          value={quantityVeste}
          onChange={(e) => setQuantityVeste(e.target.value)}
          required
        />
        </form>
        </div>
      );
}
import React from "react";
import { useState } from "react";
import { addOrder } from "../api/orderService";


export function AddOrderForm(props){

    const [clientId, setClientId] = useState(props.clientId);
    const [quantityGilet, setQuantityGilet] = useState(0);
const [quantityPants, setQuantityPants] = useState(0);
const [quantityVeste, setQuantityVeste] = useState(0);


    const handleAddOrder=async()=>{
      
        try{
            const response = await addOrder(clientId,quantityVeste,quantityGilet,quantityPants);
            console.log(response);

        }
        catch(error){
            console.error(error);
        }
    }
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
          placeholder="Quantité gilet"
          value={quantityGilet}
          onChange={(e) => setQuantityGilet(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantité pantalon"
          value={quantityPants}
          onChange={(e) => setQuantityPants(e.target.value)}
          required
        />
         <button type="button" className="btn-login" onClick={handleAddOrder}>
            Confirmer la commande
        </button>
        </form>
        </div>
    );

}
import React, { useEffect, useState,useRef } from "react";
import { getAllClients } from "../api/clientService";


function ClientsList(){
    const [clients,setClients]=useState([]);

    useEffect(()=>{
         async function fetchAllClients(){
            try{
                const clientsData= await getAllClients();
                setClients(clientsData);
            }catch(error){
                console.log("error fetching clients",error);
            }

         }
         fetchAllClients();
       
        
    },[]);

    return(
      <div>
      { <ul>
        {clients.map((client, index) => (
              <><li>{client.name}</li><li>{client.email}</li><li>{client.phone}</li></>
            ))};
            </ul> }
            </div>
    );
}
export default ClientsList;
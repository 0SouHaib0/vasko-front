import React, { useEffect, useState } from "react";
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
            {clients.map((client)=>(
                <ul>
                <li>{client.name}</li>
                </ul>
            ))}

        </div>
    );
}
export default ClientsList;
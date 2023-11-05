import React from "react";
import { useState } from "react";
import { signup } from "../api/authLogService";
import { addClient } from "../api/clientService";
import { InfoClient } from "./infoClient";
import { NumberOfOrders } from "./NumberOfOrders";

const AddClientForm= ()=>{
    const[name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [error, setError] = useState('');
    const [showClient,setShowClient]=useState(false);
  const [clientId, setClientId] = useState(null); 

    const handleAddClient=async()=>{
        if (!name || !email || !phone) {
            setError('All fields are required.');
            return;
          }
      
        try{
            const response = await addClient(name,email,phone);
            console.log(response);
            const addedClientId = response.id;
            setShowClient(true);
            setClientId(addedClientId);

        }
        catch(error){
            console.error(error);
        }
    }

    return(
     <div>
         {!showClient &&
          <div className="form">
      <div className="form-container">
             <form>
             <img src="images/logoVasko.png" className="logo-vasko"/>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="button" className="btn-login" onClick={handleAddClient}>
            Ajouter Client
        </button>
        {error && <p className="error-form">{error}</p>}

      </form>
     </div>
            </div>}
            {showClient && <div><InfoClient clientId={clientId}/>
            {/* <NumberOfOrders clientId={clientId} />  */}
            
            </div>
            }
            </div>
    );
}

export default AddClientForm;
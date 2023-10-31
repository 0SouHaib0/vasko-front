import React from "react";
import { useState } from "react";
import { signup } from "../api/authLogService";
import { addClient } from "../api/clientService";

const AddClientForm= ()=>{
    const[name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [error, setError] = useState('');


    const handleAddClient=async()=>{
        if (!name || !email || !phone) {
            setError('All fields are required.');
            return;
          }
      
        try{
            const response = await addClient(name,email,phone);
            console.log(response);
        }
        catch(error){
            console.error(error);
        }
    }

    return(
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
            </div>
    );
}

export default AddClientForm;
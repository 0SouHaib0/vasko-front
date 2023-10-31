import React from "react";
import { useState } from "react";
import { login } from "../api/authLogService";

const LoginForm = ()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin=async()=>{
        try{
            const response = await login(email,password);
            console.log(response);
            console.log('succes');
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" className="btn-login" onClick={handleLogin}>
          Login
        </button>
        <p className="text-creation">Vous n'avez pas de compte?! &nbsp;<a href="/signup">Créer un !</a></p>
      </form>
            </div>
            </div>
    );
}

export default LoginForm;
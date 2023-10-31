import React from "react";
import { useState } from "react";
import { signup } from "../api/authLogService";

const SignUp = ()=>{
    const[name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error, setError] = useState('');


    const handleSignup=async()=>{
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
          }
      
          if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
          }
        try{
            const response = await signup(name,email,password);
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="button" className="btn-login" onClick={handleSignup}>
          Sign Up
        </button>
        {error && <p className="error-form">{error}</p>}
        <p className="text-creation">Vous avez déja un compte?! &nbsp;<a href="/login">Se connecter!!</a></p>

      </form>
     
            </div>
            </div>
    );
}

export default SignUp;
import React from "react";
import SignUp from "../components/SignUp";
import { Navbar } from "../components/Navbar";

function SignupPage() {
  return (
    <div>
      <Navbar/>
      <SignUp /> {/* Render the ClientList component on the Clients page */}
      {/* Other components and content specific to the Clients page */}
    </div>
  );
}

export default SignupPage;

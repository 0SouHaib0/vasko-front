import React from "react";
import ClientsList from "../components/ClientsList"; // Import the ClientList component

function Clients() {
  return (
    <div>
      <h1>Clients</h1>
      <ClientsList /> {/* Render the ClientList component on the Clients page */}
      {/* Other components and content specific to the Clients page */}
    </div>
  );
}

export default Clients;

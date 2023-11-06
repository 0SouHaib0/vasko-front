import React from "react";
import { Navbar } from "../components/Navbar";
import { AddOrderForm } from "../components/AddOrderForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function OrderForm(){
    const { clientId } = useParams();

    return(
        <><Navbar />
        <AddOrderForm clientId={clientId} /></>
    );
    
}
import React, { useEffect, useState } from "react";
import { getAllOrders } from "../api/orderService";


function OrdersList(){
 const [orders,setOrders]=useState([]);
 
useEffect(()=>{
        async function fetchAllOrders(){
           try{
             const ordersData= await getAllOrders();
             setOrders(ordersData);
           }catch(error){
            console.log("error fetching all theorders",error);
           }
        }
        fetchAllOrders();
},[])

 return (
    <div>
        {orders.map((order)=>(
            <ul>
                <li>
                    {order.id}
                </li>
            </ul>
        ))}
    </div>
 );

}

export default OrdersList;
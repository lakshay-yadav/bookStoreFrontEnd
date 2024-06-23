import React, { useEffect, useState } from "react";
import Nav from "../nav.js";
import Navbar from "../../Navbar/Navbar.js";
import "../profile.css";
import SideProfile from "./sideProfile.js";
import Order from "./Order.js";

export default function OrderHistory() {
    const userEmail = localStorage.getItem("user");
    const [orderhistory,setOrderHistory] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:8000/api/profile/orderhistory',{
    //       method:"POST",
    //       headers:{
    //         Accept:"application/json",
    //         "content-type":"application/json"
    //       },
    //       body:JSON.stringify({email:userEmail})
    //     }).then(res=>res.json()).then((data)=>{setOrderHistory(data.orderhistory)})
    //   },[])

  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
        <div className="container-xl px-4">
          <Nav />
          <hr className="mt-0 mb-4" />
          <div className="row">
            <SideProfile />
            <div className="col-xl-8">
              <div className="card mb-4">
                <div className="card-header">Order history</div>
                <div className="card-body">
                {
                        orderhistory.length==0?<h3>No Order history</h3>:
                        orderhistory.map((order)=>
                            <Order order={order}/>)
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

import React, { useEffect,useState } from "react";
import Nav from "../nav.js";
import Navbar from "../../Navbar/Navbar.js";
import "../profile.css";
import SideProfile from "./sideProfile.js";
import WishListItem from "./WishListItem.js";

export default function Wishlist() {
    const userEmail = localStorage.getItem("user");
    const [wishlist,setWishlist] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:8000/api/profile/wishlist',{
    //       method:"POST",
    //       headers:{
    //         Accept:"application/json",
    //         "content-type":"application/json"
    //       },
    //       body:JSON.stringify({email:userEmail})
    //     }).then(res=>res.json()).then((data)=>{setWishlist(data.wishlist)})
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
                <div className="card-header">Wishlist</div>
                <div className="card-body">
                    {
                        wishlist.length==0?<h3>No Item in Wishlist</h3>:
                        wishlist.map((item)=>
                            <WishListItem item={item}/>)
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

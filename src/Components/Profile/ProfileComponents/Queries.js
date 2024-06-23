import React, { useEffect,useState } from "react";
import Nav from "../nav.js";
import Navbar from "../../Navbar/Navbar.js";
import "../profile.css";
import SideProfile from "./sideProfile.js";
import Query from "./Query.js";

export default function Queries() {
    const userEmail = localStorage.getItem("user");
    const [queries,setQueries] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/api/profile/queries',{
          method:"POST",
          headers:{
            Accept:"application/json",
            "content-type":"application/json"
          },
          body:JSON.stringify({email:userEmail})
        }).then(res=>res.json()).then((data)=>{setQueries(data.queries);console.log(data)})
      },[])

      console.log(queries)

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
                <div className="card-header">Queries</div>
                <div className="card-body">
                  {queries.length!=0?queries.map((query)=>
                    <Query query={query}/>
                  ):<h3>No Queries</h3>
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

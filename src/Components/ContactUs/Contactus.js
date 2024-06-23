import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './contactus.css';
import { Navigate } from "react-router-dom";

export default function ContactUs() {
  const [info ,SetInfo] = useState({})

    const [query,setQuery] = useState({
        subject:"",
        email:"",
        description:""
    });

    const changeHandler = (e,name)=>{
        e.preventDefault()
        const data = {...query,[name]:e.target.value}
        setQuery(data);
    }

    const submitHandler = async (e)=>{
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/contactus',{
            method:"POST",
            headers:{
                Accept:"application/json",
                "content-type":"application/json"
            },

            body: JSON.stringify(query)
        }
        )

        const data = await response.json()
        console.log(data)
        SetInfo(data)

        if(data.status==="EMAILNOTFOUND"){
          alert("Wrong Email id,Try again")
        }
        else if(data.status === "OK"){
          alert("Query Submitted");
        }
        else{
          alert("Some error Occured, Try again");
        }
    }

    const performRedirect = ()=>{
      if(info.status==="OK"){
        return <Navigate replace to='/'/>
      }
    }


  return (
    <React.Fragment>
      <Navbar/>
      <div className="body" style={{ backgroundColor: "#f2f6fc" }}>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt" />
              <div className="topic">Address</div>
              <div className="text-one">Prashant layout</div>
              <div className="text-two">Bangalore   </div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt" />
              <div className="topic">Phone</div>
              <div className="text-one">+91 9560334247</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope" />
              <div className="topic">Email</div>
              <div className="text-one">lakshaybalwan@gmail.com</div>
              <div className="text-two">bookstore@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form >
            <div className="input-box">
                <input type="email" placeholder="Enter your email" onChange={(e)=>{changeHandler(e,"email")}}/>
              </div>
              <div className="input-box">
                <input type="text" onChange={(e)=>{changeHandler(e,"subject")}} placeholder="Subject" />
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Enter description" onChange={(e)=>{changeHandler(e,"description")}}/>
              </div>
              <div className="button">
                <input type="button" defaultValue="Send Now" onClick={(e)=>{submitHandler(e)}} />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      {performRedirect()}
    </React.Fragment>
  );
}

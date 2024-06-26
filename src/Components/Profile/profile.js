import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./profile.css";
import Nav from "./nav.js";
import GeneralDetails from "./GeneralDeatils.js";
import SideProfile from "./ProfileComponents/sideProfile.js";

export default function Profile() {
  const userEmail = localStorage.getItem("user");
  console.log(userEmail);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
        <div className="container-xl px-4">
          <Nav />
          <hr className="mt-0 mb-4" />
          <div className="row">
            <SideProfile />
            <GeneralDetails user={user} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

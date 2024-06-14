import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";

export default function Home() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("/api", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  console.log(userData);
  return (
    <React.Fragment>
      <Navbar></Navbar>
    </React.Fragment>
  );
}

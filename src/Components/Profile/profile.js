import React from "react";
import Navbar from "../Navbar/Navbar";
import "./profile.css";
import Nav from "./nav.js"
import GeneralDetails from "./GeneralDeatils.js"

export default function Profile() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
      <div className="container-xl px-4">
        {/* Account page navigation*/}
        <Nav/>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* Profile picture upload button*/}
                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <GeneralDetails/>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

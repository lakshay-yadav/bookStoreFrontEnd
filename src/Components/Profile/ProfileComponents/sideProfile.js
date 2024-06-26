import React from 'react'
import Image from "./Image.jpeg"

export default function SideProfile(){
    return(
        <div className="col-xl-4">
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center" >
                  <img
                  style={{height:"150px" , width:"150px"}}
                    className="img-account-profile rounded-circle mb-2"
                    // src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    src={Image}
                    alt=""
                  />
                  <div className="font-italic text-muted mb-4">
                  <b>Hello User</b>
                  </div>
                </div>
              </div>
            </div>
    )
}
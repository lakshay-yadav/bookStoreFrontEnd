import React, { useState } from 'react'

export default function GeneralDetails(){
    const user = localStorage.getItem("user")
    console.log(user)

    const [newDetails,setNewDetails] = useState({
        name:user.name,
        lastName :user.lastName,
        gender:user.gender,
        phoneNumber:user.phoneNumber,
        email:user.email
    });

    const changeHandler = (e,name)=>{
        e.preventDefault();
        setNewDetails({...newDetails,[name]:e.target.value})
    }

    const submitHandler = async (e)=>{
        console.log("Inside submit handler");
        console.log(newDetails)

        const response = await fetch("http://localhost:8000/api/profile/detail_change",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "content-type":"application/json"
            },
            body: JSON.stringify(newDetails)
        });
        const data = await response.json()

        console.log(data)
    }

    return(
        <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        onChange={(e)=>{changeHandler(e,"name")}}
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        defaultValue={user.name}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        onChange={(e)=>{changeHandler(e,"lastName")}}
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        defaultValue={user.lastName}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        onChange={(e)=>{changeHandler(e,"phoneNumber")}}
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        defaultValue={user.phoneNumber}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Gender
                      </label>
                      <input
                        onChange={(e)=>{changeHandler(e,"gender")}}
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Gender"
                        defaultValue={user.gender || " "}
                      />
                    </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      defaultValue={user.email}
                    />
                  </div>
                  </div>
                  <button className="btn btn-primary" type="button" onClick={submitHandler}>
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
    )
}
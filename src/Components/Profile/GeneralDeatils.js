import React, { useState } from "react";

export default function GeneralDetails({ user }) {
  const userEmail = localStorage.getItem("user");
  console.log(userEmail);

  const [newDetails, setNewDetails] = useState({
    name: user.name,
    lastName: user.lastName,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
    email: userEmail,
  });

  const changeHandler = (e, name) => {
    e.preventDefault();
    setNewDetails({ ...newDetails, [name]: e.target.value });
  };

  const submitHandler = async (e) => {
    console.log("Inside submit handler");
    console.log(newDetails);

    const response = await fetch(
      "http://localhost:8000/api/profile/detail_change",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(newDetails),
      }
    );
    const data = await response.json();

    console.log(data);
  };

  return (
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
                  onChange={(e) => {
                    changeHandler(e, "name");
                  }}
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
                  onChange={(e) => {
                    changeHandler(e, "lastName");
                  }}
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
                <label className="small mb-1" htmlFor="phoneNumber">
                  Phone number
                </label>
                <input
                  onChange={(e) => {
                    changeHandler(e, "phoneNumber");
                  }}
                  className="form-control"
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  defaultValue={user.phoneNumber}
                />
              </div>
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="gender">
                  Gender
                </label>
                {/* <input
                  onChange={(e) => {
                    changeHandler(e, "gender");
                  }}
                  className="form-control"
                  id="gender"
                  type="text"
                  placeholder="Gender"
                  defaultValue={user.gender}
                /> */}
                {/* <select id="gender" name="gender" onChange={(e)=>{changeHandler(e,"gender")}} placeholder={user.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select> */}
                <div className="row">
                  <div className="col-xl-4">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={user.gender === "Male"}
                      onChange={(e) => {
                        changeHandler(e, "gender");
                      }}
                    />
                    <label for="male">Male</label>
                  </div>
                  <div className="col-xl-4">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={user.gender === "Female"}
                      onChange={(e) => {
                        changeHandler(e, "gender");
                      }}
                    />
                    <label for="female">Female </label>
                  </div>
                  <div className="col-xl-4">
                    <input
                      type="radio"
                      id="others"
                      name="gender"
                      value="Others"
                      checked={user.gender === "Others"}
                      onChange={(e) => {
                        changeHandler(e, "gender");
                      }}
                    />
                    <label for="others">Others</label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="small mb-1" htmlFor="email">
                  Email address
                </label>
                <input
                  disabled
                  className="form-control"
                  id="email"
                  type="email"
                  defaultValue={user.email}
                />
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={submitHandler}
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

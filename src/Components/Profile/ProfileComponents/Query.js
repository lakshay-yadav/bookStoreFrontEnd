import React from "react";

export default function Query({ query }) {
  console.log("Inside Query", query);
  return (
    <React.Fragment>
      <div className="col-xl-12">
        <div className="card mb-4">
          <div className="card-header row">
            <div className="col-xl-10"><span>Subject : {query.subject} </span></div>
            <div className="col-xl-2"><span style={{color:"green",alignContent:"end"}}>Status : {query.status}</span></div>
          </div>
          <div className="card-body">{query.description}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

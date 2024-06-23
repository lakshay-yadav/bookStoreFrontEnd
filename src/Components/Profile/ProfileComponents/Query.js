import React from "react";

export default function Query({ query }) {
  console.log("Inside Query", query);
  return (
    <React.Fragment>
      <div className="col-xl-12">
        <div className="card mb-4">
          <div className="card-header">
            <span>Subject : {query.subject}</span>
            <span style={{color:"green",alignContent:"end", marginLeft:"62%"}}>Status : {query.status}</span>
          </div>
          <div className="card-body">{query.description}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

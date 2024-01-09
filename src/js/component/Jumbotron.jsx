import React from "react";

export const Jumbotron = () => {
    return(
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
             <h1 className="display-5 fw-bold">Hello, world!</h1>
             <p className="col-md-8 fs-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <button className="btn btn-primary btn-lg" href="#" role="button">Learn more</button>
        </div>
    </div>
    )
};
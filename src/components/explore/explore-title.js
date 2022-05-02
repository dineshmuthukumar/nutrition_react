import React from "react";

const ExploreTitle = ({ title, description }) => {
  return (
    <div className="col-md-12">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ExploreTitle;

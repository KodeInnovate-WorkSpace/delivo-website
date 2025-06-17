import React from "react";

const Card = ({cardImg}) => {
  return (
    <div className="card mt-32">
      {/* <div className="card-body">
        <h2 className="card-header">Maximizing Your Productivity at Work</h2>
        <p className="text-content2">
          Are you looking to increase your productivity at work?
        </p>
        <div className="card-footer">
          <button className="btn-success btn">Learn More</button>
        </div>
      </div> */}
      <img src={cardImg} alt="Bakalaa" />
    </div>
  );
};

export default Card;

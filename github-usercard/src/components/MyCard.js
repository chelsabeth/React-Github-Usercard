import React, { useEffect } from "react";

function MyCard(props) {
  const { mine } = props;
  useEffect(() => {
    console.log("From MyCard Component:", mine);
  }, [mine]);

  return (
    <div className="mycard-container">
      <div key={mine.id} className="my-card"></div>
      <img src={mine.avatar_url} alt="my avatar"></img>
      <h2>Username: {mine.name}</h2>
    </div>
  );
};

export default MyCard;

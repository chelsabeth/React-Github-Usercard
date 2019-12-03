import React, { useEffect } from "react";

function MyCard(props) {
  const { data } = props;
  useEffect(() => {
    console.log("From MyCard Component:", data);
  }, [data]);

  return (
    <div className="mycard-container">
      <div key={data.id} className="my-card"></div>
      <img src={data.avatar_url} alt="my avatar"></img>
      <h2>Username: {data.name}</h2>
    </div>
  );
};

export default MyCard;

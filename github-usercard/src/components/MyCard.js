import React, { useEffect } from "react";

function MyCard(props) {
  const { data } = props;
  useEffect(() => {
    console.log("From MyCard Component:", data);
  }, [data]);

  return (
    <div>
      <div key={data.id} className="my-card"></div>
      <img className="profile-pic"src={data.avatar_url} alt="profile avatar"></img>
      <h2>Username: {data.name}</h2>
    </div>
  );
};

export default MyCard;

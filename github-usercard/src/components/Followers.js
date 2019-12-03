import React, { useEffect } from "react";

function Followers(props) {
  const { followers } = props;
  useEffect(() => {
    console.log("From Followers Component:", followers);
  }, [followers]);

  return (
    <div className="followers-container">
      {props.followers.map(followers => (
        <div key={followers.id} className="followers-card">
          <img src={followers.avatar_url} alt="followers avatar"></img>
          <h2>Username: {followers.login}</h2>
        </div>
      ))}
    </div>
  );
}

export default Followers;

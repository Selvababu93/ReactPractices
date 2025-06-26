import React from "react";

const User = ({ userData }) => {
  const {
    avatar_url,
    followers,
    following,
    login,
    name,
    public_repos,
    created_at,
  } = userData;
  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User Profile Pic" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;

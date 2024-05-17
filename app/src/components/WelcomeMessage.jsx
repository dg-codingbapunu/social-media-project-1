import React from "react";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="emoji"> There are no Posts ☹️ </h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary button"
      >
        Get Post
      </button>
    </center>
  );
};

export default WelcomeMessage;

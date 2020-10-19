import React from "react";

const InlineLoader = () => {
  return (
    <div className="chatbot-inline-loader-container">
      <svg
        id="dots"
        width="50px"
        height="21px"
        viewBox="0 0 132 58"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" fill="none">
          <g id="chatbot-loader" fill="#c6c6c6">
            <circle id="chatbot-loader-dot1" cx="10" cy="55" r="3"></circle>
            <circle id="chatbot-loader-dot2" cx="30" cy="55" r="3"></circle>
            <circle id="chatbot-loader-dot3" cx="50" cy="55" r="3"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default InlineLoader;

import React from "react";
import { ConditionallyRender } from "react-util-kit";

import { callIfExists } from "../Chat/chatUtils";

import UserIcon from "../../assets/icons/user-alt.svg";

import "./UserChatMessage.css";

const UserChatMessage = ({ message, customComponents, showUserAvatar }) => {
  return (
    <div className="react-chatbot-kit-user-chat-message-container">
      <ConditionallyRender
        ifTrue={customComponents.userChatMessage}
        show={callIfExists(customComponents.userChatMessage, {
          message,
        })}
        elseShow={
          <div className="react-chatbot-kit-user-chat-message">
            {message}
            <div className="react-chatbot-kit-user-chat-message-arrow"/>
          </div>
        }
      />
      <ConditionallyRender
        ifTrue={customComponents.userAvatar}
        show={callIfExists(customComponents.userAvatar)}
        elseShow={showUserAvatar
          ? (
            <div className="react-chatbot-kit-user-avatar">
              <div className="react-chatbot-kit-user-avatar-container">
                <UserIcon className="react-chatbot-kit-user-avatar-icon" />
              </div>
            </div>
          )
          : null
        }
      />
    </div>
  );
};

export default UserChatMessage;

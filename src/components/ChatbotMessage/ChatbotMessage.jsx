import React, { useEffect, useState } from "react";
import { ConditionallyRender } from "react-util-kit";

import ChatbotMessageAvatar from "./ChatbotMessageAvatar/ChatbotMessageAvatar";
import Loader from "../Loader/Loader";

import "./ChatbotMessage.css";
import { callIfExists } from "../Chat/chatUtils";

const ChatbotMessage = ({
                          message,
                          withAvatar,
                          loading,
                          messages,
                          customComponents,
                          setState,
                          customStyles,
                          delay,
                          scrollIntoView,
                          id,
                        }) => {
  const [show, toggleShow] = useState(false);
  /*
    useEffect(() => {
      const disableLoading = (messages, setState) => {
        let defaultDisableTime = 750;
        if (delay) defaultDisableTime += delay;
        setTimeout(() => {
          const message = messages.find((message) => message.id === id);

          if (!message) return;
          message.loading = false;
          message.delay = undefined;

          setState((state) => ({ ...state, messages: messages }));
        }, defaultDisableTime);
      };

      disableLoading(messages, setState);
    }, [delay, id, setState]);
  */
  useEffect(() => {
    if (delay) {
      setTimeout(() => toggleShow(true), delay);
    } else {
      toggleShow(true);
    }
    setState(state => ({...state}));
  }, [delay]);

  const chatBoxCustomStyles = {};
  const arrowCustomStyles = {};

  if (customStyles) {
    chatBoxCustomStyles.backgroundColor = customStyles.backgroundColor;
    chatBoxCustomStyles.color = customStyles.color || '#fff';
    arrowCustomStyles.borderRightColor = customStyles.backgroundColor;
  }

  return (
    <ConditionallyRender
      ifTrue={show}
      show={
        <div className="react-chatbot-kit-chat-bot-message-container">
          <ConditionallyRender
            ifTrue={withAvatar && message}
            show={
              <ConditionallyRender
                ifTrue={customComponents.botAvatar}
                show={callIfExists(customComponents.botAvatar)}
                elseShow={<ChatbotMessageAvatar />}
              />
            }
          />

          <ConditionallyRender
            ifTrue={customComponents.botChatMessage}
            show={callIfExists(customComponents.botChatMessage, {
              message,
              loader: <Loader />,
            })}
            elseShow={
              message ? <div
                className={`react-chatbot-kit-chat-bot-message${withAvatar ? ' with-avatar' : ''}`}
                style={chatBoxCustomStyles}
              >
                <ConditionallyRender
                  ifTrue={!show}
                  show={<Loader />}
                  elseShow={<span>{message}</span>}
                />
                <ConditionallyRender
                  ifTrue={withAvatar}
                  show={
                    <div
                      className="react-chatbot-kit-chat-bot-message-arrow"
                      style={arrowCustomStyles}
                    />
                  }
                />
              </div> : null
            }
          />
        </div>
      }
    />
  );
};

export default ChatbotMessage;

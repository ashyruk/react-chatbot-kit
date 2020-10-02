import React, { useState, useRef, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import UserChatMessage from "../UserChatMessage/UserChatMessage";
import ChatbotMessage from "../ChatbotMessage/ChatbotMessage";
import ChatBotMessageWithWidget from "../ChatBotMessageWithWidget/ChatBotMessageWithWidget";
import ChatbotMessageAvatar from "../ChatBotMessage/ChatBotMessageAvatar/ChatbotMessageAvatar";
import { botMessage, callIfExists, createChatMessage } from "./chatUtils";
import ChatIcon from "../../assets/icons/paper-plane.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import "./Chat.css";

const Chat = ({
                state,
                setState,
                widgetRegistry,
                messageParser,
                customComponents,
                botName,
                showHeaderAvatar,
                showUserAvatar,
                chatInputPlaceholder,
                customStyles,
                hideChat,
              }) => {
  const { messages } = state;
  const chatContainerRef = useRef(null);

  const [input, setInputValue] = useState("");

  const scrollIntoView = () => {
    setTimeout(() => {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }, 50);
  };

  useEffect(() => {
    scrollIntoView();
  });

  const showAvatar = (messages, index) => {
    if (index === 0) return true;

    const lastMessage = messages[index - 1];

    if (lastMessage.type === "bot" && !lastMessage.widget) {
      return false;
    }
    return true;
  };

  const renderMessages = () => {
    return messages.map((messageObject, index) => {
      if (!botMessage(messageObject))
        return (
          <UserChatMessage
            message={messageObject.message}
            key={messageObject.id}
            customComponents={customComponents}
            showUserAvatar={showUserAvatar}
          />
        );

      let withAvatar;
      if (messageObject.withAvatar) {
        withAvatar = messageObject.withAvatar;
      } else {
        withAvatar = showAvatar(messages, index, messageObject.withAvatar);
      }

      const chatBotMessageProps = {
        passDownProps: { ...messageObject },
        setState,
        state,
        customComponents,
        widgetRegistry,
        messages,
      };

      if (messageObject.widget) {
        return (
          <ChatBotMessageWithWidget
            customStyles={customStyles}
            scrollIntoView={scrollIntoView}
            withAvatar={withAvatar}
            {...chatBotMessageProps}
            key={messageObject.id}
          />
        );
      }

      return (
        <ChatbotMessage
          customStyles={customStyles.botMessageBox}
          key={messageObject.id}
          withAvatar={withAvatar}
          {...chatBotMessageProps.passDownProps}
          customComponents={customComponents}
          messages={messages}
          setState={setState}
        />
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setState((state) => ({
        ...state,
        messages: [...state.messages, createChatMessage(input, "user")],
      }));

      messageParser.parse(input);

      scrollIntoView();
      setInputValue('');
    }
  };

  const customButtonStyle = {};
  if (customStyles && customStyles.chatButton) {
    customButtonStyle.backgroundColor = customStyles.chatButton.backgroundColor;
  }

  useEffect(() => {
    messageParser.onOpen && (typeof messageParser.onOpen === 'function') && messageParser.onOpen();
  }, []);

  return (
    <div className="react-chatbot-kit-chat-container">
      <div className="react-chatbot-kit-chat-inner-container">
        <div className="react-chatbot-kit-chat-header" style={customStyles.chatHeader || {}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ConditionallyRender
              ifTrue={showHeaderAvatar}
              show={
                <ConditionallyRender
                  ifTrue={customComponents.botAvatar}
                  show={callIfExists(customComponents.botAvatar)}
                  elseShow={<ChatbotMessageAvatar />}
                />
              }
            />
            {botName}
          </div>
          <div onClick={hideChat} style={{ cursor: 'pointer' }}>
            <CancelIcon className="react-chatbot-kit-chat-btn-close-icon" />
          </div>
        </div>

        <div
          className="react-chatbot-kit-chat-message-container"
          style={customStyles.chatMessagesContainer || {}}
          ref={chatContainerRef}
        >
          {renderMessages()}
          <div style={{ paddingBottom: "15px" }} />
          {state.error && (
            <div>
              <span style={{ color: 'red', fontSize: '0.85em' }}>
                {state.error}
              </span>
            </div>
          )}
        </div>

        <div className="react-chatbot-kit-chat-input-container">
          <form
            className="react-chatbot-kit-chat-input-form"
            onSubmit={handleSubmit}
          >
            <input
              className="react-chatbot-kit-chat-input"
              placeholder={chatInputPlaceholder || 'Write your message here'}
              value={input}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="react-chatbot-kit-chat-btn-send"
              style={customButtonStyle}
            >
              <ChatIcon className="react-chatbot-kit-chat-btn-send-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;

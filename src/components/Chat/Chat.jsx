import React, { useState, useRef, useEffect, Fragment } from "react";
import { ConditionallyRender } from "react-util-kit";

import UserChatMessage from "../UserChatMessage/UserChatMessage";
import ChatbotMessage from "../ChatbotMessage/ChatbotMessage";
import ChatBotMessageWithWidget from "../ChatBotMessageWithWidget/ChatBotMessageWithWidget";
import ChatbotMessageAvatar from "../ChatBotMessage/ChatBotMessageAvatar/ChatbotMessageAvatar";
import { botMessage, callIfExists, createChatMessage, formatDate } from "./chatUtils";
import ChatIcon from "../../assets/icons/paper-plane.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import "./Chat.css";
import InlineLoader from "../InlineLoader/InlineLoader";

const Chat = ({
                state,
                setState,
                widgetRegistry,
                messageParser,
                customComponents,
                botName,
                headerDescription,
                locale,
                showHeaderAvatar,
                showUserAvatar,
                chatInputPlaceholder,
                customStyles,
                hideChat,
                visible,
                firstOpen,
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

    return !(lastMessage.type === "bot" && !lastMessage.widget);
  };

  const renderMessages = () => {
    const dateGroupMessages = messages.map(message => ({
      ...message,
      createdAt: formatDate(message.createdAt, locale),
    }));
    return dateGroupMessages.map((messageObject, index, arr) => {
      let messageComponent;

      if (!botMessage(messageObject)) {
        messageComponent = (
          <UserChatMessage
            message={messageObject.message}
            key={messageObject.id}
            customComponents={customComponents}
            showUserAvatar={showUserAvatar}
          />
        );
      } else {

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
          messageComponent = (
            <ChatBotMessageWithWidget
              customStyles={customStyles}
              scrollIntoView={scrollIntoView}
              withAvatar={withAvatar}
              {...chatBotMessageProps}
              key={messageObject.id}
            />
          );
        } else {
          messageComponent = (
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
        }
      }

      return (index === 0) || ((index > 0) && (messageObject.createdAt !== arr[index - 1].createdAt))
        ? (
          <Fragment key={messageObject.id}>
            <span className="react-chatbot-kit-chat-date-mark">
              {messageObject.createdAt}
            </span>
            {messageComponent}
          </Fragment>
        )
        : messageComponent
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
    if (!firstOpen) {
      messageParser.onOpen && (typeof messageParser.onOpen === 'function') && messageParser.onOpen();
    }
  }, [firstOpen]);

  return (
    <div
      className="react-chatbot-kit-chat-container"
      style={{ display: visible ? 'block' : 'none' }}
    >
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
            <div className="react-chatbot-kit-chat-header-caption">
              <span className="name">{botName}</span>
              <span className="description">{headerDescription}</span>
            </div>
          </div>
          <div onClick={hideChat} className="react-chatbot-kit-chat-btn-close">
            <CancelIcon className="react-chatbot-kit-chat-btn-close-icon" />
          </div>
        </div>

        <div
          className="react-chatbot-kit-chat-message-container"
          style={customStyles.chatMessagesContainer || {}}
          ref={chatContainerRef}
        >
          {renderMessages()}
          <div style={{ paddingBottom: "15px" }} className="last-padding-div" />
          {state.error && (
            <div>
              <span
                style={{
                  color: '#c6c6c6',
                  fontSize: '0.85rem',
                  paddingBottom: '5px',
                  fontStyle: 'italic',
                }}
              >
                {state.error}
              </span>
              <InlineLoader/>
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

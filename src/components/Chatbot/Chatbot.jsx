import React, { useState } from "react";
import { ConditionallyRender } from "react-util-kit";
import Chat from "../Chat/Chat";

import WidgetRegistry from "../WidgetRegistry/WidgetRegistry";
import ChatbotError from "../ChatbotError/ChatbotError";

import { callIfExists, createChatBotMessage } from "../Chat/chatUtils";
import {
  getCustomStyles,
  getInitialState,
  getWidgets,
  getCustomComponents,
  getBotName,
  validateProps,
  getShowHeaderAvatar,
  getChatInputPlaceholder,
} from "./utils";
import ChatbotMessageAvatar from "../ChatBotMessage/ChatBotMessageAvatar/ChatbotMessageAvatar";

const Chatbot = ({ actionProvider, messageParser, config, onOpen }) => {
  const [expanded, setExpanded] = useState(false);
  if (!config || !actionProvider || !messageParser) {
    return (
      <ChatbotError message="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?" />
    );
  }

  const propsErrors = validateProps(config, messageParser);

  if (propsErrors.length) {
    const errorMessage = propsErrors.reduce((prev, cur) => {
      prev += cur;
      return prev;
    }, "");

    return <ChatbotError message={errorMessage} />;
  }

  const initialState = getInitialState(config);

  const [state, setState] = useState({
    messages: [...config.initialMessages],
    ...initialState,
  });

  const customStyles = getCustomStyles(config);
  const customComponents = getCustomComponents(config);
  const botName = getBotName(config);
  const showHeaderAvatar = getShowHeaderAvatar(config);
  const chatInputPlaceholder = getChatInputPlaceholder(config);

  const actionProv = new actionProvider(createChatBotMessage, setState);
  const widgetRegistry = new WidgetRegistry(setState, actionProv);
  const messagePars = new messageParser(actionProv, state);

  const widgets = getWidgets(config);
  widgets.forEach((widget) => widgetRegistry.addWidget(widget));
  const onOpenChat = () => {
    onOpen && (typeof onOpen === 'function') && onOpen();
    setExpanded(true);
  };
  const onHideChat = () => {
    setExpanded(false);
    setState((state) => ({ ...state, messages: [] }));
  };

  return (
    <ConditionallyRender
      ifTrue={expanded}
      show={(
        <Chat
          state={state}
          setState={setState}
          widgetRegistry={widgetRegistry}
          messageParser={messagePars}
          customComponents={{ ...customComponents }}
          botName={botName}
          showHeaderAvatar={showHeaderAvatar}
          chatInputPlaceholder={chatInputPlaceholder}
          customStyles={{ ...customStyles }}
          hideChat={onHideChat}
        />
      )}
      elseShow={(
        <div
          onClick={onOpenChat}
          style={{ marginBottom: '15px', cursor: 'pointer' }}
        >
          <ConditionallyRender
            ifTrue={customComponents.botAvatar}
            show={callIfExists(customComponents.botAvatar)}
            elseShow={<ChatbotMessageAvatar />}
          />
        </div>
      )}
    />
  );
};

export default Chatbot;

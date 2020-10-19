import React, { useState, useEffect } from "react";
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
  getShowUserAvatar,
  getLocale, getHeaderDesc
} from "./utils";
import ChatbotMessageAvatar from "../ChatBotMessage/ChatBotMessageAvatar/ChatbotMessageAvatar";

const Chatbot = ({ actionProvider, messageParser, config, onOpen }) => {
  const [firstOpen, setFirstOpen] = useState(true);
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
  const locale = getLocale(config);
  const botName = getBotName(config);
  const headerDescription = getHeaderDesc(config);
  const showHeaderAvatar = getShowHeaderAvatar(config);
  const showUserAvatar = getShowUserAvatar(config);
  const chatInputPlaceholder = getChatInputPlaceholder(config);

  const actionProv = new actionProvider(createChatBotMessage, setState, state);
  const widgetRegistry = new WidgetRegistry(setState, actionProv);
  const messagePars = new messageParser(actionProv, state);

  const widgets = getWidgets(config);
  widgets.forEach((widget) => widgetRegistry.addWidget(widget));

  const onOpenChat = () => {
    onOpen && (typeof onOpen === 'function') && onOpen();
    if (firstOpen) {
      setFirstOpen(false);
    }
    setExpanded(true);
    setState((state) => ({
      ...state,
      expanded: true,
    }));
  };
  const onHideChat = () => {
    setExpanded(false);
    setState((state) => ({
      ...state,
      expanded: false,
    }));
  };

  useEffect(() => {
    async function waitAndOpen() {
      await setTimeout(onOpenChat, initialState.waitForFirstOpenMs);
    }
    firstOpen && waitAndOpen();
  }, []);

  return (
    <>
      <Chat
        state={state}
        visible={expanded}
        firstOpen={firstOpen}
        setState={setState}
        widgetRegistry={widgetRegistry}
        messageParser={messagePars}
        customComponents={{ ...customComponents }}
        botName={botName}
        headerDescription={headerDescription}
        locale={locale}
        showHeaderAvatar={showHeaderAvatar}
        showUserAvatar={showUserAvatar}
        chatInputPlaceholder={chatInputPlaceholder}
        customStyles={{ ...customStyles }}
        hideChat={onHideChat}
      />
      <div
        onClick={onOpenChat}
        style={{ cursor: 'pointer', display: expanded ? 'none' : 'block' }}
      >
        <ConditionallyRender
          ifTrue={customComponents.minimizedChat}
          show={callIfExists(customComponents.minimizedChat, { onOpen: onOpenChat })}
          elseShow={customComponents.botAvatar
            ? callIfExists(customComponents.botAvatar)
            : <ChatbotMessageAvatar />}
        />
      </div>
    </>
  );
};

export default Chatbot;

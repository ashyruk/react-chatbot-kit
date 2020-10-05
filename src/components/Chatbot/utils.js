export const getCustomStyles = (config) => config.customStyles || {};

export const getInitialState = (config) => {
  if (config.state) {
    return config.state;
  }
  return {};
};

export const getWidgets = (config) => {
  if (config.widgets) {
    return config.widgets;
  }
  return [];
};

export const getCustomComponents = (config) => {
  if (config.customComponents) {
    return config.customComponents;
  }

  return {
    botMessageBox: {},
    chatButton: {},
  };
};

export const getBotName = (config) => config.botName || 'Bot';
export const getHeaderDesc = (config) => config.headerDescription || '';
export const getLocale = (config) => config.locale || 'en';
export const getShowHeaderAvatar = (config) => config.showHeaderAvatar || false;
export const getShowUserAvatar = (config) => config.showUserAvatar || false;
export const getChatInputPlaceholder = (config) => config.chatInputPlaceholder;

export const getObject = (object) => {
  if (typeof object === "object") return object;
  return {};
};

export const validateProps = (config, MessageParser) => {
  const errors = [];
  if (!config.initialMessages) {
    errors.push(
      "Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."
    );
  }

  const messageParser = new MessageParser();
  if (!messageParser["parse"]) {
    errors.push(
      "Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."
    );
  }
  if (!messageParser["onOpen"]) {
    errors.push(
      "Messageparser must implement the method 'onOpen', please add this method to your object." +
      " The signature is onOpen(): void."
    );
  }

  return errors;
};

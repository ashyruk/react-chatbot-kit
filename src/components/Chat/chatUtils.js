import { de, enGB, ru } from "date-fns/locale";
import { format, isThisYear, isToday, isYesterday } from "date-fns";

export const uniqueIdGenerator = () => {
  let num = 1;
  return () => {
    return (num += 1);
  };
};

const uniqueId = uniqueIdGenerator();

export const botMessage = (message) => {
  if (message.type === "bot") {
    return true;
  }
  return false;
};

export const createChatMessage = (message, type) => {
  return {
    message: message,
    type: type,
    id: uniqueId(),
    createdAt: new Date().toISOString(),
  };
};

export const createChatBotMessage = (message, options) => {
  return {
    ...createChatMessage(message, "bot"),
    ...options,
    loading: true,
  };
};

export const callIfExists = (func, ...args) => {
  if (func) {
    return func(...args);
  }
};

const locales = {
  ru,
  de,
  en: enGB,
};
const strings = {
  ru: {
    today: 'Сегодня',
    yesterday: 'Вчера',
  },
  de: {
    today: 'Heute',
    yesterday: 'Gestern',
  },
  en: {
    today: 'Today',
    yesterday: 'Yesterday',
  }
};

export const formatDate = (dateISO, loc) => {
  const date = new Date(dateISO);
  if (isToday(date)) {
    return strings[loc].today;
  } else if (isYesterday(date)) {
    return strings[loc].yesterday;
  } else if (isThisYear(date)) {
    return format(date, 'LLLL d', { locale: locales[loc] });
  } else {
    return format(date, 'LLLL d, yyyy', { locale: locales[loc] });
  }
};

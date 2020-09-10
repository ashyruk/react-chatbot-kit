import React, { Fragment, useEffect, useState } from "react";

import ChatbotMessage from "../ChatbotMessage/ChatbotMessage";
import { ConditionallyRender } from "react-util-kit";
import Loader from "../Loader/Loader";

const ChatbotMessageWithWidget = ({
                                    passDownProps,
                                    messages,
                                    setState,
                                    scrollIntoView,
                                    state,
                                    customComponents,
                                    customStyles,
                                    widgetRegistry,
                                    withAvatar,
                                  }) => {
  const [load, toggleLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => toggleLoad(false), passDownProps.delay || 500);
    // scrollIntoView();
  },[]);

  return (
    load
      ? <Loader/>
      : (
        <Fragment>
          <ChatbotMessage
            { ...passDownProps }
            customStyles={customStyles.botMessageBox}
            messages={messages}
            withAvatar={withAvatar}
            setState={setState}
            customComponents={customComponents}
            scrollIntoView={scrollIntoView}
        />
          <ConditionallyRender
            // ifTrue={!passDownProps.loading}
            ifTrue={!load}
            show={widgetRegistry.getWidget(passDownProps.widget, {
              ...state,
              scrollIntoView,
              passDownProps,
            })}
          />
        </Fragment>
      )
  );
};

export default ChatbotMessageWithWidget;

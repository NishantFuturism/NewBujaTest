import React from 'react';
import Image from 'next/image';
import { createChatBotMessage } from "react-chatbot-kit";
import minChatBox from '../../../public/images/minimize-chatbox.png';
import chatBotLogo from '../../../public/images/bot-logo.png';
const handleChatBotClose = () => {
  const x = document.getElementsByClassName("react-chatbot-kit-chat-container");
  if (x[0].style.display === "none") {
    x[0].style.display = "block";
  } else {
    x[0].style.display = "none";
  }
}
const chatbotConfig = {
  botName: "Adibuja Bot",
  initialMessages: [createChatBotMessage("Welcome to Amy Bot!")],
  customComponents: {
    header: () => <div className="chatbot-header"><div className="chatbot-header-left"><Image fetchpriority="high" loading="eager" alt="chatbot-header" src='/images/bot-logo-icon.png' width={24} height={24} /*style={{ width: '24px', height: '24px' }}*/ /><span style={{ marginLeft: "5px" }}>Amy <b>bot</b></span></div><div style={{ flex: "1" }}><Image fetchpriority="high" loading="eager" alt="close" role='presentation' onClick={handleChatBotClose} onKeyPress={handleChatBotClose} src="/images/minimize-chatbox.png" width={27} height={27} /*style={{ width: '27px', height: '27px' }}*/ ></Image></div> </div>
  },
}
export default chatbotConfig
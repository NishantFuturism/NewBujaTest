import React from 'react';
// import '../../../public/assets1/css/style.min.css';
import '../../../public/assets/css/style.min.css';
const ChatBotLogo = () => {
  const chatBotLogoClickHandler = () => {
    const x = document.getElementsByClassName("react-chatbot-kit-chat-container");
    
    if (x[0].style.display === "") {
      x[0].style.display = "block";
    } else if (x[0].style.display === "none") {
      x[0].style.display = "block";
    } else {
      x[0].style.display = "none";
    }
  }
  return (
    <>
      <div className="chatbot-logo-initial" title="Amy Chatbot" style={{ display: "block" }}> <span id="chatbot-logo-initial-span"> <img alt="amy-chatbot" aria-label="chatbotimg" onClick={chatBotLogoClickHandler} onKeyPress={chatBotLogoClickHandler} src="/images/bot-logo-icon.png" style={{ width: '45px', height: '45px' }} className="img-responsive center-block width-100" /> </span> </div>
    </>
  )
}
export default ChatBotLogo;
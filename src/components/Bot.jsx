import React, { useState } from "react";
import { IoChatbox, IoSend } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const Bot = () => {
  const [msg, setMsg] = useState("");

  const scrolltoBottom = () => {
    // auto scroll to bottom
    const chatBox = document.querySelector(".chat-box"); // gets the chat box
    chatBox.scrollTop = chatBox.scrollHeight; // scrolls to the bottom
  };

  const createChat = (msg, type) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", type);
    let content =
      type === "outgoing"
        ? `<p>${msg}</p>`
        : `<span className="material-icons-outlined">smart_toy</span>
        <p>${msg}</p>`;
    chatLi.innerHTML = content;
    return document.querySelector(".chat-box").appendChild(chatLi);
  };

  const chatBotToggle = () => {
    // the show-chat-bot div controls the visibility of the chatbot.
    // on click we want to add or remove the 'show' class to toggle the visibility.
    const chatBot = document.querySelector(".show");
    chatBot.classList.toggle("show-chat-bot");
  };

  const generateResponse = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: msg }],
      }),
    };

    // sends the POST request to the API, gets the response and logs it.
    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const botReply = data.choices[0].message.content;
        createChat(botReply, "incoming");
        scrolltoBottom();
      })
      .catch((error) => {
        createChat(error, "incoming");
        scrolltoBottom();
      });
  };

  const handleChat = () => {
    if (!msg) return;

    // creates an outgoing chat
    createChat(msg, "outgoing");

    // clears the input field & state of the message
    document.querySelector("input").value = "";
    setMsg("");

    // generates a response from ChatGPT
    generateResponse();

    scrolltoBottom();
  };

  return (
    <div className="show show-chat-bot relative">
      <button
        className="botToggle bg-purple h-[50px] w-[50px] md:w-[75px] md:h-[75px]"
        onClick={chatBotToggle}
      >
        <span className="flex">
          <IoChatbox size={35} />
        </span>
        <span className="material-icons-outlined">
          <IoMdClose size={45} />
        </span>
      </button>
      <div className="chat-bot w-[200px] md:w-[420px]">
        <header className="bg-purple font-bold md:text-[20px] sm:text-[20px] xs:text-[20px] text-[18px] ">
          <h2>ChatBot</h2>
        </header>
        <ul className="chat-box h-[350px] md:h-[510px]">
          <li className="chat incoming">
            <span className="material-icons-outlined bg-purple">smart_toy</span>
            <p>
              Hi, I hope you're enjoying your stay! Anything you want to chat
              about?
            </p>
          </li>
        </ul>

        <div className="chat-input">
          <input
            className="bg-purple"
            type="text"
            placeholder="Type a message"
            onChange={(e) => setMsg(e.target.value.trim())}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleChat();
            }}
          />
          <span
            id="send-btn"
            className="material-icons-outlined"
            onClick={handleChat}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bot;

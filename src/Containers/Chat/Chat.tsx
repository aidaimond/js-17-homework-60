import React, {useEffect, useState} from 'react';
import MessageForm from "../../Components/MessageForm/MessageForm";
import {Message, MessageMutation} from "../../types";
import MessageCard from "../../Components/MessageCard/MessageCard";
import axios, {AxiosResponse} from "axios";

let url = 'http://146.185.154.90:8000/messages';
let urlPostRequest = 'http://146.185.154.90:8000/messages';
let interval: NodeJS.Timeout;

const Chat = () => {

  const [messages, setMessages] = useState<MessageMutation[]>([]);

  const request = (urlPost: string) => {
    try {
      axios.get<MessageMutation[]>(urlPost).then((response: AxiosResponse) => {
        if (response.data.length) {
          const data = response.data;
          url = `http://146.185.154.90:8000/messages?datetime=${data[data.length - 1].datetime}`;
          setMessages(prev => ([...prev, ...data]));
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addMessage = (e: React.FormEvent<HTMLFormElement>, newMsg: Message) => {
    e.preventDefault();
    clearInterval(interval)
    try {
      const data = new URLSearchParams();
      data.set('message', newMsg.message);
      data.set('author', newMsg.author);

      axios.post<Message>(urlPostRequest, data)
        .then(function (response: AxiosResponse) {
          console.log(response);
        })
      newMsg.author = '';
      newMsg.message = '';
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    request(url);
    interval = setInterval(() => {
      request(url);
    }, 2000);
  }, [messages]);

  return (
    <div>
      <MessageForm addMessage={addMessage}/>
      {messages.reverse().map((msg) => (
          <MessageCard
            key={msg._id}
            author={msg.author}
            message={msg.message}
            datetime={msg.datetime}
          />
        )
      )}
    </div>
  );
};

export default Chat;
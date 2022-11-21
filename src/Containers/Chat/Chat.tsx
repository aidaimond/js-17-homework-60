import React, {useEffect, useState} from 'react';
import MessageForm from "../../Components/MessageForm/MessageForm";

const url = 'http://146.185.154.90:8000/messages';

const Chat = () => {

  const [messages, setMessages] = useState();

  const request = () => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const msg = await response.json();
        setMessages(msg);
      }
    }
    fetchData().catch(console.error);
  };

  console.log(messages);

  useEffect(() => {
    request()
  }, []);

  return (
    <div>
      <MessageForm/>
    </div>
  );
};

export default Chat;
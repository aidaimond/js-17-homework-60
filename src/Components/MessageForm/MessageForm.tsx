import React, {useState} from 'react';
import {Message} from "../../types";

interface Props {
  addMessage: (e: React.FormEvent<HTMLFormElement>, newMsg: Message) => void;
}

const MessageForm: React.FC<Props> = ({addMessage}) => {

  const [newMsg, setNewMsg] = useState({
    author: '', message: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewMsg(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form
      className="m-3 d-flex border border-2 rounded bg-secondary bg-opacity-10 w-75 justify-content-between"
      onSubmit={(e)=> addMessage(e, newMsg)}
    >
      <label className="m-2 mt-3">
        Author
        <input
          className="form-control m-2"
          name="author"
          type="text"
          value={newMsg.author}
          placeholder="Enter your username"
          onChange={(e) => onInputChange(e)}
        />
      </label>
      <label className="m-2 mt-3">
        New Message
        <input
          className="form-control m-2"
          name="message"
          type="text"
          value={newMsg.message}
          placeholder="Enter your message"
          onChange={(e) => onInputChange(e)}
        />
      </label>
      <button
        disabled={newMsg.message === '' || newMsg.author === ''}
        className="btn btn-secondary w-25 h-25 mt-5 mx-3"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default MessageForm;
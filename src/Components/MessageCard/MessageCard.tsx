import React from 'react';
import {MessageMutation} from "../../types";

const MessageCard: React.FC<MessageMutation> = (props) => {
  return (
    <div className="card p-1 m-5 bg-secondary bg-opacity-10 w-75">
      <div className="card-body">
        <h5 className="card-title">Author: {props.author}</h5>
        <p className="card-text">Message: {props.message}</p>
        <p className="card-text">Date of send: {props.datetime}</p>
      </div>
    </div>
  );
};

export default MessageCard;
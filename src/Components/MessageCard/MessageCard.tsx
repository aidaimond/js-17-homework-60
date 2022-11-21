import React from 'react';

interface Props {
  author: string;
  message: string;
  datetime: string;
}

const MessageCard: React.FC<Props>= (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Author: {props.author}</h5>
        <p className="card-text">Message: {props.message}</p>
        <p className="card-text">Date of send: {props.datetime}</p>
      </div>
    </div>
  );
};

export default MessageCard;
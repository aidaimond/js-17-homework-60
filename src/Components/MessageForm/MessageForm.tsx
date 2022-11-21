import React from 'react';

const MessageForm = () => {
  return (
        <form
          className="m-3 d-flex border border-2 rounded">
          <label className="m-2 mt-3" htmlFor="author">
            Author
          <input
            className="form-control m-2"
            id="author"
            type="text"
            placeholder="Enter your username"
          />
          </label>
          <label className="m-2 mt-3" htmlFor="message">
            New Message
          <input
            className="form-control m-2"
            id="message"
            type="text"
            placeholder="Enter your message"
          />
          </label>
          <button
            className="btn btn-secondary w-25 h-25 mt-5 ms-3"
            type="submit"
          >
            Send
          </button>
        </form>
  );
};

export default MessageForm;
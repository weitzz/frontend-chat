import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form action="" className="form">
    <input type="text" className="input"
      placeholder="Comece a sua conversa..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onkeypress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}><SendIcon fontSize="large" /></button>
  </form>
)
export default Input;
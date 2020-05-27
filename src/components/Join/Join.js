import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './Join.css';
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (

    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat 😜</h1>
        <div> <input type="text" placeholder="Seu nome..." className="joinInput" onChange={(event) => setName(event.target.value)} /></div>
        <div> <input type="text" placeholder="Sala..." className="joinInput" onChange={(event) => setRoom(event.target.value)} /></div>
      </div>
      <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button className="button" type="submit">Entrar</button>

      </Link>

    </div>
  )
}
export default Join;
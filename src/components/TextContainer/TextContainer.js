import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Criado com React, Express, Node e Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Feito por Tatiane Weitzel <span role="img" aria-label="emoji">⬅️ </span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Pessoas online no chat:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
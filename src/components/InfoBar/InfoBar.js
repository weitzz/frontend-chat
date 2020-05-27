import React from 'react';
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png"
import './InfoBar.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const InfoBar = ({ room }) => (
  <div className='infoBar'>
    <div className="leftInnerContainer">
      <img src={onlineIcon} className="onlineIcon" alt="online" />
      <h3>{room} 😂</h3>
    </div>
    <div className="RightInnerContainer">
      <a href="/"> <img src={closeIcon} alt="close " /></a>

    </div>
  </div>
)
export default InfoBar;
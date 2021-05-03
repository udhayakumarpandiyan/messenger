import React from 'react';
import {AvatarIcon} from '../../../icons';

const Messages = (props)=>{
return(
    <div className="message-container">
   
    {props.messages && props.messages.map((message, index)=>{
        return(
            <div className="message">
                <div><img className="avatar" src={message.picture || AvatarIcon}/></div>
                <div className="message-inner-container"> 
                 <div className="message-content">
                   <label className="message-sender">{message.sender}</label>
                   <label className="message-text">{message.text}</label>
                 </div>
                 <label className="message-time">{message.time}</label>
                </div>
            </div>
        )
    })}
</div>
)
}
export default Messages;
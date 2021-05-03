import React, { useState , useRef} from 'react';
import ReactDOM from 'react-dom';
import {NewMessageIcon,SendIcon, CloseIcon} from '../../../icons';

const MessagePopup = (props)=>{
    let parent = document.getElementById('root');
    const [isLoading, setIsLoading] = useState(false);
    const msgRef = useRef(null);
    const onSend = ()=>{
        setIsLoading(true);
        setTimeout(()=>{
           
            props.onSend(msgRef.current.value);
            setIsLoading(false);
        }, 1000);
        
    }
    return ReactDOM.createPortal(
        <div className="message-popup">
             <button className="close-button" onClick={()=>props.onClose()}>
                <img className="close-icon" src={CloseIcon}></img>
            </button>
            <textarea ref={msgRef} className="textarea"/>
            <button className="send-button" onClick={()=>onSend()}>
                <img className="send-icon" src={SendIcon}></img>
            </button>
            {isLoading && <div className="loader-container">
            <div className="loader"></div>
    </div> }
        </div>,
         parent );
}

const NewMessage = (props)=>{
const [showPopup, setShowPopup] = useState(false);

const onSend = (msg)=>{
    props.onSendMessage(msg);
setShowPopup(false);
}

return(<div className="new-message">

  {showPopup ? <MessagePopup onClose={()=>setShowPopup(false)}
  onSend={onSend}/> :   <div className="new-message-inner">
      <img className="new-message-icon" src={NewMessageIcon}
       onClick={()=>setShowPopup(!showPopup)}/>
  </div>}
    

</div>)
}
export default NewMessage;
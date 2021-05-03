import React from 'react';
import Header from '../components/Header';
import Messages from '../components/Messages';
import '../style/index.css';

import NewMessage from '../components/NewMessage';
import data from '../../../json/data.json';

const messages = data.messages;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={messages: messages};
    }
    onSendMessage =(msg)=>{
     let newMessage = {sender:"Me", text: msg, time: Date.now(), picture:''};
     messages.push(newMessage);
     this.setState({messages:messages});
    }
    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };
    }
    render(){
return(
<div className="home-conatiner">
    <Header/>
    <Messages messages={this.state.messages}/>
    <NewMessage onSendMessage={this.onSendMessage}/>
</div>)
    }
}
export default Home;
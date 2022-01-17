import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/>);
    // let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();

    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    };
    // if(!props.isAuth) return <Navigate to={'/login'}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={props.newMessageBody}
                              onChange={onNewMessageChange}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>
                        Send
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs; 
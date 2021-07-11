import React from "react";
import dialogs from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialoItems";


const Dialogs = (props) => {

    const dialogsElement = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElement = props.massages.map((dialog) => <Message message={dialog.message}/>)
    const newMessageElement = React.createRef()
    const addMessage = () => {
        const textMessage = newMessageElement.current.value
        alert(textMessage);
    }
    return (
        <div className={dialogs.dialogs}>

            <div className={dialogs.dialogsItems}>
                <h3>Dialogs</h3>
                {dialogsElement}
            </div>
            <div className={dialogs.massages}>
                <h3>Messages</h3>
                {messagesElement}
                <textarea  ref={newMessageElement} />
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
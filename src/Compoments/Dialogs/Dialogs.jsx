import React from "react";
import dialogs from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialoItems";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = props.messageData.map((dialog)=> <Message message={dialog.message}/>)
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={dialogs.massages}>
                {messagesElement}
            </div>
        </div>

    )
}

export default Dialogs;
import React from "react";
import dialogs from './../Dialogs.module.css'



const Message = (props) => {
    return (
        <div className={dialogs.massages.massage}>{props.message}</div>
    )
}




export default Message;
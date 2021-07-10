import React from "react";
import dialogs from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={dialogs.dialog + ' ' + dialogs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;
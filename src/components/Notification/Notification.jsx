import React from "react";
import css from '../Notification/Notification.module.css'

export default function Notification({message}) {
    return <div>
            <p className={css.Message}>{ message}</p>
           </div>
}
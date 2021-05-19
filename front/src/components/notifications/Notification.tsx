import { timeout } from 'q';
import react from 'react';
import React, {useState} from 'react';

const Notification = (props:any) =>{
    const [exit, setExit] = useState(false);

    function closeNotification(){
        setExit(true);
        setTimeout(() => {
            props.dispatch({
                type:"REMOVE_NOTIFICATION",
                id: props.id
            })
        }, 400);
    }

    return(
        <button 
            className = {`notificationItem ${
                props.type === "REST_OVER" ? "restOver" : "workOver"
            } ${exit ? "exit":""}`}

            onClick={()=>closeNotification()}
        >
            <p className="title">{props.title}</p>
            <p className="message">{props.message}</p>

        </button>
    )
};

export default Notification;
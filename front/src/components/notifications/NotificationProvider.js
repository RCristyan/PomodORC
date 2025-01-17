import react, { createContext } from 'react';
import React, {useState, useReducer, useContext} from 'react';
import Notification from './Notification';
import './Notifications.css'

const NotificationContext = createContext();

const NotificationProvider = (props) =>{
    const [state, dispatch] = useReducer( (state, action) =>{
        switch(action.type){
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter(el => el.id !== action.id);
            default:
                return state
        }
    }, []);

    return(
        <NotificationContext.Provider value={dispatch}>
            <div className="notificationWrapper">
                {state.map(note => {
                    return <Notification dispatch={dispatch} key={note.id} {...note} />
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
};

export default NotificationProvider;

export const useNotification = () =>{
    const dispatch = useContext(NotificationContext);

    return(props) =>{
        dispatch({
            type:"ADD_NOTIFICATION",
            payload:{
              id: Math.floor(Math.random()*100),  
              ...props
            }
          })
    }
};
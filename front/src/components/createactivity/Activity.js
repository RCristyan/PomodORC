import react, { createContext } from 'react';
import React, {useState, useReducer, useContext} from 'react';
import Notification from './Notification';
import './Notifications.css'

const ActivityContext = createContext();

const ActivityProvider = (props) =>{
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
        <ActivityContext.Provider value={dispatch}>
            <div className="notificationWrapper">
                {state => {
                    return <Notification dispatch={dispatch} key={state.id} {...state} />
                }}
            </div>
            {props.children}
        </ActivityContext.Provider>
    )
};

export default ActivityProvider;

export const useNotification = () =>{
    const dispatch = useContext(ActivityContext);

    return(props) =>{
        dispatch({
            ...props
          })
    }
};
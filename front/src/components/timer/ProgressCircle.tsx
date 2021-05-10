import react from 'react';
import "./timer.css";
import React, { useEffect, useState, useRef } from 'react';

const ProgressCircle = (props:any) =>{
    const{
        size, 
        totaltime,
        time,
        strokeWidth,
    } = props;

    const center= size/2;
    const radius= size/2 - strokeWidth/2;
    const circumference = radius*2*Math.PI;

    const progress = (totaltime - time) / totaltime;

    /*
    updateCountdown()

    useEffect(() => {
        const setCountdown = setInterval(() => {
            updateCountdown()
            const progressOffset = (progress)*circumference;
            setOffset(progressOffset);
        }, 1000);
        return () => clearInterval(setCountdown);
    }, [setOffset, circumference, progress, offset]);

    function updateCountdown(){
        if(time < 0){
          time = totaltime
        }

        time--;
        ///console.log({time})
        progress = (totaltime - time) / totaltime;
    }*/

    const circleRef = useRef(null);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const progressOffset = (progress)*circumference;
        setOffset(progressOffset);
    }, [setOffset, circumference, progress, offset]);

    return(
        <>
        <svg className="progress_circle" height="120" width="120">
            <circle 
                className="bg_circle" 
                cx={center} 
                cy={center} 
                r={radius}
                strokeWidth={strokeWidth}
            >               
            </circle>

            <circle 
                className="circle" 
                cx={center} 
                cy={center} 
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                ref={circleRef}
                strokeDashoffset={offset}
            >           
            </circle>

            <text className="numbers" x={center} y={center}>
                00:00
            </text>
        </svg>
        </>
    );
}

export default ProgressCircle;
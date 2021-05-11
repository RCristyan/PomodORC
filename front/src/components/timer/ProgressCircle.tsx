import react from 'react';
import "./timer.css";
import React, { useEffect, useState, useRef } from 'react';

const ProgressCircle = (props:any) =>{
    const{
        size, 
        totaltime, 
        strokeWidth,
    } = props;

    const center= size/2;
    const radius= size/2 - strokeWidth/2;
    const circumference = radius*2*Math.PI;

    let initial, totalsecs:number, perc, paused, mins:number, seconds:number;

    mins = 2;
    totalsecs = 60;
    seconds = 5;
    /*setTimeout("decrementT()", 60);

    function setProgress(percent:number){
        const offset = circumference - circumference*(percent/100);
        const circle:any = document.querySelector(".progress_circle");
        circle.style.strokeDashoffset = offset;
    }

    function decrementT(){
        ///mindiv.textContent = Math.floor(seconds/60);
        ///secdiv.textContent = seconds % 60;

        if(seconds > 0){
            perc = Math.ceil(((totalsecs - seconds) / totalsecs)* 100);
            setProgress(perc);
            seconds--;
            initial = window.setTimeout("decrementT()", 1000);
        }else{
            mins = 0;
            seconds = 0;
        }
    }*/

    let progress = (totalsecs - seconds) / totalsecs;

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
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
                stroke-width={strokeWidth}
            >               
            </circle>

            <circle 
                className="circle" 
                cx={center} 
                cy={center} 
                r={radius}
                stroke-width={strokeWidth}
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
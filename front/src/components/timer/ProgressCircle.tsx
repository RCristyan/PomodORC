import react from 'react';
import "./timer.css";
import React, { useEffect, useState, useRef } from 'react';

const ProgressCircle = (props: any) => {
    const {
        size,
        circleTotalTime,
        strokeWidth,
        timerSec,
        timerMin
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = radius * 2 * Math.PI;

    let timeNow = timerMin*60 + timerSec;
    const progress = (circleTotalTime - timeNow) / circleTotalTime;

    const circleRef:any = useRef(null);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const progressOffset = (progress) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 2s ease-out;';
    }, [setOffset, circumference, progress, offset]);



    return (
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
                {
                 `${timerMin < 10 ? "0" + timerMin : timerMin}:${timerSec < 10 ? "0" + timerSec : timerSec}`
                }
            </text>
        </svg>
        </>
    );
}

export default ProgressCircle;
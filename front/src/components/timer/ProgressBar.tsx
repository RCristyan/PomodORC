import react from 'react';
import "./timer.css";
import arrow from '../../assets/icon_arrow1.png';
import React, { useEffect, useState, useRef } from 'react';

const ProgressBar = (props:any) =>{
    const{
        totaltime, 
        strokeWidth,
    } = props;

    let initial, totalsecs:number, paused, mins:number, seconds:number;

    mins = 2;
    totalsecs = 60;
    seconds = 59;

    let progress = (totalsecs - seconds) / totalsecs;

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    useEffect(() => {
        const progressOffset = (progress)*400;
        setOffset(progressOffset);
    }, [setOffset, progress, offset]);

    return(
        <>
        <svg className="progress_bar" height="10" width="120">
            <rect 
                className="bg_bar" 
                rx="2.5" ry="2.5"  width="400" height="5"
            />

            <rect 
                className="bar" 
                rx="2.5" ry="2.5"  width={offset} height="5"
            />

        </svg>
        </>
    );
}

export default ProgressBar;
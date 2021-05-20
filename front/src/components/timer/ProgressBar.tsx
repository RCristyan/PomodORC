/* eslint-disable no-restricted-globals */
import react from 'react';
import "./timer.css";
import arrow from '../../assets/icon_arrow1.png';
import React, { useEffect, useState, useRef } from 'react';

const ProgressBar = (props: any) => {
    const {
        totaltime,
        strokeWidth,
        timeNow
    } = props;

    ///let timeNow = timerMin*60 + timerSec;
    let progress = 1 - ((totaltime - timeNow) / totaltime);

    const barRef:any = useRef(null);
    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
        const progressOffset = (progress) * 400;
        setOffset(progressOffset);
        barRef.current.style = 'transition: width 2s ease-out;';
    }, [setOffset, progress, offset]);

    return (
        <>
            <svg className="progress_bar" height="10" width="120">
                <rect
                    className="bg_bar"
                    rx="2.5" ry="2.5" width="400" height="5"
                />

                <rect
                    className="bar"
                    rx="2.5" ry="2.5" 
                    width={offset} height="5"
                    ref={barRef}
                />

            </svg>
        </>
    );
}

export default ProgressBar;
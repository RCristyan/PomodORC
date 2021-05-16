/* eslint-disable no-restricted-globals */
import react from 'react';
import "./timer.css";
import React, { useEffect, useState, useRef } from 'react';

const ProgressBar = (props: any) => {
    const {
        totaltime,
        strokeWidth,
    } = props;

    // const center= length/2;
    // const radius= length/2 - strokeWidth/2;
    // const circumference = radius*2*Math.PI;

    let initial, totalsecs: number, perc, paused, mins: number, seconds: number;

    mins = 2;
    totalsecs = 60;
    seconds = 40;

    let progress = (totalsecs - seconds) / totalsecs;

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    // useEffect(() => {
    //     const progressOffset = (progress)*400;
    //     setOffset(progressOffset);
    // }, [setOffset, circumference, progress, offset]);

    return (
        <>
            <svg className="progress_bar" height="10" width="120">
                <rect
                    className="bg_bar"
                    rx="2.5" ry="2.5" width="400" height="5"
                />

                <rect
                    className="bar"
                    rx="2.5" ry="2.5" width={offset} height="5"
                />

            </svg>
        </>
    );
}

export default ProgressBar;
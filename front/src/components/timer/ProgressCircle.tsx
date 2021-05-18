import "./timer.css";
import { useEffect, useState, useRef } from 'react';

const ProgressCircle = (props: any) => {
    const {
        size,
        cycletime,
        strokeWidth,
        timerSec,
        timerMin
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = radius * 2 * Math.PI;

    let timeNow = timerMin * 60 + timerSec;
    const progress = (cycletime - timeNow) / cycletime;

    const circleRef = useRef(null);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const progressOffset = (progress) * circumference;
        setOffset(progressOffset);
        console.log(props)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
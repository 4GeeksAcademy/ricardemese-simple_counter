// SecondsComponent.jsx
import React, { useState, useEffect } from 'react';
import '../../styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClockFour } from '@fortawesome/free-solid-svg-icons';

export const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Incrementar el número de segundos
        const secondsCounting = () => {
            setSeconds(prevSeconds => prevSeconds + 1);
        };

        const interval = setInterval(secondsCounting, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedSeconds = seconds.toString().padStart(6, '0');

    return (
        <div className="seconds-container">
            <div className="digit clock">
                <FontAwesomeIcon icon={faClockFour} />
            </div>
            {formattedSeconds.split('').map((digit, index) => (
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
    );
};

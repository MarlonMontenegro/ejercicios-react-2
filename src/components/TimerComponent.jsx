import React, { useState } from "react";

function TimerComponent() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    let intervalId;

    const start = () => {
        if (!running) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setRunning(true);
        }
    };

    const stop = () => {
        clearInterval(intervalId);
        setRunning(false);
    };

    const reset = () => {
        clearInterval(intervalId);
        setTime(0);
        setRunning(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="container">
            <h1>{formatTime(time)}</h1>
            <div className="timer-btn">
                <button onClick={start}>Iniciar</button>
                <button onClick={stop}>Detener</button>
                <button onClick={reset}>Reiniciar</button>
            </div>
        </div>
    );
}

export default TimerComponent;
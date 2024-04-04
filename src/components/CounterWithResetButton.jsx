import React, {useState} from 'react';

function CounterWithResetButton(props) {

    const [count, setCount] = useState(props.number || 0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div className="container">
            <div className="contador">
                <h1>{count}</h1>
            </div>
            <div className="btn-contador">
                <button onClick={handleIncrement}>Incrementar</button>
                <button onClick={handleReset}>Reiniciar</button>
            </div>
        </div>
    );
}

export default CounterWithResetButton;

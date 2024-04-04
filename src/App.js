import './App.css';
import CounterWithResetButton from "./components/CounterWithResetButton";
import StyleSwitcher from "./components/StyleSwitcher";
import TimerComponent from "./components/TimerComponent";

function App() {
    return (<>

            <div className="main-container">
                <h1>CONTADOR</h1>

                <CounterWithResetButton/>


                <h1>Swticher</h1>
                <StyleSwitcher/>
                <h1>Timer</h1>

                <TimerComponent/>
            </div>
        </>

    );
}

export default App;

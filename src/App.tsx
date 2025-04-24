import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import {
    decrement,
    increment,
    incrementByAmount,
} from "./redux/slices/counterSlice";
import { useState } from "react";

function App() {
    const [incrementBy, setIncrementBy] = useState<number>(0);
    const counter = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <h3>The count is {counter.value}</h3>
                <button type="button" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button type="button" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <div>
                    <input
                        type="number"
                        name="incrementBy"
                        id="incrementBy"
                        value={incrementBy}
                        placeholder="Increment by"
                        onChange={(e) => setIncrementBy(Number(e.target.value))}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(incrementByAmount(Number(incrementBy)));
                            setIncrementBy(0);
                        }}
                    >
                        Increment by amount
                    </button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;

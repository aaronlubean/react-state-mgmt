import React, { useState } from 'react'

function Count({ label, count }) {
    return <h4>{label} Count {count}</h4>
}

function Pluses({ pluses }) {
    return <span>Pluses: {pluses}</span>
}

function Minuses({ minuses }) {
    return <span>Minuses: {minuses}</span>
}

function CounterSummary({ pluses, minuses }) {
    return <h3>Summary ~ <Pluses pluses={pluses} /> ~ <Minuses minuses={minuses} /></h3>
}

function Counter({ label, setPluses, setMinuses }) {
    const [count, setCount] = useState(0)
    const decrement = () => { 
        setCount(c => c - 1)
        setMinuses(m => m + 1) 
    }
    const increment = () => {
        setCount(c => c + 1)
        setPluses(p => p + 1)
    }
    return (
        <>
            <Count label={label} count={count} />
            <button onClick={() => decrement()}>Decrement (-)</button>&nbsp;
            <button onClick={() => increment()}>Increment (+)</button>&nbsp;
        </>
    )
}

export default function LiftingStateAndPropDrillingDemo() {
    const [pluses, setPluses] = useState(0)
    const [minuses, setMinuses] = useState(0)
    return (
        <>
            <h2>lifting state and prop drilling</h2>
            <CounterSummary pluses={pluses} minuses={minuses} />
            <Counter label='"A"' setPluses={setPluses} setMinuses={setMinuses} /><br /><br />
            <Counter label='"B"' setPluses={setPluses} setMinuses={setMinuses} />
        </>
    )
}
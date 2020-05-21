import React, { useState, createContext, useContext } from 'react'

const SummaryContext = createContext()
function SummaryProvider({ children }) {
    const [pluses, setPluses] = useState(0)
    const [minuses, setMinuses] = useState(0)
    const context = { pluses, setPluses, minuses, setMinuses }
    return <SummaryContext.Provider value={context}>{children}</SummaryContext.Provider>
}

function CounterSummary() {
    const { pluses, minuses } = useContext(SummaryContext)
    return <h3>Summary ~ Pluses: {pluses} ~ Minuses: {minuses}</h3>
}

function Counter({ label }) {
    const { setPluses, setMinuses } = useContext(SummaryContext)
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
            <h4>{label} Count {count}</h4>
            <button onClick={() => decrement()}>Decrement (-)</button>&nbsp;
            <button onClick={() => increment()}>Increment (+)</button>&nbsp;
        </>
    )
}

export default function ContextDemo() {
    return (
        <SummaryProvider>
            <h2>context</h2>
            <CounterSummary />
            <Counter label='"A"' /><br /><br />
            <Counter label='"B"' />
        </SummaryProvider>
    )
}
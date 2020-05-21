import React, { useState, useReducer } from 'react'

function CounterSummary({ pluses, minuses }) {
    return <h3>Summary ~ Pluses: {pluses} ~ Minuses: {minuses}</h3>
}

function Counter({ label, summaryDispatch }) {
    const [count, setCount] = useState(0)
    const decrement = () => { 
        setCount(c => c - 1)
        summaryDispatch({ type: "ADD_MINUS" }) 
    }
    const increment = () => {
        setCount(c => c + 1)
        summaryDispatch({ type: "ADD_PLUS" }) 
    }
    return (
        <>
            <h4>{label} Count {count}</h4>
            <button onClick={() => decrement()}>Decrement (-)</button>&nbsp;
            <button onClick={() => increment()}>Increment (+)</button>&nbsp;
        </>
    )
}

const initialState = { pluses: 0, minuses: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLUS':
            return { ...state, pluses: state.pluses + 1 }
        case 'ADD_MINUS':
            return { ...state, minuses: state.minuses + 1 }
        default:
            throw new Error(`Unsupported action type of ${action.type}`)
    }
}

export default function ContextDemo() {
    const [summaryState, summaryDispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h2>context</h2>
            <CounterSummary pluses={summaryState.pluses} minuses={summaryState.minuses} />
            <Counter label='"A"' summaryDispatch={summaryDispatch} /><br /><br />
            <Counter label='"B"' summaryDispatch={summaryDispatch} />
        </>
    )
}
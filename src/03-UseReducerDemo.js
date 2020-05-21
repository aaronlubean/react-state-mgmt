import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'RESET':
            return initialState
        default:
            throw new Error(`Unsupported action type of ${action.type}`)
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h2>useReducer</h2>
            <h3>Count {state.count}</h3>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement (-)</button>&nbsp;
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment (+)</button>&nbsp;
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>
    )
}

export default function UseReducerDemo() {
    return <Counter />
}
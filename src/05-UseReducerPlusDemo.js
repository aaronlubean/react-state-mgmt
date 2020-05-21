import React, { useReducer } from 'react'

const initialState = { count: 0, maxCount: 10 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MAX_COUNT':
            return { ...state, maxCount: parseInt(action.payload) }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'INCREMENT':
            if (state.count < state.maxCount) {
                return { ...state, count: state.count + 1 }
            } else {
                return { ...state }
            }
        case 'RESET':
            return { ...state, count: initialState.count }
        default:
            throw new Error(`Unsupported action type of ${action.type}`)
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h2>useReducer+</h2>
            <h3>Count {state.count}</h3>
            Max Count <input value={state.maxCount}
                onChange={e => dispatch({ type: "SET_MAX_COUNT", payload: e.target.value})} /><br /><br />
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement (-)</button>&nbsp;
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment (+)</button>&nbsp;
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>
    )
}

export default function UseReducerPlusDemo() {
    return <Counter />
}
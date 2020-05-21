import React, { useReducer } from 'react'

const initialState = { count: 0, maxCount: 10 }

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_MAX_COUNT':
            return { ...state, maxCount: action.payload }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'RESET':
            return { ...state, count: initialState.count }
        default:
            throw new Error(`Unsupported action type of ${action.type}`)
    }
}

const useCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const setMaxCount = (maxCount) => dispatch({ type: "SET_MAX_COUNT", payload: maxCount })
    const decrement = () => dispatch({ type: "DECREMENT" })
    const increment = () => { if (state.count < state.maxCount) { dispatch({ type: "INCREMENT" }) } }
    const reset = () => dispatch({ type: "RESET" })
    return { count: state.count, maxCount: state.maxCount, setMaxCount, decrement, increment, reset }
}

function Counter() {
    const { count, maxCount, setMaxCount, decrement, increment, reset } = useCounter()
    return (
        <>
            <h2>useCounter w/useReducer</h2>
            <h3>Count {count}</h3>
            Max Count <input value={maxCount}
                onChange={e => setMaxCount(parseInt(e.target.value))} /><br /><br />
            <button onClick={() => decrement()}>Decrement (-)</button>&nbsp;
            <button onClick={() => increment()}>Increment (+)</button>&nbsp;
            <button onClick={() => reset()}>Reset</button>
        </>
    )
}

export default function UseCounterWithUseReducerDemo() {
    return (
        <Counter />
    )
}
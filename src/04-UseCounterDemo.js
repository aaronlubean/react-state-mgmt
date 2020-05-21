import React, { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0)
    const decrement = () => { setCount(c => c - 1) }
    const increment = () => { setCount(c => c + 1) }
    const reset = () => { setCount(0) }
    return { count, decrement, increment, reset }
}

function Counter() {
    const counterApi = useCounter()
    return (
        <>
            <h2>useCounter</h2>
            <h3>Count {counterApi.count}</h3>
            <button onClick={() => counterApi.decrement()}>Decrement (-)</button>&nbsp;
            <button onClick={() => counterApi.increment()}>Increment (+)</button>&nbsp;
            <button onClick={() => counterApi.reset()}>Reset</button>
        </>
    )
}

export default function UseCounterDemo() {
    return <Counter />
}
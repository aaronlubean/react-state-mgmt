import React, { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0)
    const [maxCount, setMaxCount] = useState(10)
    const decrement = () => { setCount(c => c - 1) }
    const increment = () => { if (count < maxCount) { setCount(c => c + 1) } }
    const reset = () => { setCount(0) }
    return { count, maxCount, setMaxCount, decrement, increment, reset }
}

function Counter() {
    const { count, maxCount, setMaxCount, decrement, increment, reset } = useCounter()
    return (
        <>
            <h2>useCounter+</h2>
            <h3>Count {count}</h3>
            Max Count <input value={maxCount}
                onChange={e => setMaxCount(parseInt(e.target.value))} /><br /><br />
            <button onClick={() => decrement()}>Decrement (-)</button>&nbsp;
            <button onClick={() => increment()}>Increment (+)</button>&nbsp;
            <button onClick={() => reset()}>Reset</button>
        </>
    )
}

export default function UseCounterPlusDemo() {
    return <Counter />
}
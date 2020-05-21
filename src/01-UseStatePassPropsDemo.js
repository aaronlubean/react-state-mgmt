import React, { useState } from "react"

function CountLabel({count}) {
    return <h3>Count {count}</h3>
}

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2>useState pass props</h2>
            <CountLabel count={count} />
            { /* Note: don't operate on count directly, e.g. count++ */ }
            <button onClick={() => setCount(count - 1)}>Decrement (-)</button>&nbsp;
            <button onClick={() => setCount(count + 1)}>Increment (+)</button>&nbsp;
        </>
    )
}

export default function UseStatePassPropsDemo() {
    return <Counter />
}
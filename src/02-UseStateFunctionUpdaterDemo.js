import React, { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)
    const increment = () => {
        setTimeout(() => { // simulating an asynchronous or time-consuming operation
            setCount(count + 1) // set the state w/o an updater function (count state might not be fresh!)
        }, 2000)
    }
    //// 
    // const increment = () => {
    //     setTimeout(() => {
    //         // pass in an updater function that receives fresh state and returns the new state
    //         setCount((currentCount) => { return currentCount + 1 })
    //     }, 2000)
    // }
    return (
        <>
            <h2>useState with updater function</h2>
            <h3>Count {count}</h3>
            <button onClick={() => setCount(count - 1)}>Decrement (-)</button>&nbsp;
            <button onClick={increment}>Increment (+)</button>&nbsp;
        </>
    )
}

export default function UseStateFunctionUpdaterDemo() {
    return <Counter />
}
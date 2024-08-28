import {useState, useEffect, useRef} from 'react';

function Counters () {
    const [value,setValue] = useState(0);
    const CounterRef = useRef(0);
    useEffect (()=> {
        CounterRef.current = value;
    },[value])

    return (
        <>
        <h1>current count</h1>
        <button onClick={()=> {setValue(value+1)}}>increment</button>
        <div>Previous Count: {CounterRef.current}</div>
        <div>Current Count: {value}</div>
        </>
    )
    
}

export default Counters;
import React, {useState} from 'react'

const UseStateComponent = () => {
    const [input, setInput] = useState('');

    let onChange = (e) => {
        const newValue = e.target.value;
        setInput(newValue);
    }

    return (
        <>
            <h3>Use State Component</h3>
            <p>Input: {input}</p>
            <input placeholder="Enter something..." value={input} onChange={onChange}/>
            <p>Output: {input}</p>
        </>
    )
}

export default UseStateComponent
import React, {useState, useEffect} from 'react';
import axios from "axios";

const UseEffectComponent = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[count].email);
                console.log("API WAS CALLED");
            });
        }, [setData, count]);

    return (
        <>
            <h3>UseEffectComponent</h3>
            <h3>{data}</h3>
            <h3>{count}</h3>
            <button
                onClick={() => {
                setCount(count + 1);
                }}
            >
                Click
            </button>
        </>
    )
}

export default UseEffectComponent
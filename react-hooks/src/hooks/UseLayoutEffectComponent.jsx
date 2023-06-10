import { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffectComponent = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    // alter content of input at render time
    // original value is 'Hunor' but it is changed to 'Hello' because of useLayoutEffect function
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    return (
        <>
            <h3>UseLayoutEffectComponent</h3>
            <div>
                <input ref={inputRef} value="Hunor" style={{ width: 400, height: 60 }} />
            </div>
        </>
    );
}

export default UseLayoutEffectComponent
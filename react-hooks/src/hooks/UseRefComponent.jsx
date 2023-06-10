import React, {useRef} from 'react'

const UseRefComponent = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = "";
    };

    return (
        <>
            <h3>UseRefComponent</h3>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </>
    );
}

export default UseRefComponent
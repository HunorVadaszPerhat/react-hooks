import React, { useContext } from "react";
import { UserContext } from "./UseContextComponent";

const Login = () => {
    const { setUsername } = useContext(UserContext);

    return (
        <>
            <input
                    onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
        </>
    )
}

export default Login
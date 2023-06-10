import React, { useContext } from "react";
import { UserContext } from "./UseContextComponent";


const User = () => {
    const { username } = useContext(UserContext);

    return (
        <>
            <h3>User: {username}</h3>
        </>
    )
}

export default User
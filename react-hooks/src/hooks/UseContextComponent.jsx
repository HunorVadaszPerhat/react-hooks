import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const UserContext = createContext(null);

const UseContextComponent = () => {
    const [username, setUsername] = useState("");

    return (
        <>
            <UserContext.Provider value={{ username, setUsername }}>
               <User />
               <Login />
            </UserContext.Provider>          
        </>
    )
}

export default UseContextComponent
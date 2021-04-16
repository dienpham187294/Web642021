import React, { useState } from "react";
import LoginPage from "./loginComponents/LoginPage"
import MainPage from "./loginComponents/MainPage"

function Login({ socket }) {
    const [PageLogin, setPageLogin] = useState(true);
    return (
        <div>
            { PageLogin ? <LoginPage socket={socket} setPageLogin={setPageLogin} />
                : <MainPage socket={socket} setPageLogin={setPageLogin} />
            }
        </div>
    );
}

export default Login;


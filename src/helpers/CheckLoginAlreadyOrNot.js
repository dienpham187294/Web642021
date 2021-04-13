import React, { useEffect } from "react"
import { checkCookie } from "./functionCookies"
function CheckLoginAlready() {

    useEffect(() => {
        if (!checkCookie("username")) {
            document.getElementById("btnCheck").click()
        }
    })
    return (

        <a href="/?m=dangnhap"> <button id="btnCheck" style={{ display: "none" }}>Home</button></a>


    )
}
export default CheckLoginAlready
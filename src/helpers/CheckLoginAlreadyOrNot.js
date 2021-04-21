import React, { useEffect } from "react"
import { checkCookie, getCookie, delettCookie } from "./functionCookies"
let time = Date.now();
let JustOneEmit = 1;
function CheckLoginAlready({ socket }) {
    useEffect(() => {
        if (!checkCookie("usernameEricpham")) {
            document.getElementById("btnCheck").click()
        } else {
            setTimeout(() => {
                if (JustOneEmit === 1) {
                    JustOneEmit += 1;
                    socket.emit("JustOneAccount", [getCookie("username"), socket.id])
                }

            }, 1000);
            socket.on(getCookie("username"), (data) => {
                if (Date.now() - time > 15000 && data !== socket.id) {
                    alert("Tài khoản được đăng nhập bởi người khác.");
                    delettCookie("username");
                    delettCookie("usernameEricpham");
                    document.getElementById("btnCheck").click()
                }
            })
        }
    }, [socket])
    return (
        <a href="/?m=dangnhap"> <button id="btnCheck" style={{ display: "none" }}>Home</button></a>
    )
}
export default CheckLoginAlready
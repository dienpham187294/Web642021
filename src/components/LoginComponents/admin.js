import React, { useState, useEffect } from "react";
import "./Login.css"
import { checkCookie, getCookie } from "../../helpers/functionCookies";
import { Key } from "../../helpers/Key";
function checkAdmin() {
    if (checkCookie("username")) {
        if (getCookie("username") === "Văn Điện") {
        } else { document.getElementById("ID_home").click() }
    } else {
        document.getElementById("ID_home").click()
    }
}
function Admin({ socket }) {
    const [Data_Username, setData_Username] = useState([]);
    useEffect(() => {
        checkAdmin();
        socket.emit("admin", ["get_info"]);
        socket.on("admin", (data) => {
            setData_Username(data);
        });
    }, [socket]);

    function updateData() {
        socket.emit("admin", ["update_info", document.getElementById("textarea").value]);
        setData_Username(JSON.parse(document.getElementById("textarea").value));
    }
    function _FN_delete(username) {
        if (username !== "0918284482") {
            Data_Username.forEach((e) => {
                let arrTemp = []
                if (e.username !== username) {
                    arrTemp.push(e);
                }
                setData_Username(arrTemp);
                socket.emit("admin", ["update_info", JSON.stringify(arrTemp)]);
            })
        };

    }
    function _FN_Add25day(username) {
        let arrTemp = Data_Username;
        arrTemp.forEach((e) => {
            if (e.username === username) {
                e.time += 25 * 24 * 60 * 60 * 1000;
                e.status = "Trial30ngay"
            }
        })
        setData_Username(arrTemp);
        socket.emit("admin", ["update_info", JSON.stringify(arrTemp)]);

    }
    function _FN_Add30day(username) {
        let arrTemp = Data_Username;
        arrTemp.forEach((e) => {
            if (e.username === username) {
                e.time += 30 * 24 * 60 * 60 * 1000;
                e.status = "Normal"
            }
        })
        setData_Username(arrTemp);
        socket.emit("admin", ["update_info", JSON.stringify(arrTemp)]);
    }
    return (
        <div>
            <p className="border border-primary mt-3" />
            <GamelistInfo Data_Username={Data_Username} _FN_delete={_FN_delete} _FN_Add30day={_FN_Add30day} _FN_Add25day={_FN_Add25day} />
            <p className="border border-primary mt-5" />
            <textarea id="textarea" className="form-control mt-5" />
            <button className="btn btn-primary mt-5" style={{ marginLeft: "80%" }} onClick={() => updateData()}>Save</button>
            <p className="border border-primary mt-3" />
            <div className="mt-5"> {JSON.stringify(Data_Username)} </div>
        </div>
    );
}

export default Admin;
function GamelistInfo(props) {
    const listinfo = props.Data_Username;
    const listItems =
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Name</td>
                    <td>Position</td>
                    <td>IPaddress</td>
                    <td>Email</td>
                    <td>Time</td>
                    <td>Status</td>
                
                </tr>
            </thead>
            <tbody>{listinfo.map((dot) =>
                <tr key={Key()}>
                    <td>{dot.username}</td>
                    <td>{dot.password}</td>
                    <td>{dot.name}</td>
                    <td>{dot.position}</td>
                    <td>{dot.ipaddress}</td>
                    <td>{dot.email}</td>
                    <td>{Math.floor((dot.time - Date.now()) / (24 * 60 * 60 * 10)) / 100} Ngày</td>
                    <td>{dot.status}</td>
                    {/* <td onClick={() => props._FN_delete(dot.username)} style={{ cursor: "grab" }}> {dot.username === "0918284482" ? "" : "Delete"}</td> */}
              
                </tr>
            )}
            </tbody>
        </table>;
    return (
        <div>{listItems}</div>
    );
}


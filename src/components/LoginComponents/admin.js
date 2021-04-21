import React, { useState, useEffect } from "react";
import "./admin.css"
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
// const Data_User_notState = [];
let Data_User_notState_change = [];
function Admin({ socket }) {
    const [Data_Username, setData_Username] = useState([]);
    const [CheckAlready, SetCheckAlready] = useState(false);
    useEffect(() => {
        checkAdmin();
        setTimeout(() => {
            socket.emit("admin", ["get_info", socket.id]);
        }, 1000)
        socket.on("adminInfo", (data) => {
            Data_User_notState_change = data;
            setData_Username(data);
            document.getElementById("textarea").value = JSON.stringify(Data_User_notState_change);
            SetCheckAlready(false)
        });
        socket.on("adminInfoError", (data) => {
            alert(data);
        });
    }, [socket]);

    function updateData() {
        socket.emit("admin", ["update_info", document.getElementById("textarea").value, socket.id]);
        alert("Done");
    }
    function _CheckData() {

        let RES = document.getElementById("DateAdd").value * 24 * 60 * 60 * 1000;
        console.log(document.getElementById("ID_change").value !== "none")
        if (document.querySelector('input[name="user"]:checked') !== null) {
            Data_User_notState_change.forEach(e => {
                if (e.username === document.querySelector('input[name="user"]:checked').value) {
                    if (e.time > Date.now()) {
                        e.time += RES;
                        console.log(e.time);
                    } else {
                        e.time = Date.now() + RES;
                    }
                }
            })
            document.getElementById("textarea").value = JSON.stringify(Data_User_notState_change);
        }
        if (document.getElementById("ID_change").value !== "none") {
            Data_User_notState_change.forEach(e => {
                if (e.username === document.querySelector('input[name="user"]:checked').value) {
                    e.status = document.getElementById("ID_change").value
                }
            })
            document.getElementById("textarea").value = JSON.stringify(Data_User_notState_change);
        }
        if (IsJsonString(document.getElementById("textarea").value)) {
            setData_Username(JSON.parse(document.getElementById("textarea").value));
            SetCheckAlready(true)
        } else { alert("Not a json file!") }

    }
    function _ResetData() {
        socket.emit("admin", ["get_info", socket.id]);
    }

    return (
        <div>
            <p className="border border-primary mt-3" />
            <GamelistInfo Data_Username={Data_Username} />
            <p className="border border-primary mt-5" />


            <br />
            <div style={{ marginLeft: "60%" }}>

                <input className="form-control" placeholder="Số ngày cộng thêm" type="number" id="DateAdd" />.
                <select className="form-control" id="ID_change">
                    <option value="none">Không thay đổi</option>
                    <option value="Normal">Normal</option>
                    <option value="Trial5ngay">Trial5ngay</option>
                    <option value="Trial30ngay">Trial30ngay</option>
                    <option value="Admin">Trial30ngay</option>
                    <option value="Admin">Inactive</option>
                </select>
                <br />
                <button id="ID_BTN_check" className="btn btn-primary mt-1" style={{ display: "inline-block", marginRight: "10px" }} onClick={() => _CheckData()}>Check</button>
                <button className="btn btn-primary mt-1" style={{ display: "inline-block", marginRight: "10px" }} onClick={() => _ResetData()}>Reset</button>
                {CheckAlready ? <button className="btn btn-danger mt-1" style={{ display: "inline-block", marginRight: "10px" }} onClick={() => updateData()}>Save</button> : ""}
            </div>
            <textarea id="textarea" className="form-control mt-5" />
            <p className="border border-primary mt-3" />
            <div className="mt-5"> {JSON.stringify(Data_Username)} </div>
        </div>
    );
}

export default Admin;
function GamelistInfo({ Data_Username }) {
    const listinfo = Data_Username;
    const listItems =
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Username</td>
                    {/* <td>Password</td> */}
                    <td>Name</td>
                    {/* <td>Position</td> */}
                    {/* <td>IPaddress</td> */}
                    <td>Email</td>
                    <td>Time</td>
                    <td>Status</td>

                </tr>
            </thead>
            <tbody>{listinfo.map((dot) =>
                <tr key={Key()}>
                    <td>{dot.username}</td>
                    {/* <td>{dot.password}</td> */}
                    <td>{dot.name}</td>
                    {/* <td>{dot.position}</td> */}
                    {/* <td>{dot.ipaddress}</td> */}
                    <td>{dot.email}</td>
                    <td>{Math.floor((dot.time - Date.now()) / (24 * 60 * 60 * 10)) / 100} Ngày</td>
                    <td>{dot.status}
                        <input type="radio" value={dot.username} name="user" />
                    </td>
                    {/* <td onClick={() => props._FN_delete(dot.username)} style={{ cursor: "grab" }}> {dot.username === "0918284482" ? "" : "Delete"}</td> */}

                </tr>
            )}
            </tbody>
        </table>;
    return (
        <div>{listItems}</div>
    );
}



function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
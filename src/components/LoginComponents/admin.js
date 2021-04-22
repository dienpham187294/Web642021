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
    const [Data_LicHoc, SetData_LicHoc] = useState([]);
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
        socket.on("adminInfoLichHoc", (data) => {
            SetData_LicHoc(data);
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

    function FN_Themlophoc() {
        let Malophoc = document.getElementById("ID_Malophoc").value;
        let Thoigian = document.getElementById("ID_Thoigian").value;
        let Trangthai = document.getElementById("ID_Trangthai").value;
        if (Malophoc.length > 5 && Thoigian.length > 5 && Trangthai.length > 5) {
            socket.emit("admin", ["themlophoc", Malophoc, Thoigian, Trangthai, socket.id]);
        }
    }

    function FN_Doitrangthai() {
        let RadioInput = document.querySelector('input[name="lichhoc"]:checked');
        let SelectInput = document.getElementById("ID_select_doitrangthai").value;

        if (RadioInput !== null && SelectInput !== "none") {
            Data_LicHoc.forEach(e => {
                if (e.name === RadioInput.value) {
                    e.status = SelectInput;
                }
            })
            socket.emit("admin", ["doitrangthai", Data_LicHoc, socket.id]);

        }
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
            <div className="mt-5"> {FN_ShowLichHoc(Data_LicHoc, FN_CountMembers, FN_ShowMembers)} </div>
            <p className="border border-primary mt-3" />
            <form>
                <select className="form-control mb-2" id="ID_select_doitrangthai">
                    <option value="None">None</option>
                    <option value="Đang nhận đăng ký">Đang nhận đăng ký</option>
                    <option value="Đang triển khai">Đang triển khai</option>
                    <option value="inactive">Inactive</option>
                </select>
                <input type="button" className="btn btn-primary mb-3" value="Đổi trạng thái" onClick={() => FN_Doitrangthai()} />
            </form>

            <form>
                <input type="text" placeholder="Mã lớp học" id="ID_Malophoc" />
                <input type="text" placeholder="Thời gian lớp học" id="ID_Thoigian" />
                <input type="text" placeholder="Trạng thái" id="ID_Trangthai" />
                <input type="button" value="Thêm lớp học" onClick={() => FN_Themlophoc()} />
            </form>
            <p className="border border-primary mt-3" />
            <div className="mt-5"> {JSON.stringify(Data_LicHoc)} </div>
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
                    <td>Phone</td>
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
                    <td>{dot.phone}</td>
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

function FN_ShowLichHoc(Data_LicHoc, FN_CountMembers, FN_ShowMembers) {
    if (Data_LicHoc.length === 0) {
        return "Chờ trong giây lát."
    }
    return <table className="table">
        <thead>
            <td>Radio</td>
            <td>Mã lớp học</td>
            <td>Số học viên đăng ký</td>
            <td>Trạng thái</td>
            <td>Thời gian</td>
            <td>Chi tiết</td>
        </thead>
        <tbody>{Data_LicHoc.map((e, index) =>
            <tr key={index}>
                <td><input type="radio" name="lichhoc" value={e.name} /></td>
                <td>{e.name}</td>
                <td>{FN_CountMembers(e.members)}</td>
                <td>{e.status}</td>
                <td>{e.time}</td>
                <td>{FN_ShowMembers(e.members)}</td>
            </tr>)}</tbody> </table>

}

function FN_CountMembers(arrMembers) {
    let arrTemp = []
    if (arrMembers.length === 0) {
        return 0
    }
    arrMembers.forEach(e => {
        if (e.status) {
            arrTemp.push(e)
        };
    });
    return arrTemp.length
}
function FN_ShowMembers(arrMembers) {
    let arrTemp = ""
    if (arrMembers.length === 0) {
        return "Chưa có người đăng ký."
    }
    arrMembers.forEach(e => {
        if (e.status) {
            arrTemp += e.name + " | "
        };
    });
    return arrTemp
}
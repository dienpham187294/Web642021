import React, { useEffect, useState } from "react";
import { getCookie } from "../../../../helpers/functionCookies"
import { Key } from "../../../../helpers/Key";
import "./Lobby.css";
import InfoPeople from "./InfoPeople";
import RandomInt from "../../../../helpers/randomInt";
const e = React.createElement;

let ArrTapLamQuen_1 = [{ "EN": "How are you?", "VN": "Xin chào?", "status": false },
{ "EN": "How old are you?", "VN": "Bạn bao nhiêu tuổi?", "status": false },
{ "EN": "What is your name?", "VN": "Bạn tên gì?", "status": false },
{ "EN": "Can you spell your name?", "VN": "Bạn có thể đánh vần tên được không?", "status": false }]
function MonopolyLobby({ socket, room, username, setjionRoom, setStart, message, setMessage }) {
  const [ArrTapLamQuen, SetArrTapLamQuen] = useState(ArrTapLamQuen_1);
  const [ENtextChoose, SetENtextChoose] = useState("--");
  const [AnwerRight, SetAnwerRight] = useState("--");
  const [AnwerChoose, SetAnwerChoose] = useState(-1);
  const [ArrofAnwerChoose, SetArrofAnwerChoose] = useState([]);
  useEffect(() => {
    if (_CheckMessageAndCommand(message, ENtextChoose, 75)) {
      ArrTapLamQuen_1.forEach(e => {
        if (e.EN === ENtextChoose) { e.status = true }
      })
      SetArrTapLamQuen(ArrTapLamQuen_1);
      setMessage("-")
    }

  }, [message, ENtextChoose, setMessage]);
  useEffect(() => {

    if (AnwerRight === AnwerChoose) {
      let mynameis = ""
      if (Date.now() % 2 === 0) {
        mynameis = "That's right. Good job!"
      } else { mynameis = "Good. Keep going!" }

      document.getElementById('speech-msg').value = mynameis;
      document.getElementById("speak").click();
    }
  }, [AnwerRight, AnwerChoose]);
  function showRoom() {
    let arrRoom = [];
    room.forEach(ee => {
      if (ee.status) {
        //Get all members join the room
        let arrMembers = [];
        ee.members.forEach(eee => {
          if (eee.status) {
            let member = e("tr", { key: Key() }, e("td", {}, eee.username));
            arrMembers.push(member);
          }
        });
        //Get all members join the room

        //--------------------------------
        let room = e("div", { key: Key(), className: "col-4" },
          //H1 
          e("h5", { key: Key(), }, ["Host: ", ee.host]),
          //Body
          e("table", { key: Key(), id: "lobby_body", className: "table table-striped" },
            //tbody
            e("tbody", { key: Key(), }, arrMembers)
          ),
          //Button Jion the room
          (ee.host !== username) ? e("button", { className: "btn btn-warning ml-3", onClick: () => setjionRoom(ee.host) }, "Join") :
            //Button Jion the room
            e("button", { className: "btn btn-warning ml-3", onClick: () => setStart(ee.host) }, "Start"),

        );
        arrRoom.push(room);
        //--------------------------------
      }
    });
    let ShowRooms = e("div", { key: Key(), className: "row" }, arrRoom)
    return ShowRooms
  }

  return (
    <div>
      <h5>Bạn đang nhập vai vào làm một nhân viên tiếp tân khách sạn.</h5>
      <div style={{ textAlign: "left" }}>
        <b>Bạn có sẵn một phần danh sách gồm tên, tuổi và số phòng. Nhiệm vụ của bạn là hỏi tên và tuổi khách hàng sau đó tra vào danh sách và trả số phòng cho khách.</b>

        <h5 className="mt-4">Tập làm quen nói câu:</h5>
        <table className="table">
          <thead>
            <tr>
              <td>Chọn và đọc</td>
              <td>Nghĩa</td>
              <td>Tiến độ</td>
            </tr>
          </thead>
          <tbody>
            {_ShowArrTapLamQuen(ArrTapLamQuen, SetENtextChoose, ENtextChoose)}
          </tbody>
        </table>
        <h5 className="mt-4">Tập làm quen nghe câu:</h5>
        <button className="btn btn-outline-primary btn-sm" onClick={() => _ListenAge(SetAnwerRight, SetArrofAnwerChoose)}>Nghe tuổi</button>
        <button className="btn btn-outline-primary btn-sm" onClick={() => _ListenName(SetAnwerRight, SetArrofAnwerChoose)}>Nghe tên</button>
        {_ShowListen(AnwerChoose, AnwerRight, SetAnwerChoose, ArrofAnwerChoose)}
      </div>
      <p className="border border-primary mt-3" />
      <div className="row mt-3">
        <div className="col-3 mt-3">
          <span>Name: {getCookie("username")}</span>
        </div>
        <div className="col-3 mt-3">
          {/* <span style={{ border: "1px solid blue", borderRadius: "6px", backgroundColor: messageCheck === "create a room" ? "yellow" : "white" }} }>Create a room!</span> */}
          <button className="btn btn-outline-primary" onClick={() => socket.emit("chess", ["createRoom", socket.id, getCookie("username")])}>Tạo phòng</button>
        </div>
      </div>
      <p className="border border-primary mt-3" />

      { showRoom(room)}
      <p className="border border-primary mt-3" />
    </div >
  );
}

export default MonopolyLobby;

function _ShowArrTapLamQuen(ArrTapLamQuen, SetENtextChoose, ENtextChoose) {
  return ArrTapLamQuen.map((e, index) =>
    <tr key={index}>
      <td key={index + "1"} style={{ backgroundColor: ENtextChoose === e.EN ? "yellow" : "transparent" }} className="ENText" onClick={() => SetENtextChoose(e.EN)}>{e.EN}</td>
      <td key={index + "2"} >{e.VN}</td>
      <td key={index + "3"} >{e.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
    </tr >
  )
}

function _CheckMessageAndCommand(message, command, percent) {
  let arrMessage = _SortMessage(message);
  let arrCommand = _SortMessage(command).split(" ");

  let numberOfNull = 0;
  let numberCountExist = 0;
  let numberOfArrayLength = arrCommand.length;

  arrCommand.forEach(e => {
    if (e === " ") {
      numberOfNull += 1;
    } else {
      if (arrMessage.indexOf(e) > -1) {
        numberCountExist += 1;
      }
    }
  })

  if (numberCountExist / (numberOfArrayLength - numberOfNull) * 100 > percent) {
    return true
  }
  return false

}

function _SortMessage(messCheck) {
  let a = messCheck.split(/[\s,?#!-().]+/)
  let b = a.toString();
  return b.split(",").join(" ").toLowerCase()
}

function _ShowListen(AnwerChoose, AnwerRight, SetAnwerChoose, ArrofAnwerChoose) {
  return ArrofAnwerChoose.map((e, index) => <div className="ChooseAge" key={index} onClick={() => SetAnwerChoose(e)}
    style={{ backgroundColor: (AnwerChoose === e) ? "yellow" : "transparent" }}>{e}</div>)
}

function _ListenAge(SetAnwerRight, SetArrofAnwerChoose) {
  let arr = [];
  let temp = InfoPeople()[Date.now() % 100].age
  arr.push(temp);
  SetAnwerRight(temp)
  let mynameis = "My age is " + temp
  document.getElementById('speech-msg').value = mynameis;
  arr.push(InfoPeople()[RandomInt(0, 99)].age);
  arr.push(InfoPeople()[RandomInt(0, 99)].age);
  arr.push(InfoPeople()[RandomInt(0, 99)].age);
  document.getElementById("speak").click();
  let arrToSetChoose = arr.sort(() => Math.random() - 0.5);
  SetArrofAnwerChoose(arrToSetChoose);
}
function _ListenName(SetAnwerRight, SetArrofAnwerChoose) {
  let arr = [];
  let temp = InfoPeople()[Date.now() % 100].name
  arr.push(temp);
  SetAnwerRight(temp)
  let mynameis = "My name is " + temp
  document.getElementById('speech-msg').value = mynameis;
  arr.push(InfoPeople()[RandomInt(0, 99)].name);
  arr.push(InfoPeople()[RandomInt(0, 99)].name);
  arr.push(InfoPeople()[RandomInt(0, 99)].name);
  document.getElementById("speak").click();
  let arrToSetChoose = arr.sort(() => Math.random() - 0.5);
  SetArrofAnwerChoose(arrToSetChoose);
}
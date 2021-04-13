import React, { useEffect, useState } from "react";
import { getCookie } from "../../../../helpers/functionCookies"
import { Key } from "../../../../helpers/Key";
import "./Lobby.css";
// import InfoPeople from "./InfoPeople";
import InfoFruit from "./InfoFruit";
import RandomInt from "../../../../helpers/randomInt";
const e = React.createElement;
let ArrFruit_1 = InfoFruit();
let ArrTapLamQuen_1 = [
  { "EN": "How much do you want?", "VN": "Bạn muốn bao nhiêu?", "status": false },
  , { "EN": "How much would you like?", "VN": "Bạn cần mua bao nhiêu?", "status": false }
  , { "EN": "What would you like?", "VN": "Bạn cần mua gì?", "status": false }

]
function MonopolyLobby({ socket, room, username, setjionRoom, setStart, message, setMessage }) {
  const [ArrTapLamQuen, SetArrTapLamQuen] = useState(ArrTapLamQuen_1);
  const [ENtextChoose, SetENtextChoose] = useState("--");
  const [AnwerRight, SetAnwerRight] = useState("--");
  const [AnwerChoose, SetAnwerChoose] = useState(-1);
  const [ArrofAnwerChoose, SetArrofAnwerChoose] = useState([]);
  const [ArrFruit, SetArrFruit] = useState(ArrFruit_1);
  const [ChooseFruit, SetChooseFruit] = useState("");
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
    if (_CheckMessageAndCommand(message, ChooseFruit, 75)) {
      ArrFruit_1.forEach(e => {
        if (e.name === ChooseFruit) { e.status = true }
      })
      SetArrFruit(ArrFruit_1)
      setMessage("-")
    }
  }, [message, ChooseFruit, setMessage]);

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
      <h5>Bạn đang nhập vai vào làm nhân viên cửa hàng.</h5>
      <div style={{ textAlign: "center" }}>
        <b>Nhiệm vụ của bạn là chào hỏi khách, trả lời những câu hỏi khách cần và ghi phiếu bán hàng khách.</b>

        <h5 className="mt-4">Tập làm quen nói câu:</h5>
        <table className="table table-sm table-striped">
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
        <button className="btn btn-outline-primary" onClick={() => _FN_Reset1(SetArrTapLamQuen)}>Reset</button>
        <h5 className="mt-4">Tập làm quen từ vựng:</h5>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <td>Từ vựng</td>
              <td>Hình ảnh</td>
              <td>Tiến độ</td>
            </tr>
          </thead>
          <tbody>
            {_ShowArrFruit(ArrFruit, SetChooseFruit, ChooseFruit)}
          </tbody>
        </table>
        <button className="btn btn-outline-primary" onClick={() => _FN_Reset2(SetArrFruit)}>Reset</button>
        <h5 className="mt-4">Tập làm quen nghe câu:</h5>
        {/* <button className="btn btn-outline-primary btn-sm" onClick={() => _ListenAge(SetAnwerRight, SetArrofAnwerChoose)}>Nghe tuổi</button> */}
        <button className="btn btn-outline-primary btn-sm" onClick={() => _ListenName(SetAnwerRight, SetArrofAnwerChoose)}>Nghe và chọn câu trả lời:</button>
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
      <td key={index + "1"} style={{ backgroundColor: ENtextChoose === e.EN ? "yellow" : "transparent" }} className="ENText" onClick={() => _SetNameAndSpeak(SetENtextChoose, e.EN)}>{e.EN}</td>
      <td key={index + "2"} >{e.VN}</td>
      <td key={index + "3"} style={{ backgroundColor: e.status ? "wheat" : "transparent" }}>{e.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
    </tr >
  )
}
function _ShowArrFruit(InfoFruit, SetChooseFruit, ChooseFruit) {
  return InfoFruit.map((e, index) =>
    <tr key={index}>
      <td key={index + "1"} style={{ backgroundColor: ChooseFruit === e.name ? "yellow" : "transparent" }} className="ENText"
        onClick={() => _SetNameAndSpeak(SetChooseFruit, e.name)
        }>{e.name.toUpperCase()}</td>
      <td key={index + "2"} ><img alt={e.img} key={index + "img"} src={require(`./img/${e.img}`)} width="100px" /></td>
      < td key={index + "3"} style={{ backgroundColor: e.status ? "wheat" : "transparent" }} >{e.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
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

function _SetNameAndSpeak(SetChooseFruit, name) {
  SetChooseFruit(name);
  document.getElementById('speech-msg').value = name;
  document.getElementById("speak").click()
}
function _ShowListen(AnwerChoose, AnwerRight, SetAnwerChoose, ArrofAnwerChoose) {
  return ArrofAnwerChoose.map((e, index) => <div className="ChooseAge" key={index} onClick={() => SetAnwerChoose(e)}
    style={{ backgroundColor: (AnwerChoose === e) ? "yellow" : "transparent" }}>{e}</div>)
}

function _ListenName(SetAnwerRight, SetArrofAnwerChoose) {
  let arr = [];
  let lengthInfo = InfoFruit().length
  let temp = InfoFruit()[Date.now() % lengthInfo].name
  arr.push(temp);
  SetAnwerRight(temp)
  let mynameis = temp
  document.getElementById('speech-msg').value = mynameis;
  arr.push(InfoFruit()[RandomInt(0, lengthInfo - 1)].name);
  arr.push(InfoFruit()[RandomInt(0, lengthInfo - 1)].name);
  arr.push(InfoFruit()[RandomInt(0, lengthInfo - 1)].name);
  document.getElementById("speak").click();
  let arrToSetChoose = arr.sort(() => Math.random() - 0.5);
  SetArrofAnwerChoose(arrToSetChoose);
}
function _FN_Reset1(SetArrTapLamQuen) {
  ArrTapLamQuen_1.forEach(e => {
    e.status = false;
  })
  SetArrTapLamQuen(ArrTapLamQuen_1)
}
function _FN_Reset2(SetArrFruit) {
  ArrFruit_1.forEach(e => {
    e.status = false;
  })
  SetArrFruit(ArrFruit_1)
}
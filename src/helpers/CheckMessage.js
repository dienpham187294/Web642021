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
export default _CheckMessageAndCommand


function _SortMessage(messCheck) {
    let a = messCheck.split(/[\s,?#!-().]+/)
    let b = a.toString();
    return b.split(",").join(" ").toLowerCase()
}
// local module example
function getCurrentDate() {
    let now = new Date(); //now is name of object and Date is classname
    var today = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    return today;
}
function getCurrentTime() {
    let now = new Date(); //now is name of object and Date is classname
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return time;
}
//export function (compulsory)
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;
//now onwards we will use getDate and getTime as words to call functions
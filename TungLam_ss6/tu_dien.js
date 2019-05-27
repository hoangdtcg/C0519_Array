let text = prompt( "moi nhap: ");
let english = ["pink", "purple", "green", "black"];
let tiengviet = ["hồng", "tím", "xanh", "đen"];
let flag = false;
for (let i = 0; i < english.length; i++) {
    if (english[i] === text) {
        alert(text + " ngĩa là mầu: " + tiengviet[i]);
        flag = true;
    }
}
if(flag === false) {
    alert("không tìm thấy");
}
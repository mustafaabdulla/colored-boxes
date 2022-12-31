function changeColor(obj) {
const thisColor = obj.id;
document.getElementById('colorBox').style.backgroundColor = thisColor;
}

function changeNewColor(obj) {
const thisNewColor = obj.value;
document.getElementById('colorBox').style.backgroundColor = thisNewColor
}
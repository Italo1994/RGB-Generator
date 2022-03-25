let progressRed = document.getElementsByClassName("point-selector")[0];
let progressGreen = document.getElementsByClassName("point-selector")[1];
let progressBlue = document.getElementsByClassName("point-selector")[2];

let boxRed = document.getElementsByClassName("box-selector")[0];
let boxGreen = document.getElementsByClassName("box-selector")[1];
let boxBlue = document.getElementsByClassName("box-selector")[2];

function dragMove(e) {
    if(boxRed.style.left > boxRed.style.left-1) {
        boxRed.style.left += 1 +'px';
    } else {
        boxRed.style.left -= 1 +'px';
    }
}

function dragEnd() {

}

setInterval(() => {
    alteraData();
}, 1000);

function alteraData() {
    let date = new Date();

    let d = date.getDay().toString();
    let dFormat = (d.length == 1) ? '0'+d : d;
    let m = date.getMonth().toString();
    let mFormat = (m.length == 1) ? '0'+m : m;
    let a = date.getFullYear().toString();
    let aFormat = (a.length == 1) ? '0'+a : a;

    let idDate = document.getElementById("data");

    idDate.innerHTML = dFormat+'/'+mFormat+'/'+aFormat;
}

let red = document.querySelector("#number-red");
red.addEventListener("change", exibeValor);
let green = document.querySelector("#number-green");
green.addEventListener("change", exibeValor);
let blue = document.querySelector("#number-blue");
blue.addEventListener("change", exibeValor);

let dataRed = document.querySelector("#data-red");
let dataGreen = document.querySelector("#data-green");
let dataBlue = document.querySelector("#data-blue");

function exibeValor(e) {
    var valueRed = red.value;
    var valueGreen = green.value;
    var valueBlue = blue.value;
    const zero = 0;

    alteraCorCirculo(valueRed, valueGreen, valueBlue);

    if(valueRed === "") {
        dataRed.innerHTML = zero;
    } else {
        dataRed.innerHTML = valueRed;
    }

    if(valueGreen === "") {
        dataGreen.innerHTML = zero;
    } else {
        dataGreen.innerHTML = valueGreen;
    }

    if(valueBlue === "") {
        dataBlue.innerHTML = zero;
    } else {
        dataBlue.innerHTML = valueBlue;
    }
}

function alteraCorCirculo(r, g, b) {
    let circulo = document.querySelector("#circulo");
    let cor = `rgb(${r},${g},${b})`;
    circulo.style.backgroundColor = cor;
}
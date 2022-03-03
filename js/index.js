let progressRed = document.getElementsByClassName("point-selector")[0];
let progressGreen = document.getElementsByClassName("point-selector")[1];
let progressBlue = document.getElementsByClassName("point-selector")[2];

let boxRed = document.getElementsByClassName("box-selector")[0];
let boxGreen = document.getElementsByClassName("box-selector")[1];
let boxBlue = document.getElementsByClassName("box-selector")[2];

// const propriedades = boxRed.getBoundingClientRect(); // conjuntos de propriedades da progress bar
// const largura = propriedades.width; // largura da progress bar

// let posicaoInicialRed = progressRed.style.left;

// boxRed.addEventListener("mousemove", dragMove);
// boxRed.addEventListener("mouseup", dragEnd);

function dragMove(e) {
    if(boxRed.style.left > boxRed.style.left-1) {
        boxRed.style.left += 1 +'px';
    } else {
        boxRed.style.left -= 1 +'px';
    }
}

function dragEnd() {

}

// console.log(posicaoInicialRed)



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
    // circulo.style.background = `rgb(${r},${g},${b})`;
    // alert(circulo.style.background);
}
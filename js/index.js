let progressRed = document.getElementsByClassName("point-selector")[0];
let progressGreen = document.getElementsByClassName("point-selector")[1];
let progressBlue = document.getElementsByClassName("point-selector")[2];

let boxRed = document.getElementsByClassName("box-selector")[0];
let boxGreen = document.getElementsByClassName("box-selector")[1];
let boxBlue = document.getElementsByClassName("box-selector")[2];

const propriedades = boxRed.getBoundingClientRect(); // conjuntos de propriedades da progress bar
const largura = propriedades.width; // largura da progress bar

let posicaoInicialRed = progressRed.style.left;

boxRed.addEventListener("mousemove", dragMove);
boxRed.addEventListener("mouseup", dragEnd);

function dragMove(e) {
    if(boxRed.style.left > boxRed.style.left-1) {
        boxRed.style.left += 1 +'px';
    } else {
        boxRed.style.left -= 1 +'px';
    }
}

function dragEnd() {

}

console.log(posicaoInicialRed)
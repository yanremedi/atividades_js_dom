let clickBox = document.getElementById("clickBox");
let mousedownBox = document.getElementById("mousedownBox");
let mousemoveBox = document.getElementById("mousemoveBox");
let mouseupBox = document.getElementById("mouseupBox");
let mouseoverBox = document.getElementById("mouseoverBox");
let mouseoutBox = document.getElementById("mouseoutBox");
let output = document.getElementById("output");

clickBox.onclick = function () {
    output.innerHTML = "Voce clicou na caixa!";
    this.style.backgroundColor = "lightgreen";
};

mousedownBox.onmousedown = function () {
    output.innerHTML = "Voce pressionou o botao do mouse na caixa!";
    this.style.backgroundColor = "lightblue";
};

mousemoveBox.onmousemove = function () {
    output.innerHTML = "Voce moveu o mouse na caixa!";
    this.style.backgroundColor = "lightpink";
};

mouseupBox.onmouseup = function () {
    output.innerHTML = "Voce soltou o botao do mouse na caixa!";
    this.style.backgroundColor = "lightyellow";
};

mouseoverBox.onmouseover = function () {
    output.innerHTML = "Voce passou o mouse sobre a caixa!";
    this.style.backgroundColor = "lightgray";
};

mouseoutBox.onmouseout = function () {
    output.innerHTML = "Voce tirou o mouse da caixa!";
    this.style.backgroundColor = "";
};
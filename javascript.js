function darkMode(){
    let element = document.body;
    let content = document.getElementById("darkModetext");
    element.className = "dark-mode";
    content.innerText = "Tema Escuro ATIVADO"
}

function lightMode(){
    let element = document.body;
    let content = document.getElementById("darkModetext");
    element.className = "light-mode";
    content.innerText = "Tema escuro DESATIVADO";
}
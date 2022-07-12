var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innertext = "tanyapratap";

function clickHandler(){
    outputDiv.innertext = "kasijidbijbdv" + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)
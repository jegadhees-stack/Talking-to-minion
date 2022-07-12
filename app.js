var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    console.log("clicked");
    outputDiv.innerText = "mindijsfuyva " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)
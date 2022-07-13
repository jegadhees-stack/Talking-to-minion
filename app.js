var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/"

function getTranslationURL(input)
{
    return serverURL = "?" +"text=" + input;
}

function errorHandler(error)
{
    console.log("error occured!!");
    alert("something wrong with this, please try again later");
}




function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(responce => responce.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })

    
}

btnTranslate.addEventListener("click", clickHandler)
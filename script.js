
function addNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if(number1 === "" || number2 === ""){
        alert('Erreur');
    }
    var result = parseInt(number1) + parseInt(number2);
    document.getElementById("result").innerHTML = result;
}

function subtractNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if(number1 === "" || number2 === ""){
        alert('Erreur');
    }
    var result = parseInt(number1) - parseInt(number2);
    document.getElementById("result").innerHTML = result;
}

function multiplyNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if(number1 === "" || number2 === ""){
        alert('Erreur');
    }
    var result = parseInt(number1) * parseInt(number2);
    document.getElementById("result").innerHTML = result;
}

function divideNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if(number1 === "" || number2 === ""){
        alert('Erreur');
    }
    var result = parseInt(number1) / parseInt(number2);
    document.getElementById("result").innerHTML = result;
}

function percentageNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if(number1 === "" || number2 === ""){
        alert('Erreur');
    }
    var result = (parseInt(number1) / parseInt(number2)) * 100;
    document.getElementById("result").innerHTML = result + "%";
}

function carreNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number1").value;
    var result = parseInt(number1) * parseInt(number2);
    document.getElementById("result").innerHTML = result;
}

function racineNumbers() {
    var number1 = document.getElementById("number1").value;
    var result = Math.sqrt(number1);

    if(number1 < 0){
        alert('Mettre un Nombre positif');
    }
    document.getElementById("result").innerHTML = result;
}

function puissanceNumbers() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    if(number1 === "" || number2 === ""){
        alert('Erreur');
    }
    var result = 1;
    for (let i = 0; i < number2; i++) {
        result *= number1;
    }
    document.getElementById("result").innerHTML = result;
}

function clearNumbers() {
    var result = "";
    document.getElementById("number1").value = result;
    document.getElementById("number2").value = result;
    document.getElementById("result").innerHTML = result;
}









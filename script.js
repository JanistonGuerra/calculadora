var display = document.querySelector('#display')

function showDisplay(value) {
    if(value == ".") {
        display.value = 0;
    }
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let y = eval(display.value)
    display.value = y;

    if(display.value == "underfined") {
        display.value = "";
    }
}

//eval() nativo do js para transforma em equaçao,com isso n precisou tranforma string em number
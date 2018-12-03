"use strict";

function inputAdding(entry) {
    let inputSelect = document.getElementById("inputId").value;

    if(inputSelect.length < 9 ) {
        document.getElementById("inputId").value+=entry;
    }

}
function calculate() {
    if (document.getElementById("inputId").value.charAt(document.getElementById("inputId").value.length - 1) === "0") {
        document.getElementById("inputId").value = 'Error: Cannot divide by zero';
    }

    let x = document.getElementById("inputId").value;
    document.getElementById("inputId").value = eval(x);
}

function clearAll() {
    document.getElementById("inputId").value = "";
}

function clearLastEntry() {
    let inputSelect = document.getElementById("inputId").value;
    document.getElementById("inputId").value =  inputSelect.substr(0, inputSelect.length - 1);
}

function regexVal(e) {
    let unicode=e.charCode? e.charCode : e.keyCode;
        if (unicode < 42|| unicode > 57) {
            return false //disable key press
        }
}
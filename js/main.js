
window.onload = function () {
   let listButtons = document.querySelectorAll(".buttons");
    for (let i = 0; i < listButtons.length; i++) {
        listButtons[i].addEventListener("click", function (entry) {
            let inputSelect = document.getElementById("inputId").value;

            if((entry.target.value === '-' ||
                entry.target.value === '+' ||
                entry.target.value === '/' ||
                entry.target.value === '*' ||
                entry.target.value ==='0'  ||
                entry.target.value ==='.') &&
                inputSelect.length === 0) {
            }
            else if (inputSelect.length < 9) {
                let lastElement = inputSelect.substr(inputSelect.length-1, 1);
                if( (entry.target.value === '-' ||
                     entry.target.value === '+' ||
                     entry.target.value === '/' ||
                     entry.target.value === '*' ||
                     entry.target.value ==='.') &&
                    (lastElement === '*' ||
                        lastElement === '-' ||
                        lastElement === '+' ||
                        lastElement === '/' ||
                        lastElement === '.')) {
                }
                else {
                    document.getElementById("inputId").value+=entry.target.value;
                }
            }
        });
    }
};

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
    let inputSelect = document.getElementById("inputId").value;
    let lastElement = inputSelect.substr(inputSelect.length-1, 1);
    let unicode=e.charCode? e.charCode : e.keyCode;
        if  ((unicode < 42 || unicode > 57) ||
            (inputSelect.length === 0 && (unicode < 49 || unicode > 57 ))) {
            return false //disable key press
        }
        if( (e.key === '-' ||
             e.key === '+' ||
             e.key === '/' ||
             e.key === '*' ||
             e.key ==='.') &&
               (lastElement === '*' ||
                lastElement === '-' ||
                lastElement === '+' ||
                lastElement === '/' ||
                lastElement === '.')) {
            return false
        }
}

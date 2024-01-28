let addTeacherBtn = document.querySelector(".add-teacher"); //use querySelector
let addStudentBtn = document.querySelector(".add-student"); //use querySelector
let printBtn  = document.querySelector(".print"); //use querySelector
let form = document.querySelectorAll(".keyValue-box")
var res = document.querySelector("div.res");
var inp = document.querySelectorAll(".q-input");

function emptyInput(i1, i2) {
    if ((inp[i1].value.trim().length === 0) || (inp[i2].value.trim().length === 0))  {
        alert("Inputs must not be empty!");
        return(0);
    }
}
function addinputs(i) {
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    input1.className = "q-input";
    input2.className = "q-input";
    form[i].appendChild(input1);
    form[i].appendChild(input2);
}
function addTeacher() {
    var output = emptyInput(0,1);
    if(output == 0){
        return(0);
    }
    addinputs(0);
}

function addStudent() {
    var output = emptyInput(2,3);
    if(output == 0){
        return(0);
    }
    addinputs(1);
}

function print() {
    
}

addTeacherBtn.addEventListener("click", addTeacher)
addStudentBtn.addEventListener("click", addStudent)
printBtn.addEventListener("click", print)
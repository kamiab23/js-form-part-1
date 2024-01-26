let addTeacherBtn = document.querySelector(".add-teacher"); //use querySelector
let addStudentBtn = document.querySelector(".add-student"); //use querySelector
let printBtn  = document.querySelector(".print"); //use querySelector
var res = document.querySelector("div.res");

function emptyInput(i1, i2) {
    var empty;
    empty = document.querySelectorAll(".q-input");
    if ((empty[i1].value.trim().length === 0) || (empty[i2].value.trim().length === 0))  {
        res.innerHTML = "Inputs must not be empty!";
    }
    return(0);
}
function addTeacher() {
    var output = emptyInput(0,1);
    if(output == 0){
        return(0);
    }
}

function addStudent() {
    var output = emptyInput(2,3);
    if(output == 0){
        return(0);
    }
}

function print() {
   
}

addTeacherBtn.addEventListener("click", addTeacher)
addStudentBtn.addEventListener("click", addStudent)
printBtn.addEventListener("click", print)
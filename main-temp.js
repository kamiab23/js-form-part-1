let addTeacherBtn = document.querySelector(".add-teacher"); //use querySelector
let addStudentBtn = document.querySelector(".add-student"); //use querySelector
let printBtn  = document.querySelector(".print"); //use querySelector
let form = document.querySelectorAll(".keyValue-box")
var res = document.querySelector("div.res");

function emptyInput1() {
    var inp = document.querySelectorAll(".q-input1");
    // console.log(inp);
    for (let j = 0; j < inp.length; j++) {
        console.log(inp[j].value);
        if (inp[j].value.trim().length === 0)  {
            alert("Inputs must not be empty!");
            return(0);
            
        }
    }
}
function emptyInput2() {
    var inp = document.querySelectorAll(".q-input2");
    // console.log(inp);
    for (let j = 0; j < inp.length; j++) {
        if (inp[j].value.trim().length === 0)  {
            alert("Inputs must not be empty!");
            return(0);
        }
    }
}
function addinputs(i) {
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    input1.className = "q-input1";
    input2.className = "q-input1";
    form[i].appendChild(input1);
    form[i].appendChild(input2);
}
function addTeacher() {
    var output = emptyInput1();
    if(output == 0){
        return(0);
    }
    addinputs(0);
}

function addStudent() {
    var output = emptyInput2();
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
let addTeacherBtn = document.querySelector(".add-teacher"); //use querySelector
let addStudentBtn = document.querySelector(".add-student"); //use querySelector
let printBtn  = document.querySelector(".print"); //use querySelector
var alert = document.querySelector("div.alert");
var res = document.querySelector("div.res");
var inp = document.querySelectorAll(".q-input");
var arr = [];

function emptyInput(i1, i2) {
    if ((inp[i1].value.trim().length === 0) || (inp[i2].value.trim().length === 0))  {
        alert.innerHTML = "Inputs must not be empty!";
        alert.style.color = "red";
        return(0);
    }
    if ((inp[i1].value.trim().length === 0) || (inp[i2].value.trim().length != 0)) {
        alert.innerHTML = " ";
    }
}
function addinputs(j1,j2) {
    arr.push(inp[j1].value, inp[j2].value);
    console.log(arr);
}
function addTeacher() {
    var output = emptyInput(0,1);
    if(output == 0){
        return(0);
    }
    addinputs(0,1);
}

function addStudent() {
    var output = emptyInput(2,3);
    if(output == 0){
        return(0);
    }
    addinputs(2,3);
}

function print() {
    for (let i = 0; i < arr.length; i=i+2) {

        var newEl = document.createElement("p");
        newEl.innerHTML = `${i+1+". "+arr[i]+" "+arr[i+1]}`;
        res.appendChild(newEl);
        
    }
    // arr.remove(value);
}

addTeacherBtn.addEventListener("click", addTeacher)
addStudentBtn.addEventListener("click", addStudent)
printBtn.addEventListener("click", print)
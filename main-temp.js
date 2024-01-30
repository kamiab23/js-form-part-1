let addTeacherBtn = document.querySelector(".add-teacher"); //use querySelector
let addStudentBtn = document.querySelector(".add-student"); //use querySelector
let printBtn  = document.querySelector(".print"); //use querySelector
let form = document.querySelectorAll(".keyValue-box")
var res = document.querySelector("div.res");

function emptyInput1() {
    var inp = document.querySelectorAll(".q-input1");
    // console.log(inp);
    for (let j = 0; j < inp.length; j++) {
        if (inp[j].value.trim().length === 0)  {
            alert("Inputs must not be empty!");
            return(0);
            
        }
    }
}
function emptyInput2() {
    var inp = document.querySelectorAll(".q-input2");
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
    if (i==0) {
        input1.className = "q-input1";
        input2.className = "q-input1";
    }else if (i!=0) {
        input1.className = "q-input2";
        input2.className = "q-input2";
    }
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
    // for reset
    res.innerHTML = "";
    // teachers
    var inp1 = document.querySelectorAll(".q-input1");
    var teacherText = document.createElement("p");
    var text = document.createTextNode("TEACHER");
    teacherText.appendChild(text);
    teacherText.style.color = "green";
    teacherText.style.fontSize = "20px";
    teacherText.style.fontWeight = "bold";
    res.appendChild(teacherText);
    teacherText.innerHTML += "<br>";

    for (let i = 0; i < inp1.length; i++) {
        teacherText.innerHTML += inp1[i].value + " ";
        if (i%2!=0) {
            teacherText.innerHTML += "<br>"
        }
    }
    // students
    var inp2 = document.querySelectorAll(".q-input2");
    var studentText = document.createElement("p");
    var text2 = document.createTextNode("STUDENT");
    studentText.appendChild(text2);
    studentText.style.color = "red";
    studentText.style.fontSize = "20px";
    studentText.style.fontWeight = "bold";
    res.appendChild(studentText);
    studentText.innerHTML += "<br>";

    for (let i = 0; i < inp2.length; i++) {
        studentText.innerHTML += inp2[i].value + " ";
        if (i%2!=0) {
            studentText.innerHTML += "<br>"
        }
    }
}

addTeacherBtn.addEventListener("click", addTeacher)
addStudentBtn.addEventListener("click", addStudent)
printBtn.addEventListener("click", print)
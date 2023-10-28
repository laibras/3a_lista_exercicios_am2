
let qBut1=document.getElementById("qBut1");
let qBut2=document.getElementById("qBut2");
let qBut3=document.getElementById("qBut3");
let questions = document.querySelectorAll(".question");
let flag=0;

qBut1.addEventListener("click", function () {
    flag=1;
    showQuest();
 });
 qBut2.addEventListener("click", function () {
    flag=2;
    showQuest();
 });
 qBut3.addEventListener("click", function () {
    flag=3;
    showQuest();
 });

 function showQuest(){
    questions.forEach((question) => {
        question.style.display = "none";
      });

    if(flag==1)     questions[0].style.display="block";
    else if(flag==2)   questions[1].style.display="block";
    else if(flag==3)   questions[2].style.display="block";
 }

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

   for(let i=1;i<=10;i++){
         if(flag==i)     questions[i-1].style.display="block";
   }
 }

 //questão 1*********************************************************

 function sortArrayStr(arr,typeSort){
   if (arr.length>100) return null;
   //if (typeSort!=1 || typeSort!=-1) 
   if(typeSort==1){

   }else if(typeSort==-1){

   }else return null;

 }
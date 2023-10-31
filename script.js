
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

//  let q1b1=document.getElementById("q1b1");
//  let q1b2=document.getElementById("q1b2");
//  let wordInput=document.getElementById("wordInput")
//  q1b1.addEventListener("click", function () {
 
   
// });

//  function sortArrayStr(arr,typeSort){
//    if (arr.length>100) return null;
//    //if (typeSort!=1 || typeSort!=-1) 
//    if(typeSort==1){

//    }else if(typeSort==-1){

//    }else return null;

//  }

function sortArrayStr(arr, typeSort) {
   // Verifica se o tamanho do vetor é maior que 100
   if (arr.length > 100) {
       return null;
   }
   // Verifica se o valor de typeSort é válido
   if (typeSort !== 1 && typeSort !== -1) {
       return null;
   }
   // Ordena o vetor de acordo com a direção especificada
   const sortedArr = arr.slice(); // Faz uma cópia do array para evitar modificá-lo diretamente
   sortedArr.sort((a, b) => (typeSort === 1) ? a.localeCompare(b) : b.localeCompare(a));
   return sortedArr;
}

document.addEventListener('DOMContentLoaded', function () {
   const wordInput = document.getElementById('wordInput');
   const q1b1 = document.getElementById('q1b1');
   const q1b2 = document.getElementById('q1b2');
   const q1Result = document.getElementById('q1Result');

   q1b1.addEventListener('click', function () {
       const words = wordInput.value.split(',').map(word => word.trim());
       const result = sortArrayStr(words, 1);

       if (result === null) {
           q1Result.textContent = 'Parâmetros inválidos.';
       } else {
           q1Result.textContent = result.join(', ');
       }
   });

   q1b2.addEventListener('click', function () {
       const words = wordInput.value.split(',').map(word => word.trim());
       const result = sortArrayStr(words, -1);

       if (result === null) {
           q1Result.textContent = 'Parâmetros inválidos.';
       } else {
           q1Result.textContent = result.join(', ');
       }
   });
});


 //questão 2*********************************************************

 function searchItems(arr, key, value) {
   const result = [];

   if (key !== "nome" && key !== "idade" && key !== "data-nascimento") {
       return undefined;
   }

   for (const obj of arr) {
       if (obj.hasOwnProperty(key)) {
           if (obj[key] === value) {
               result.push(obj);
           }
       } else {
           return undefined;
       }
   }

   if (result.length === 0) {
       return null;
   }

   return result;
}
//exemplo de ojeto com os dados
const objetos = [
   { nome: "Ana", idade: 25, "data-nascimento": new Date("1998-01-15") },
   { nome: "Beto", idade: 30, "data-nascimento": new Date("1993-05-20") },
   { nome: "Carlos", idade: 25, "data-nascimento": new Date("1998-01-15") },
];

const searchButton = document.getElementById("searchButton");
const q2Result = document.getElementById("q2Result");

searchButton.addEventListener("click", function () {
   const key = document.getElementById("keyInput").value;
   const value = document.getElementById("valueInput").value;

   const result = searchItems(objetos, key, value);

   if (result === undefined) {
       q2Result.textContent = "Chave inválida ou inexistente nos objetos.";
   } else if (result === null) {
      q2Result.textContent = "Nenhum objeto corresponde à pesquisa.";
   } else {
      q2Result.textContent = JSON.stringify(result);
   }
});


  
//seleção das questões**********************************************************
let qBut1=document.getElementById("qBut1");
let qBut2=document.getElementById("qBut2");
let qBut3=document.getElementById("qBut3");
let qBut4=document.getElementById("qBut4");
let qBut5=document.getElementById("qBut5");
let qBut6=document.getElementById("qBut6");
let qBut7=document.getElementById("qBut7");
let qBut8=document.getElementById("qBut8");
let qBut9=document.getElementById("qBut9");

let questions = document.querySelectorAll(".question");
let flag=0;

const questionButtons = document.querySelectorAll(".questBut");

questionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        flag = index + 1;
        showQuest();
    });
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


//questão 6************************************************************************

document.addEventListener("DOMContentLoaded", function() {
  const commentsContainer = document.getElementById("comments");
  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");

  let currentPage = 1;
  const itemsPerPage = 10;

  async function listPosts(url) {
      try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Erro ao buscar os comentários:", error);
          return null;
      }
  }


let totalComments = 0;

async function getTotalComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        totalComments = data.length;
    } catch (error) {
        console.error("Erro ao buscar o total de comentários:", error);
        totalComments = 0;
    }
}

  async function displayComments(page) {
      const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`;
      const comments = await listPosts(url);

      if (comments === null) {
          commentsContainer.innerHTML = "Não foi possível buscar os comentários.";
          return;
      }

      commentsContainer.innerHTML = "";

      comments.forEach(comment => {
          const commentDiv = document.createElement("div");
          commentDiv.classList.add("comment");
          commentDiv.innerHTML = `
              <h4>${comment.title}</h4>
              <p>${comment.body}</p>
               <p>ID do Usuário: ${comment.userId}</p>
          `;
          commentsContainer.appendChild(commentDiv);
      });

    if (currentPage >= Math.ceil(totalComments / itemsPerPage)) {
        nextPageButton.disabled = true; // Desabilita o botão de próxima página
    } else {
        nextPageButton.disabled = false; // Habilita o botão de próxima página
    }
    
  }
getTotalComments().then(() => {
    displayComments(currentPage);
});

  prevPageButton.addEventListener("click", () => {
      if (currentPage > 1) {
          currentPage--;
          displayComments(currentPage);
      }
  });

  nextPageButton.addEventListener("click", () => {
      currentPage++;
      displayComments(currentPage);
  });

  displayComments(currentPage);
});




//questão 7
function listPostsByUser() {
    const userId = document.getElementById("userId").value;
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    
    // Limpar a lista de posts
    document.getElementById("posts").innerHTML = "";

    fetch(url)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                // Criar um elemento de comentário para cada post
                const comment = document.createElement("div");
                comment.className = "comment";
                comment.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
                document.getElementById("posts").appendChild(comment);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar os posts:", error);
        });
}

//8

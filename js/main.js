const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log(e);
  const pesquisa = document.querySelector('.pesquisa-input').value;
 console.log(pesquisa);

 buscaCidade(pesquisa);
  
  

  
})


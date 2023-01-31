const h1 = document.querySelector('.txt');

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      h1.innerHTML += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao(`Oi, sou Ana. Desenvolvedora front-end.`, 0);

//animação da pagina

const anime = document.querySelectorAll('[data-anime]');
const animeClass =  'animate'


function animeScroll(){
    const topScroll = window.pageYOffset + (window.innerHeight * 3 /4);
    anime.forEach(function(element){
        if(topScroll > element.offsetTop){
            element.classList.add(animeClass)
        }else{
            element.classList.remove(animeClass)
        }
    })
}


window.addEventListener('scroll', function(){
    animeScroll();

})
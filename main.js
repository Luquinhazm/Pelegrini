const cardServico = document.querySelectorAll( '.card-servicos')
const cardInstalacao = document.querySelector('.card-instalacao')

const cards = Array.from(cardServico)

cards.forEach (card =>{

    card.addEventListener("mouseover", ()=>{
            cardInstalacao.classList.remove('card-instalacao')
    })
    card.addEventListener("mouseout", ()=>{
            cardInstalacao.classList.add('card-instalacao')
    })
     
})


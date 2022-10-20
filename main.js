const classGift = document.getElementById('gift')
const classPergunta = document.getElementById('pergunta')

const iconGift = document.getElementById('iconGift')
const iconPergunta = document.getElementById('iconPergunta')

const close = document.getElementById('close1')

const body = document.querySelector('body')

close1.addEventListener('click', () => {
  classGift.classList.remove('show')
  body.classList.remove('hidden')
})

close2.addEventListener('click', () => {
  classPergunta.classList.remove('show')
  body.classList.remove('hidden')
})

iconGift.addEventListener('click', () => {
  classGift.classList.add('show')
  body.classList.add('hidden')
})

iconPergunta.addEventListener('click', () => {
  classPergunta.classList.add('show')
  body.classList.add('hidden')
})


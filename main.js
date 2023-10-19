let box = document.querySelector('.box')
let amount = 696
// let colors = ['red','green','blue','yellow','purple']


for(let i = 0; i < amount;i++) {
    let item = document.createElement('div')
    item.classList.add('item')
    box.append(item)
    item.addEventListener('mouseover', () => setColor(item))
    item.addEventListener('mouseleave', () => removeColor(item))
}

function setColor(el) {
    el.style.background = `rgb(${randomColor(0,255)},${randomColor(0,255)},${randomColor(0,255)})`
}

function removeColor(el) {
    el.style.background = '' 
}

function randomColor(fix,mix) {
   let index = Math.floor(Math.random() * (mix + 1 - fix ) + fix )
   return index    
}
randomColor(0,255)

const input = document.querySelector('input')
const list = document.querySelector('.list')
const btn = document.querySelector('.btn2')
const h1 = document.createElement('h1')
const new_div = document.createElement('div')
btn.addEventListener('click',()=>{
    console.log('gd')
    
    h1.textContent = input
    list.appendChild(h1)
    new_div.appendChild(list)
    console.log(new_div)
})


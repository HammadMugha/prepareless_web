// ==============SIDEBAR_CODE==============
const menu = document.querySelector('.hamburger')
const trash = document.getElementById('trash')
const sidebar = document.querySelector('.home nav ul')
console.log(sidebar)
menu.addEventListener('click',function() {
  sidebar.classList.add('active')
})
trash.addEventListener('click',function() {
  sidebar.classList.remove('active')
})







  
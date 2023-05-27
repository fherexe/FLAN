//--------------------------Hamburger Menu--------------------------

const menuHamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

menuHamburger.addEventListener('click', () =>{
  menu.classList.toggle('active');
  menuHamburger.classList.toggle('active');
  
  //toggle vai definir que quando clicar vai fazer a ação e quando clicar novamente vai desfazer
} ); //atribuir ação a uma função 


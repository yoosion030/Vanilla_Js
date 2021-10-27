// jQuery(document).ready(function(){
//     $('.menu>li').mouseover(function(){
//       $(this).find('.submenu').stop().slideDown(500);
//     }).mouseout(function(){
//       $(this).find('.submenu').stop().slideUp(500);
//     });
//   });


const menu = document.querySelector('.menu>li');
const submenu = document.querySelector('.submenu');

menu.addEventListener('mouseover',()=> {
    submenu.style.display = "block";
})

menu.addEventListener('mouseout',()=> {
    submenu.style.display = "none";
})
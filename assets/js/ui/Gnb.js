import { handleExpanded } from "./handleExpanded.js";

export const HandleMenuBtn = ()=>{
  $('header .btn-menu').click(function(){
    $('header').toggleClass('open');
    $('.gnb').stop().fadeToggle();
  })

  handleExpanded('header .btn-menu');
}
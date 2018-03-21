$(document).ready(() =>{
    $('.main-header__menu-icon').on('click',() =>{
	 	$('.main-nav__content').toggleClass('otherClass');
	 	$('.main-header__menu-icon').toggleClass('icon-display');
	 })
});
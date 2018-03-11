import $ from "jquery";

class MobileMenu {
	constructor(){
		this.siteHeader =$('.main-header');
	  this.menuIcon =$('.main-header__menu-icon');
	  this.menuContent =$(".main-header__menu-content");
	  this.events();
	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	toggleTheMenu(){
	   this.menuContent.toggleClass('main-header__menu-content--is-visible');
	   this.siteHeader.toggleClass("main-header--is-expanded");
	   this.menuIcon.toggleClass("main-header__menu-icon--close-x");
	}
}

export default MobileMenu;
export const navbarShrink={navbarDom:document.querySelector(".navbar-container"),leftAsideDom:document.querySelector(".page-aside"),isnavbarShrink:false,navbarHeight:0,init(){this.navbarHeight=this.navbarDom.getBoundingClientRect().height;this.navbarShrink();this.togglenavbarDrawerShow();window.addEventListener("scroll",(()=>{this.navbarShrink()}))},navbarShrink(){const a=document.documentElement.scrollTop||document.body.scrollTop;if(!this.isnavbarShrink&&a>this.navbarHeight){this.isnavbarShrink=true;document.body.classList.add("navbar-shrink")}else if(this.isnavbarShrink&&a<=this.navbarHeight){this.isnavbarShrink=false;document.body.classList.remove("navbar-shrink")}},togglenavbarDrawerShow(){const a=[document.querySelector(".window-mask"),document.querySelector(".navbar-bar")];if(document.querySelector(".navbar-drawer")){a.push(...document.querySelectorAll(".navbar-drawer .drawer-navbar-list .drawer-navbar-item"));a.push(...document.querySelectorAll(".navbar-drawer .drawer-navbar-list .dropdown-item"))}a.forEach((a=>{if(!a.dataset.navbarInitialized){a.dataset.navbarInitialized=1;a.addEventListener("click",(()=>{document.body.classList.toggle("navbar-drawer-show")}))}}));const e=document.querySelector(".navbar-container .navbar-content .logo-title");if(e&&!e.dataset.navbarInitialized){e.dataset.navbarInitialized=1;e.addEventListener("click",(()=>{document.body.classList.remove("navbar-drawer-show")}))}}};navbarShrink.init();
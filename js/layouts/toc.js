function initTOC(){Global.utils.navItems=document.querySelectorAll(".post-toc-wrap .post-toc li");if(Global.utils.navItems.length>0){Global.utils={...Global.utils,updateActiveTOCLink(){if(!Array.isArray(Global.utils.sections))return;let e=Global.utils.sections.findIndex((e=>e&&e.getBoundingClientRect().top-100>0));if(e===-1){e=Global.utils.sections.length-1}else if(e>0){e--}this.activateTOCLink(e)},registerTOCScroll(){Global.utils.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map((e=>{const t=document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""));return t}))},activateTOCLink(e){const t=document.querySelectorAll(".post-toc li a.nav-link")[e];if(!t||t.classList.contains("active-current")){return}document.querySelectorAll(".post-toc .active").forEach((e=>{e.classList.remove("active","active-current")}));t.classList.add("active","active-current")},showTOCAside(){const e=()=>{const e=Global.getStyleStatus();const t="isOpenPageAside";if(e&&e.hasOwnProperty(t)){Global.utils.TocToggle.pageAsideHandleOfTOC(e[t])}else{Global.utils.TocToggle.pageAsideHandleOfTOC(true)}};const t="init_open";if(Global.theme_config.articles.toc.hasOwnProperty(t)){Global.theme_config.articles.toc[t]?e():Global.utils.TocToggle.pageAsideHandleOfTOC(false)}else{e()}}};Global.utils.showTOCAside();Global.utils.registerTOCScroll()}else{document.querySelectorAll(".toc-content-container, .toc-marker").forEach((e=>{e.remove()}))}}swup.on("pageView",(()=>{initTOC()}));window.addEventListener("DOMContentLoaded",initTOC);
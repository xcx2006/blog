REDEFINE.initLocalSearch=()=>{let e=REDEFINE.hexo_config.path;if(!e){console.warn("`hexo-generator-searchdb` plugin is not installed!");return}let t=false;let n;let l=true;if(e.length===0){e="search.xml"}else if(e.endsWith("json")){l=false}const r=document.querySelector(".search-input");const o=document.getElementById("search-result");const i=(e,t,n)=>{let l=e.length;if(l===0)return[];let r=0;let o=[];let i=[];if(!n){t=t.toLowerCase();e=e.toLowerCase()}while((o=t.indexOf(e,r))>-1){i.push({position:o,word:e});r=o+l}return i};const s=(e,t,n,l)=>{let r=n[n.length-1];let{position:o,word:i}=r;let s=[];let c=0;while(o+i.length<=t&&n.length!==0){if(i===l){c++}s.push({position:o,length:i.length});let e=o+i.length;n.pop();while(n.length!==0){r=n[n.length-1];o=r.position;i=r.word;if(e>o){n.pop()}else{break}}}return{hits:s,start:e,end:t,searchTextCount:c}};const c=(e,t)=>{let n="";let l=t.start;t.hits.forEach((t=>{n+=e.substring(l,t.position);let r=t.position+t.length;n+=`<b class="search-keyword">${e.substring(t.position,r)}</b>`;l=r}));n+=e.substring(l,t.end);return n};const a=()=>{if(!t)return;let e=r.value.trim().toLowerCase();let l=e.split(/[-\s]+/);if(l.length>1){l.push(e)}let a=[];if(e.length>0){n.forEach((({title:t,content:n,url:r})=>{let o=t.toLowerCase();let h=n.toLowerCase();let u=[];let f=[];let d=0;l.forEach((e=>{u=u.concat(i(e,o,false));f=f.concat(i(e,h,false))}));if(u.length>0||f.length>0){let l=u.length+f.length;[u,f].forEach((e=>{e.sort(((e,t)=>{if(t.position!==e.position){return t.position-e.position}return e.word.length-t.word.length}))}));let o=[];if(u.length!==0){let n=s(0,t.length,u,e);d+=n.searchTextCountInSlice;o.push(n)}let i=[];while(f.length!==0){let t=f[f.length-1];let{position:l,word:r}=t;let o=l-20;let c=l+80;if(o<0){o=0}if(c<l+r.length){c=l+r.length}if(c>n.length){c=n.length}let a=s(o,c,f,e);d+=a.searchTextCountInSlice;i.push(a)}i.sort(((e,t)=>{if(e.searchTextCount!==t.searchTextCount){return t.searchTextCount-e.searchTextCount}else if(e.hits.length!==t.hits.length){return t.hits.length-e.hits.length}return e.start-t.start}));let h=parseInt(REDEFINE.theme_config.local_search.top_n_per_article?REDEFINE.theme_config.local_search.top_n_per_article:1,10);if(h>=0){i=i.slice(0,h)}let p="";if(o.length!==0){p+=`<li><a href="${r}" class="search-result-title">${c(t,o[0])}</a>`}else{p+=`<li><a href="${r}" class="search-result-title">${t}</a>`}i.forEach((e=>{p+=`<a href="${r}"><p class="search-result">${c(n,e)}...</p></a>`}));p+="</li>";a.push({item:p,id:a.length,hitCount:l,searchTextCount:d})}}))}if(l.length===1&&l[0]===""){o.innerHTML='<div id="no-result"><i class="fa-solid fa-magnifying-glass fa-5x"></i></div>'}else if(a.length===0){o.innerHTML='<div id="no-result"><i class="fa-solid fa-box-open fa-5x"></i></div>'}else{a.sort(((e,t)=>{if(e.searchTextCount!==t.searchTextCount){return t.searchTextCount-e.searchTextCount}else if(e.hitCount!==t.hitCount){return t.hitCount-e.hitCount}return t.id-e.id}));let e='<ul class="search-result-list">';a.forEach((t=>{e+=t.item}));e+="</ul>";o.innerHTML=e;window.pjax&&window.pjax.refresh(o)}};const h=()=>{fetch(REDEFINE.hexo_config.root+e).then((e=>e.text())).then((e=>{t=true;n=l?[...(new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")].map((e=>({title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}))):JSON.parse(e);n=n.filter((e=>e.title)).map((e=>{e.title=e.title.trim();e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"";e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/");return e}));const r=document.querySelector("#no-result");r&&(r.innerHTML='<i class="fa-solid fa-magnifying-glass fa-5x"></i>')}))};if(REDEFINE.theme_config.local_search.preload){h()}if(r){r.addEventListener("input",a)}document.querySelectorAll(".search-popup-trigger").forEach((e=>{e.addEventListener("click",(()=>{document.body.style.overflow="hidden";document.querySelector(".search-pop-overlay").classList.add("active");setTimeout((()=>r.focus()),500);if(!t)h()}))}));const u=()=>{document.body.style.overflow="";document.querySelector(".search-pop-overlay").classList.remove("active")};document.querySelector(".search-pop-overlay").addEventListener("click",(e=>{if(e.target===document.querySelector(".search-pop-overlay")){u()}}));document.querySelector(".search-input-field-pre").addEventListener("click",(()=>{r.value="";r.focus();a()}));document.querySelector(".popup-btn-close").addEventListener("click",u);window.addEventListener("pjax:success",u);window.addEventListener("keyup",(e=>{if(e.key==="Escape"){u()}}))};
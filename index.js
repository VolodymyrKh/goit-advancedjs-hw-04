import{a as u,S as v,i as c}from"./assets/vendor-VVWBAj3V.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();u.defaults.baseURL="https://pixabay.com";const f=async(e,r,i=15)=>{const a={key:"15336169-fb8ecea9b4c4a863b6c6a9193",q:e,page:r,per_page:i,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:t}=await u.get("/api",{params:a});return t},g=new v(".gallery-link",{captionsData:"alt",captionDelay:250}),p=e=>e.map(({largeImageURL:r,webformatURL:i,tags:a,likes:t,views:s,comments:l,downloads:M})=>`
          <li class="gallery-item">
            <a class="gallery-link" href=${r}>
              <img class="gallery-image" src="${i}" alt="${a}"/>
            </a>
            <ul class="img-info-list">
              <li class="img-info-item">
                <p class="info-type">Likes</p>
                <p class="img-info">${t}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Views</p>
                <p class="img-info">${s}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Comments</p>
                <p class="img-info">${l}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Downloads</p>
                <p class="img-info">${M}</p>
              </li>
            </ul>
          </li>`).join(""),S=e=>{e.innerHtml=""},y=e=>{e.classList.remove("is-active")},h=e=>{e.classList.add("is-active")},L=e=>{e.classList.add("is-hidden")},b=e=>{e.classList.remove("is-hidden")},o={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMore:document.querySelector(".js-load-more")};let n=0;const q=15;let m=0,d="";async function P(e){e.preventDefault(),L(o.loadMore);const{target:r}=e;if(d=r.elements["search-text"].value.trim(),!d){c.warning({message:"Search field cannot be empty. Please enter a keyword.",position:"topRight"});return}S(o.gallery),h(o.loader),n=1;try{const{hits:i,totalHits:a}=await f(d,n);if(i.length===0){c.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}o.gallery.innerHTML=p(i),g.refresh(),m=Math.ceil(a/q),m>1&&(b(o.loadMore),o.loadMore.addEventListener("click",w))}catch(i){c.error({message:i.message||"Failed to load images!",position:"topRight"})}finally{y(o.loader),e.target.reset()}}const w=async e=>{L(o.loadMore),h(o.loader);try{n++;const{hits:r}=await f(d,n);o.gallery.insertAdjacentHTML("beforeend",p(r)),g.refresh();const{height:i}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*i,behavior:"smooth"})}catch(r){console.log(r)}finally{if(y(o.loader),n===m){o.loadMore.removeEventListener("click",w),c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b(o.loadMore)}};o.form.addEventListener("submit",P);
//# sourceMappingURL=index.js.map

import{a as m,S as p,i as n}from"./assets/vendor-VVWBAj3V.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=t=>{const i=new URLSearchParams({key:"15336169-fb8ecea9b4c4a863b6c6a9193",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`https://pixabay.com/api/?${i}`).then(o=>o.data)},g=new p(".gallery-link",{captionsData:"alt",captionDelay:250}),u=t=>t.map(({largeImageURL:i,webformatURL:o,tags:s,likes:e,views:r,comments:a,downloads:c})=>`
          <li class="gallery-item">
            <a class="gallery-link" href=${i}>
              <img class="gallery-image" src="${o}" alt="${s}"/>
            </a>
            <ul class="img-info-list">
              <li class="img-info-item">
                <p class="info-type">Likes</p>
                <p class="img-info">${e}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Views</p>
                <p class="img-info">${r}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Comments</p>
                <p class="img-info">${a}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Downloads</p>
                <p class="img-info">${c}</p>
              </li>
            </ul>
          </li>`).join(""),d=t=>{t.innerHtml=""},y=t=>{t.classList.remove("is-active")},h=t=>{t.classList.add("is-active")},l={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};function L(t){t.preventDefault();const{target:i}=t,o=i.elements["search-text"].value.trim();if(!o){n.warning({message:"Search field cannot be empty. Please enter a keyword.",position:"topRight"});return}d(l.gallery),h(l.loader),f(o).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}l.gallery.innerHTML=u(s.hits),g.refresh()}).catch(s=>{console.log(s.message),n.error({message:s.message||"Failed to load images!",position:"topRight"})}).finally(()=>{y(l.loader),t.target.reset()})}l.form.addEventListener("submit",L);
//# sourceMappingURL=index.js.map

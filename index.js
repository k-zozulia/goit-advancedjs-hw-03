import{a as E,i as L,S as I}from"./assets/vendor-BBSqv8W6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const F="49492514-812d245cc52e4f29e485c4df0",b="https://pixabay.com/api/",S={key:F,image_type:"photo",orientation:"horizontal",safesearch:"true"};function u(o){L.show({message:o,position:"topRight",timeout:7e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./img/icons/close.svg",closeOnEscape:!0,closeOnClick:!0,maxWidth:"432px"})}function O(o){const i=document.getElementById("loader");return i.style.display="flex",E.get(b,{params:{...S,q:o}}).then(r=>r.data).catch(()=>u("Failed to fetch images")).finally(()=>{i.style.display="none"})}let c=null;function A({total:o,hits:i}){const r=document.getElementById("gallery");if(r.innerHTML="",o===0){u("Sorry, there are no images matching your search query. Please try again!");return}i.forEach(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:m,comments:f,downloads:p},g)=>{const y=[{title:"Likes",value:a},{title:"Views",value:m},{title:"Comments",value:f},{title:"Downloads",value:p}].map(({title:h,value:v})=>`
        <div class="info-block">
          <span class="info-title">${h}</span>
          <span class="info-value">${v}</span>
        </div>
      `).join(""),n=document.createElement("li");n.classList.add("gallery-item"),n.innerHTML=`
      <a href="${e}" class="gallery-link">
        <div class="image-wrapper">
          <img
            src="${s}"
            alt="${t}"
            class="gallery-image hidden"
          />
        </div>
      </a>
      <div class="gallery-info">
        ${y}
      </div>
    `;const d=n.querySelector(".gallery-image");d.onload=()=>{d.classList.remove("hidden")},r.appendChild(n),setTimeout(()=>{n.classList.add("fade-in")},g*100)}),c?c.refresh():c=new I(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}const l={form:document.getElementById("searchForm"),inputField:document.getElementById("searchInput")};l.form.addEventListener("submit",o=>{o.preventDefault();const i=l.inputField.value.trim();i&&O(i).then(A).catch(r=>console.error(r)).finally(()=>{l.inputField.value="",l.inputField.blur()})});
//# sourceMappingURL=index.js.map

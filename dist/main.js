(()=>{"use strict";var e=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var s,n,o;if(Array.isArray(t)){if((s=t.length)!=i.length)return!1;for(n=s;0!=n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((s=(o=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(n=s;0!=n--;)if(!Object.prototype.hasOwnProperty.call(i,o[n]))return!1;for(n=s;0!=n--;){var r=o[n];if(!e(t[r],i[r]))return!1}return!0}return t!=t&&i!=i};const t="__googleMapsScriptId";class i{constructor({apiKey:s,channel:n,client:o,id:r=t,libraries:a=[],language:l,region:c,version:d,mapIds:h,nonce:u,retries:p=3,url:m="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=d,this.apiKey=s,this.channel=n,this.client=o,this.id=r||t,this.libraries=a,this.language=l,this.region=c,this.mapIds=h,this.nonce=u,this.retries=p,this.url=m,i.instance){if(!e(this.options,i.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(i.instance.options)}`);return i.instance}i.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}createUrl(){let e=this.url;return e+="?callback="+this.CALLBACK,this.apiKey&&(e+="&key="+this.apiKey),this.channel&&(e+="&channel="+this.channel),this.client&&(e+="&client="+this.client),this.libraries.length>0&&(e+="&libraries="+this.libraries.join(",")),this.language&&(e+="&language="+this.language),this.region&&(e+="&region="+this.region),this.version&&(e+="&v="+this.version),this.mapIds&&(e+="&map_ids="+this.mapIds.join(",")),e}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((i=>{i?t(i):e()}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}resetIfRetryingFailed(){const e=this.retries+1;this.done&&!this.loading&&this.errors.length>=e&&(this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[])}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback()),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}const s=e=>{const t=document.createElement("ul");return e.forEach((e=>{if("Home"!=e.title){let i=document.createElement("li");i.textContent=e.title,i.setAttribute("data-index",e.index),t.appendChild(i)}})),t},n=e=>{const t=Object.keys(e),s=document.createElement("div");return s.classList.add("col"),t.forEach((t=>{console.log(t),"img"===t?s.appendChild((e=>{const t=document.createElement("div");return t.classList.add("img"),t.style.backgroundImage=e,t})(e[t])):"button"===t?s.appendChild((e=>{const t=document.createElement("a");return t.classList.add("btn"),t.textContent=e.text,t.setAttribute("data-index",e.index),t})(e[t])):"map"===t?s.appendChild((()=>{const e=document.createElement("div");let t;return e.id="map",new i({apiKey:"",version:"weekly"}).load().then((()=>{t=new google.maps.Map(e,{center:{lat:49.285,lng:-123.12},zoom:14})})),e})()):"i"===t?s.appendChild((e=>{const t=document.createElement("i");e.classes.forEach((e=>t.classList.add(e)));const i=document.createElement("a");return i.setAttribute("href",e.url),i.setAttribute("target",e.target),i.appendChild(t),i})(e[t])):"ul"===t?s.appendChild((e=>{const t=document.createElement("ul");return Object.keys(e).forEach((i=>{const s=document.createElement("li");s.textContent=e[i],t.appendChild(s)})),t})(e[t])):s.appendChild(((e,t)=>{const i=document.createElement(t.match(/^h[123456]|[^0-9]+/));return i.textContent=e,i})(e[t],t))})),s},o=(e,t)=>{let i=Object.keys(e.pages[t].content);const s=document.createElement("div");return s.classList.add("module"),s.classList.add(e.pages[t].title.toLowerCase()),i.forEach((i=>{"footer"!=i&&s.appendChild(((e,t)=>{const i=Object.keys(e),s=document.createElement("div");return s.classList.add((e=>{let t=e,i=e.split(/[A-Z]/g),s=e.match(/[A-Z]/g);if(s){for(let e=0;e<s.length;e++)s[e]+=i[e+1],i[e+1]=s;t=i.join("-").toLowerCase()}return t})(t)),s.classList.add("row"),i.forEach((t=>{s.appendChild(n(e[t]))})),s})(e.pages[t].content[i],i))})),s},r={content:document.querySelector("#content")},a={pages:[{index:0,title:"Home",url:"#",content:{deco:{},splash:{col1:{h1:"Welcome To LePizz",span:"Authentic flavours | Localy sourced",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo."},col2:{img:"url(img/pizza-oven.jpg)"}},valueProps:{col1:{img:"url(img/pizza.png)",h2:"Tasty Pizza",span:"Enough said right?"},col2:{img:"url(img/wine.png)",h2:"Curated wine selection",span:"Hand selected wines, picked by our inhouse sommelier"},col3:{img:"url(img/waiter.png)",h2:"Amazing service",span:"Experience a true Itallian delight"}}}},{index:1,title:"Menu",url:"#",content:{lunchTitle:{col1:{h2:"Lunch",div:"11:30am - 4:00pm"}},lunchItems:{col1:{h2:"Margarita",p:"cheese, basil, love",price:"14"},col2:{h2:"Quatro Fomage",p:"Artichoke, Mozzerella, Basil, rich tomato sauce",price:"16"},col3:{h2:"Anchovy & Onion",p:"All the shrooms, spicy peperoni, rich tomato sauce",price:"20"}},dinnerTitle:{col1:{h2:"Dinner",div:"4:00pm - close"}},dinnerItems:{col1:{h2:"Margarita",p:"cheese, basil, love",price:"14"},col2:{h2:"Capricosa",p:"Artichoke, Mozzerella, Basil, rich tomato sauce",price:"16"},col3:{h2:"Al Fungi",p:"All the shrooms, spicy peperoni, rich tomato sauce",price:"20"}}}},{index:2,title:"About",content:{intro:{col1:{img:"url(img/pizza-oven.jpg)"},col2:{h2:"For the love of pizza",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. Incidunt recusandae quibusdam ab, ad quod sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat!"}}}},{index:3,title:"Contact",content:{address:{col1:{h3:"Address",div2:"123 Fake Street",div3:"Vancouver, BC",div4:"V06 0E1"},col2:{map:{}}},hours:{col1:{h3:"Hours",span:"Monday: 12:00 - 22:00",span:"Tuesday: 12:00 - 22:00",wed:"Wednesday: 12:00 - 22:00",thurs:"Thursday: 12:00 - 22:00",fri:"Friday: 12:00 - 23:30",sat:"Saturday: 12:00 - 23:30",sun:"Sunday: 12:00 - 23:30"},col2:{h3:"Contact Us",ul:{li1:"p: 123-456-7890",li2:"e: lepizz@notarealemail.com"}}}}}],footer:{col2:{span:"Created by T-McVee ",i:{classes:["fab","fa-github","fa-lg"],url:"https://github.com/T-McVee",target:"blank"}},col3:{span:"Icons made by Freepik from www.flaticon.com"}}},l=e=>{r.content.childNodes[1].classList.add("slide-right"),setTimeout((()=>{r.content.childNodes[1].remove(),r.content.insertBefore(o(a,e.target.dataset.index),r.content.childNodes[1]),r.content.childNodes[1].classList.add("slide-left"),setTimeout((()=>r.content.childNodes[1].classList.remove("slide-left")),500)}),1e3)};r.content.appendChild((e=>{const t=document.createElement("nav");return t.appendChild((()=>{const t=document.createElement("div");return t.classList.add("logo"),t.textContent="LePizz",t.setAttribute("data-index",e[0].index),t})()),t.appendChild(s(e)),t})(a.pages)),r.content.appendChild(o(a,0)),r.content.appendChild((e=>{const t=Object.keys(e.footer),i=document.createElement("footer"),o=document.createElement("div");return o.classList.add("col"),o.appendChild(s(e.pages)),i.appendChild(o),t.forEach((t=>{i.appendChild(n(e.footer[t]))})),i})(a));const c=Array.from(document.querySelectorAll("li"));c.unshift(document.querySelector(".logo")),c.forEach((e=>e.addEventListener("click",l))),Array.from(document.querySelectorAll(".btn")).forEach((e=>e.addEventListener("click",l)))})();
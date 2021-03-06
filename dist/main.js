(()=>{"use strict";var e=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,s,o;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(s=i;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(s=i;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,o[s]))return!1;for(s=i;0!=s--;){var r=o[s];if(!e(t[r],n[r]))return!1}return!0}return t!=t&&n!=n};const t="__googleMapsScriptId";class n{constructor({apiKey:i,channel:s,client:o,id:r=t,libraries:a=[],language:c,region:l,version:d,mapIds:h,nonce:p,retries:u=3,url:m="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=d,this.apiKey=i,this.channel=s,this.client=o,this.id=r||t,this.libraries=a,this.language=c,this.region=l,this.mapIds=h,this.nonce=p,this.retries=u,this.url=m,n.instance){if(!e(this.options,n.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(n.instance.options)}`);return n.instance}n.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}createUrl(){let e=this.url;return e+="?callback="+this.CALLBACK,this.apiKey&&(e+="&key="+this.apiKey),this.channel&&(e+="&channel="+this.channel),this.client&&(e+="&client="+this.client),this.libraries.length>0&&(e+="&libraries="+this.libraries.join(",")),this.language&&(e+="&language="+this.language),this.region&&(e+="&region="+this.region),this.version&&(e+="&v="+this.version),this.mapIds&&(e+="&map_ids="+this.mapIds.join(",")),e}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((n=>{n?t(n):e()}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}resetIfRetryingFailed(){const e=this.retries+1;this.done&&!this.loading&&this.errors.length>=e&&(this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[])}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback()),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}class i{constructor(e){this.content=e}renderElement(){const e=document.createElement("div");return e.classList.add("img"),e.style.backgroundImage=this.content,e}}class s{constructor(e,t){this.content=e,this.type=t}renderElement(){const e=document.createElement(this.type.match(/^h[123456]|[^0-9]+/));return e.textContent=this.content,e}}const o={pages:[{index:0,title:"Home",url:"#",content:{deco:{},splash:{col1:{h1:new s("Welcome To LePizz","h1"),span:new s("Authentic flavours | Localy sourced","span"),p:new s("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.","p"),button:new class{constructor(e){this.content=e}renderElement(){const e=document.createElement("a");return e.classList.add("btn"),e.textContent=this.content.text,e.setAttribute("data-index",this.content.index),e}}({text:"Menu",index:1})},col2:{img:new i("url(img/pizza-oven.jpg)")}},valueProps:{col1:{img:new i("url(img/pizza.png)"),h2:new s("Tasty Pizza","h2"),span:new s("Enough said right?","span")},col2:{img:new i("url(img/wine.png)"),h2:new s("Curated wine selection","h2"),span:new s("Hand selected wines, picked by our inhouse sommelier","span")},col3:{img:new i("url(img/waiter.png)"),h2:new s("Amazing service","h2"),span:new s("Experience a true Itallian delight","span")}}}},{index:1,title:"Menu",url:"#",content:{lunchTitle:{col1:{sitting:new s("Lunch","h2"),time:new s("11:30am - 4:00pm","div")}},lunchItems:{col1:{name:new s("Margarita","h2"),description:new s("cheese, basil, love","p"),price:new s("14","span")},col2:{name:new s("Quatro Fomage","h2"),description:new s("Artichoke, Mozzerella, Basil, rich tomato sauce","p"),price:new s("16","span")},col3:{name:new s("Anchovy & Onion","h2"),description:new s("All the shrooms, spicy peperoni, rich tomato sauce","p"),price:new s("20","span")}},dinnerTitle:{col1:{sitting:new s("Dinner","h2"),time:new s("4:00pm - close","div")}},dinnerItems:{col1:{name:new s("Margarita","h2"),description:new s("cheese, basil, love","p"),price:new s("14","span")},col2:{name:new s("Capricosa","span"),description:new s("Artichoke, Mozzerella, Basil, rich tomato sauce","span"),price:new s("16","span")},col3:{name:new s("Al Fungi","h2"),description:new s("All the shrooms, spicy peperoni, rich tomato sauce","p"),price:new s("20","span")}}}},{index:2,title:"About",content:{intro:{col1:{img:new i("url(img/pizza-oven.jpg)")},col2:{h2:new s("For the love of pizza","h2"),p:new s("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. Incidunt recusandae quibusdam ab, ad quod sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat!","p")}}}},{index:3,title:"Contact",content:{address:{col1:{title:new s("Address","h3"),street:new s("123 Fake Street","div"),city:new s("Vancouver, BC","div"),zip:new s("V06 0E1","div")},col2:{map:new class{constructor(){}renderElement(){const e=document.createElement("div");let t;return e.id="map",new n({apiKey:"",version:"weekly"}).load().then((()=>{t=new google.maps.Map(e,{center:{lat:49.285,lng:-123.12},zoom:14})})),e}}}},hours:{col1:{title:new s("Hours","h3"),mon:new s("Monday: 12:00 - 22:00","span"),tues:new s("Tuesday: 12:00 - 22:00","span"),wed:new s("Wednesday: 12:00 - 22:00","span"),thurs:new s("Thursday: 12:00 - 22:00","span"),fri:new s("Friday: 12:00 - 23:30","span"),sat:new s("Saturday: 12:00 - 23:30","span"),sun:new s("Sunday: 12:00 - 23:30","span")},col2:{title:new s("Contact Us","h3"),ul:new class{constructor(e){this.content=e}renderElement(){const e=document.createElement("ul");return Object.keys(this.content).forEach((t=>{const n=document.createElement("li");n.textContent=this.content[t],e.appendChild(n)})),e}}({li1:"p: 123-456-7890",li2:"e: lepizz@notarealemail.com"})}}}}],footer:{col2:{span:new s("Created by T-McVee ","span"),i:new class{constructor(e){this.content=e}renderElement(){const e=document.createElement("i");this.content.classes.forEach((t=>e.classList.add(t)));const t=document.createElement("a");return t.setAttribute("href",this.content.url),t.setAttribute("target",this.content.target),t.appendChild(e),t}}({classes:["fab","fa-github","fa-lg"],url:"https://github.com/T-McVee",target:"blank"})},col3:{span:new s("Icons made by Freepik from www.flaticon.com","span")}}},r=e=>{const t=document.createElement("ul");return e.forEach((e=>{if("Home"!=e.title){let n=document.createElement("li");n.textContent=e.title,n.setAttribute("data-index",e.index),t.appendChild(n)}})),t},a=e=>{const t=Object.keys(e),n=document.createElement("div");return n.classList.add("col"),t.forEach((t=>{n.appendChild(e[t].renderElement())})),n},c=(e,t)=>{let n=Object.keys(e.pages[t].content);const i=document.createElement("div");return i.classList.add("module"),i.classList.add(e.pages[t].title.toLowerCase()),n.forEach((n=>{"footer"!=n&&i.appendChild(((e,t)=>{const n=Object.keys(e),i=document.createElement("div");return i.classList.add((e=>{let t=e,n=e.split(/[A-Z]/g),i=e.match(/[A-Z]/g);if(i){for(let e=0;e<i.length;e++)i[e]+=n[e+1],n[e+1]=i;t=n.join("-").toLowerCase()}return t})(t)),i.classList.add("row"),n.forEach((t=>{i.appendChild(a(e[t]))})),i})(e.pages[t].content[n],n))})),i},l={content:document.querySelector("#content")},d=e=>{console.log("poo"),l.content.childNodes[1].classList.add("slide-right"),setTimeout((()=>{l.content.childNodes[1].remove(),l.content.insertBefore(c(o,e.target.dataset.index),l.content.childNodes[1]),l.content.childNodes[1].classList.add("slide-left"),setTimeout((()=>l.content.childNodes[1].classList.remove("slide-left")),500),Array.from(document.querySelectorAll(".btn")).forEach((e=>e.addEventListener("click",d)))}),1e3)};(()=>{l.content.appendChild((e=>{const t=document.createElement("nav");return t.appendChild((()=>{const t=document.createElement("div");return t.classList.add("logo"),t.textContent="LePizz",t.setAttribute("data-index",e[0].index),t})()),t.appendChild(r(e)),t})(o.pages)),l.content.appendChild(c(o,0)),l.content.appendChild((e=>{const t=Object.keys(e.footer),n=document.createElement("footer"),i=document.createElement("div");return i.classList.add("col"),i.appendChild(r(e.pages)),n.appendChild(i),t.forEach((t=>{n.appendChild(a(e.footer[t]))})),n})(o));const e=Array.from(document.querySelectorAll("li"));e.unshift(document.querySelector(".logo")),e.forEach((e=>e.addEventListener("click",d))),Array.from(document.querySelectorAll(".btn")).forEach((e=>e.addEventListener("click",d)))})()})();
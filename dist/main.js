!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class d{constructor(e,t,n,d){this.title=e,this.desc=t,this.dueDate=n,this.priority=d}}var o=function(){const e=function(e){let t=document.getElementById("tasks-grid"),n=document.getElementById("tasks-add"),d=document.createElement("div"),o=document.createElement("img"),l=document.createElement("span"),c=document.createElement("span"),i=document.createElement("input");d.classList.add("tasks"),i.type="checkbox",i.class="task-check",i.classList.add("task-check"),c.classList.add("task-title"),l.classList.add("task-date"),o.classList.add("del-task"),o.src="https://img.icons8.com/material/24/000000/multiply--v1.png","high"==e.priority?d.classList.add("form-high"):"low"==e.priority&&d.classList.add("form-low"),d.appendChild(i),d.appendChild(c),d.appendChild(l),d.appendChild(o),c.innerHTML=e.title,l.innerHTML=e.dueDate,t.insertBefore(d,n)};return{makeTask:function(){let t="",n="",o="",l="";null!=document.getElementById("form-title").value&&(l=document.getElementById("form-title").value),null!=document.getElementById("form-desc").value&&(t=document.getElementById("form-desc").value),null!=document.getElementById("form-dueDate").value&&(n=document.getElementById("form-dueDate").value),document.getElementById("form-low").checked&&(o=document.getElementById("form-low").value),document.getElementById("form-high").checked&&(o=document.getElementById("form-high").value);let c=new d(l,t,n,o);return""==document.getElementById("form-title").value?(alert("Please enter a title."),0):(e(c),1)},completeTask:function(){let e=document.querySelectorAll(".task-check"),t=document.getElementById("tasks-grid"),n=document.getElementById("completed-grid"),d=document.getElementById("tasks-add");e.forEach(e=>{e.addEventListener("click",(function(){let o=e.parentNode;1==e.checked?(t.removeChild(o),n.appendChild(o)):(n.removeChild(o),t.insertBefore(o,d))}))})}}}();function l(){document.getElementById("todoForm").style.display="none"}function c(){const e=document.querySelectorAll(".projects-delete");e.forEach(e=>{e.addEventListener("mouseover",(function(){console.log(e.childNodes),e.style.backgroundColor="#FAF9F9",e.childNodes[0].style.display="inline",e.childNodes[1].style.display="inline"}))}),e.forEach(e=>{e.addEventListener("mouseout",(function(){e.style.backgroundColor="",e.childNodes[0].style.display="none",e.childNodes[1].style.display="none"}))})}const i=document.getElementById("done-btn"),r=document.getElementById("tasks-add"),s=document.getElementById("form-exit");!function(){const e=document.getElementById("projects-grid"),t=document.getElementById("projects-add");let n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("img"),l=document.createElement("img"),c=document.createElement("div");n.classList.add("projects"),d.classList.add("projects-delete"),o.src="https://img.icons8.com/ios-filled/30/000000/long-arrow-right.png",l.src="https://img.icons8.com/material/30/000000/multiply--v1.png",c.innerHTML="Default",e.insertBefore(n,t),n.appendChild(d),d.appendChild(o),d.appendChild(l),n.appendChild(c)}(),c(),function(){const e=document.getElementById("projects-grid"),t=document.getElementById("projects-add");t.addEventListener("click",()=>{let n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("img"),l=document.createElement("img"),i=prompt("What's the name of your project?","Default"),r=document.createElement("div");n.classList.add("projects"),d.classList.add("projects-delete"),o.src="https://img.icons8.com/ios-filled/30/000000/long-arrow-right.png",l.src="https://img.icons8.com/material/30/000000/multiply--v1.png",null!=i&&(r.innerHTML=i),e.insertBefore(n,t),n.appendChild(d),d.appendChild(o),d.appendChild(l),n.appendChild(r),c()})}(),o.completeTask(),r.addEventListener("click",(function(){document.getElementById("todoForm").style.display="block"})),s.addEventListener("click",(function(){l()})),i.addEventListener("click",(function(e){e.preventDefault(),1==o.makeTask()&&l(),o.completeTask()}))}]);
(()=>{"use strict";const e=document.querySelector(".Followers"),o=document.querySelector(".Following"),n=document.querySelector(".Repositories"),t=document.querySelector(".qidir"),r=t.value?t.value:"Rasuljonov02";function l(t){fetch(`https://api.github.com/users/${t}`).then((e=>e.json())).then((t=>{!function(t,r,l,c,i,u,s,a){const d=document.querySelector(".odmnirasm"),m=document.querySelectorAll(".nik"),h=document.querySelector(".nikid"),p=document.querySelector(".bio");document.querySelector(".location").innerText=`${i||"location null"}`,h.innerText=`@${l||"nik null"}`,console.log(t),p.innerText=c||"bio null",d.src=`${r||"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"}`,e.innerText=u?`${u} Followers`:"0 Followers",o.innerText=s?`${s} Following`:"0 Following",n.innerText=a?`${a} Repositories`:"0 Repositories",m.forEach((e=>{e.innerText=t||"null"}))}(t.name,t.avatar_url,t.login,t.bio,t.location,t.followers,t.following,t.public_repos)}))}l(r),t.addEventListener("keydown",(function(e){"Enter"===e.key&&l(t.value)}));const c=document.querySelector(".chiz"),i=document.querySelector(".qidir"),u=i.value?i.value:"Rasuljonov02";fetch(`https://api.github.com/users/${u}/repos`).then((e=>e.json())).then((e=>{!function(e){e&&e.length>0?e.forEach((e=>{!function(e){const o=document.createElement("p");o.innerText=`${e}`,o.className="repos",c.appendChild(o)}(e.name)})):console.log("No repositories found.")}(e)})).catch((e=>{console.error("Error fetching repositories:",e)}))})();
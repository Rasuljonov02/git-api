(()=>{"use strict";const e=document.querySelector(".qidir"),o=document.querySelector(".Followers"),n=document.querySelector(".Following"),t=document.querySelector(".Repositories");function l(e){fetch(`https://api.github.com/users/${e}`).then((e=>e.json())).then((e=>{!function(e,l,r,i,u,c,s,d){const y=document.querySelector(".odmnirasm"),m=document.querySelectorAll(".nik"),a=document.querySelector(".nikid"),q=document.querySelector(".bio");document.querySelector(".location").innerText=`${u||"null"}`,a.innerText=`@${r||"null"}`,console.log(e),q.innerText=i||"null",y.src=`${l||"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"}`,o.innerText=c?`${c} Followers`:"0 Followers",n.innerText=s?`${s} Following`:"0 Following",t.innerText=d?`${d} Repositories`:"0 Repositories",m.forEach((o=>{o.innerText=e||"null"}))}(e.name,e.avatar_url,e.login,e.bio,e.location,e.followers,e.followinguser,e.public_repos)}))}l(e.value),e.addEventListener("keydown",(function(o){"Enter"===o.key&&l(e.value)}))})();
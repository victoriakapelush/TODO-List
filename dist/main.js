(()=>{const t=[],e=document.getElementById("section"),n=document.getElementById("text");n.addEventListener("keyup",(function(s){"Enter"===s.key&&(function(){const t=document.createElement("div");e.appendChild(t),t.setAttribute("class","tasks-box");const s=document.createElement("div");t.appendChild(s),s.setAttribute("class","tasks");const o=document.createElement("button");o.setAttribute("class","btnDel"),t.appendChild(o),o.textContent="X",s.textContent=n.value}(),t.push(n.value),this.value=""),localStorage.setItem("task",JSON.stringify(t))})),function(){const t=JSON.parse(localStorage.getItem("task"));for(let n=0;n<t.length;n++){const s=document.createElement("div");e.appendChild(s),s.setAttribute("class","tasks-box");const o=document.createElement("div");s.appendChild(o),o.setAttribute("class","tasks");const a=document.createElement("button");a.setAttribute("class","btnDel"),s.appendChild(a),a.textContent="X",o.textContent=t[n],a.addEventListener("click",(function(){for(let n=0;n<t.length;n++){s.remove(),localStorage.removeItem("task");const t=[];t.push(e.textContent),localStorage.setItem("task",JSON.stringify(t))}}))}}()})();
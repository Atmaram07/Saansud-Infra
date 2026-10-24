document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".menu-toggle");
  const nav=document.querySelector(".nav");
  if(toggle&&nav){
    toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
    document.querySelectorAll(".nav-drop>a").forEach(link=>link.addEventListener("click",e=>{
      if(window.matchMedia("(max-width:760px)").matches){const parent=link.parentElement;if(!parent.classList.contains("expanded")){e.preventDefault();parent.classList.add("expanded");}}
    }));
  }
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  const form=document.querySelector("#lead-form");
  if(form) form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=(data.get("name")||"").trim();
    const phone=(data.get("phone")||"").trim();
    const status=form.querySelector(".form-status");
    if(!name||!phone){status.textContent="Please add your name and phone number.";return;}
    status.textContent="Thanks, "+name+". This demo form is working locally, but it is not connected to a business inbox yet. Connect a form backend or CRM before launch.";
    form.reset();
  });
});
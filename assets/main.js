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
    const email=(data.get("email")||"").trim();
    const service=(data.get("service")||"Project enquiry").trim();
    const location=(data.get("location")||"Bhubaneswar, Odisha").trim();
    const budget=(data.get("budget")||"Not provided").trim();
    const details=(data.get("details")||"Not provided").trim();
    const subject=encodeURIComponent("Project enquiry: "+service);
    const body=encodeURIComponent([
      "New project enquiry for Saansud Infra",
      "Name: "+name,
      "Phone: "+phone,
      "Email: "+(email||"Not provided"),
      "Service: "+service,
      "Location: "+location,
      "Budget: "+budget,
      "Project details: "+details
    ].join("\n"));
    status.textContent="Your email app should open with the enquiry details. Review the message and press Send to contact Saansud Infra. You can also call +91 92373 84023.";
    window.location.href="mailto:info@saansud.com?subject="+subject+"&body="+body;

  });
});

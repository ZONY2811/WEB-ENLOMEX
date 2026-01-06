const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
     nav.classList.remove("visible");
})

let userScrolling = false;

window.addEventListener("wheel", () => userScrolling = true);
window.addEventListener("touchmove", () => userScrolling =true);

  const section = document.getElementById("Nuestros-Servicios");
  const conocenosBox = document.querySelector("#Conocenos .box");
  const linkConocenos = document.querySelector('a[href="#Conocenos"');
  
  linkConocenos.addEventListener("click", (e) => {
    setTimeout(() =>{ 
     conocenosBox.classList.remove("show");
      void conocenosBox.offsetWidth;
       conocenosBox.classList.add("show");
    },300);
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (userScrolling) {
        if (entry.isIntersecting){
         entry.target.classList.remove("show");
          void entry.target.offsetWidth;
           entry.target.classList.add("show");
      } 
      else {
       entry.target.classList.remove("show");
      }
     }
    });
  }, 
{ 
  threshold: 0.01, 
  rootMargin: "0px 0px -10px 0px"
}); 

 if (section) observer.observe(section);
 if(conocenosBox) observer.observe(conocenosBox);

window.addEventListener("load", () => {
  const section = document.getElementById("Nuestros-Servicios");
  const conocenosBox = document.querySelector("#Conocenos .box");
   
  section.classList.add("show");
  conocenosBox.classList.add("show");
});

  window.addEventListener("scroll", () => {
  setTimeout(() => userScrolling = false, 100); 
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

const boxes = document.querySelectorAll("#hero .box");
let current = 0;

function showSlide(index) {
  boxes.forEach((box, i) => {
    box.classList.remove("active");
    if (i === index) box.classList.add("active");
  });
}

document.querySelector(".arrow.left").addEventListener("click", () => {
  current = (current - 1 + boxes.length) % boxes.length;
  showSlide(current);
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  current = (current + 1) % boxes.length;
  showSlide(current);
});

showSlide(current);


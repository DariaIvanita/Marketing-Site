// smooth reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      r.classList.add("active");
    }
  });
});

// cursor glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
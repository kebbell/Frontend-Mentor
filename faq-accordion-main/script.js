const btns = document.querySelectorAll(".accordion-header");
const contents = document.querySelectorAll(".accordion-body");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        btns.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if(!e.target.matches(".accordion-header")){
    btns.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((acc) => acc.classList.remove("active"));
  }
};
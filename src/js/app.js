import "../scss/app.scss";

var article = "<article class=\"message\">hi</article><article class=\"message\">my name is Ivan</article><article class=\"message\">good to know you tho</article><article class=\"message\">whassup</article><article class=\"message\">bye.</article>";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  window.addEventListener("click",() =>{
    document.body.innerHTML = article;
  })
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

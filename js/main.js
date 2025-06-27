/*HTML elemanlarına eriş*/
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

/*Menu butonuna tiklanınca aç kapa yapan fonksiyon*/ 
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

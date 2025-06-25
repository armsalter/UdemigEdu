/*HTML elemanlarına eriş*/
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

/*Menu butonuna tiklanınca aç kapa yapan fonksiyon*/ 
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
/*
let A=225;
let B=25;
document.write("A+B=",225+25,"<br/>");
document.write("A-B=",225-25,"<br/>");
document.write("A*B=",225*25,"<br/>");
document.write("A%B=",225%25,"<br/>");


function ortalamaHesapla(x,y,z,t){
let x=10;
let y=20;
let z=30;
let t=40
document.write("Bu dört sayının ortalaması=",(x+y+z+t)/4, "<br/>");
}


ortalamaHesapla(x,y,z,t);


prompt("lütfen bir sayı giriniz",x);
prompt("lütfen bir sayı daha giriiiniz",y);
funcsion toplam() {
    toplam = x+y;
document.write("toplamı",toplam)
}
toplam();

*/
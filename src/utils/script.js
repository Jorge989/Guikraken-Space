// //select class
// const menu = document.querySelector(".checkbtn");
// const close = document.querySelector(".checkbtn2 ");
// console.log(menu);
// function myFunction() {
//   var element = document.getElementById("checkbtn");
//   element.classList.add("mystyle");
// }
// menu.addEventListener(
//   "click",
//   myFunction(() => {
//     console.log("clicou");
//     console.log("aqui", close);

//     console.log("aqui2", close);
//   })
// );

// close.addEventListener("click", function () {
//   console.log("clicou");
// });
// console.log(menu);
const btnMobile = document.getElementById("mobile");
const btnClose = document.getElementById("close");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
}
function myFunction() {
  var myobj = document.getElementById("mobile");
  const close = document.getElementById("close");
  close.classList.toggle("open");
  myobj.classList.toggle("close");
}
function closeMenu() {
  var element = document.getElementById("nav");
  element.classList.remove("active");
  const close = document.getElementById("close");
  close.classList.remove("open");
  var myobj = document.getElementById("mobile");
  myobj.classList.remove("close");
}
btnMobile.addEventListener("click", () => {
  myFunction();
  toggleMenu();
});
// btnMobile.addEventListener("touchstart", () => {
//   toggleMenu(), myFunction();
// });
btnClose.addEventListener("click", () => {
  closeMenu();
});

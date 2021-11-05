//select class
const menu = document.querySelector(".checkbtn");
const close = document.querySelector(".checkbtn2 ");
console.log(menu);
function myFunction() {
  var element = document.getElementById("checkbtn");
  element.classList.add("mystyle");
}
menu.addEventListener(
  "click",
  myFunction(() => {
    console.log("clicou");
    console.log("aqui", close);

    console.log("aqui2", close);
  })
);

close.addEventListener("click", function () {
  console.log("clicou");
});
console.log(menu);

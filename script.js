let btn = document.getElementById("btn1");

function myFunction() {
  let newWin = window.open("about:blank", "hello", "width=200, height=200");
  newWin.document.write("Hello World!");
}

btn.addEventListener("click", myFunction);
let myH1 = document.getElementById("myH1");
myH1.innerText = "Ceva scris";
myH1.classList.add("test")
myH1.style.backgroundColor = "red";

let myh2 = document.getElementsByClassName("clasaMea")[0];
myh2.innerText = "wow";

// let div = document.getElementById("test");
// div.innerHTML = "<p>am schimbat</p>";

let firstH1 = document.querySelector("#test .clasaMea");
firstH1.innerText = "query selector";
firstH1.addEventListener("mouseover", () => {
  firstH1.style.backgroundColor = "blue";
});

firstH1.addEventListener("mouseout", () => {
  // Change the button's background color back to its original color
  firstH1.style.backgroundColor = "";
});

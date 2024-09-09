function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleClick() {
  let title = document.getElementById("myTitle");
  if (title.innerText === "Title") {
    title.innerText = "Schimbat";
  } else {
    title.innerText = "Title";
  }
  title.style.color = getRandomColor();
}

function append() {
  let div = document.getElementById("main");
  let p = document.createElement("p");
  p.innerText = "Paragraf nou";
  div.appendChild(p);
}

function submit() {
  let input = document.querySelector("#test");
  let p = document.createElement("p");
  p.innerText = input.value;

  let output = document.getElementById("output");
  output.appendChild(p);
}

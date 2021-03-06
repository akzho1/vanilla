// DOM

const heading = document.getElementById("hello");
// const heading2 = document.getElementsByClassName("h2-class")[0]; // старый метод
// const heading2 = document.getElementsByTagName("h2") [0]; // старый метод
// const heading2 = document.querySelector(".h2-class")
// const heading2 = document.querySelector("#sub-hello") // Возвращает всегда один элемент
const heading2 = document.querySelectorAll("h2");
// console.dir(heading2);
// const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll("h2");
// console.log(h2List);
const heading3 = h2List[h2List.length - 1];
console.log(heading3);

setTimeout(()=>{
  addStylesTo(heading, "JavaScript")
 ;}, 1500)

 setTimeout(()=>{
  addStylesTo(heading2, "практикуйся", "blue" )
 ;}, 2500)

 setTimeout(()=>{
  addStylesTo(heading3, "и все получиться", "yellow", "2rem")
 ;}, 3000)

function addStylesTo(node, text, color ="red", fontSize) {
  heading.textContent = text;
  heading.style.color="red";
  heading.style.textAlign = "center";
  heading.style.backgroundColor = "black";
  heading.style.padding = "2rem";
  // falsy: "", undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if (heading.style.color === "red") {
    heading.style.color = "#000";
    heading.style.backgroundColor = "#fff";
  }
  else {
    heading.style.color = "red";
    heading.style.backgroundColor = "#000";
  }
}

heading2.addEventListener("dblclick", ()=>{
  if (heading2.style.color === "yellow") {
    heading2.style.color = "#000";
    heading2.style.backgroundColor = "#fff";
  }
  else {
    heading2.style.color = "yellow";
    heading2.style.backgroundColor = "#000";
  }
})
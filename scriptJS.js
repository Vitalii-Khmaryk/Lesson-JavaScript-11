let fon = prompt("write background color");
let b = document.getElementById("body");
b.style.backgroundColor = fon;

let fontSt = prompt("write font-style (normal,italic,oblique)");
let bd = document.getElementById("body");
bd.style.fontStyle = fontSt;

let ali = prompt("enter an alignment value for the header(left,right,center)");
let a = document.body.firstElementChild;
a.style.textAlign = ali;

let p = prompt("write backgrond p");
let bp = document.body.firstElementChild.nextElementSibling;
bp.style.backgroundColor = p;

let ct = prompt("write color p");
let textColors = document.body.firstElementChild.nextElementSibling;
textColors.style.color = ct;

let ll = prompt("write color link");
let link = document.getElementsByClassName("links");
for (let i = 0; i < link.length; i++) {
  link[i].style.color = ll;
}

let writeColor = prompt("write text color div");
let dd = document.getElementById("div");
dd.style.color = writeColor;

let writeSize = prompt("write text size div");
let sizeT = document.getElementById("div");
sizeT.style.fontSize = writeSize;

let eWeight = prompt("write text weight div");
let weightT = document.getElementById("div");
weightT.style.fontWeight = eWeight;

let mark = prompt("write text weight div");
let ulMark = document.getElementById("ul");
ulMark.style.listStyleType = mark;

let modLink = prompt("write link site");
let lls = document.getElementById("linkq");
linkq.innerHTML = modLink;
linkq.href = modLink;

let modLink2 = prompt("write link site 2");
let lls2 = document.getElementById("linkw");
linkw.innerHTML = modLink2;
linkw.href = modLink2;

let modLink3 = prompt("write link site 3");
let lls3 = document.getElementById("linke");
linke.innerHTML = modLink3;
linke.href = modLink3;

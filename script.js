let popover = 0;
let popup = 0;
document.getElementById("share-button").addEventListener("mouseover", mouseOver);
document.getElementById("share-button").addEventListener("mouseout", mouseOut);
document.getElementById("pop").addEventListener("mouseover", popmouseOver);
document.getElementById("pop").addEventListener("mouseout", popmouseOut);

function mouseOver() {
  popover = 1;
  popup = 1;
  document.getElementById('pop').style.visibility="visible";
}

function hidemouseOut() {
  popup = 0;
  document.getElementById('pop').style.visibility="hidden";
  if (popover === 1) {
  popup = 1;
  document.getElementById('pop').style.visibility="visible";
}
}
function mouseOut() {
  popover = 0;
  if (popup === 1) {
  setTimeout("hidemouseOut()",5000);
}
}
while (popover === 1) {
  popup = 1;
  document.getElementById('pop').style.visibility="visible";
}
function popmouseOver() {
  popover = 1;
  popup = 1;
  document.getElementById('pop').style.visibility="visible";
}
function popmouseOut() {
  setTimeout("hidepopOut()",5000);
}
function hidepopOut() {
  document.getElementById('pop').style.visibility="hidden";
  popup = 0;
  popover = 0;
}
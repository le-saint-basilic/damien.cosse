const btn = document.querySelector(".nuit");
let nuit = 0

function changeBackground() {
  if (nuit == 0){
  document.body.style.backgroundColor = '#2E2E2E';
  document.getElementsByClassName('txt')[0].style.color= '#f0f0f0';
  document.getElementsByClassName('txt')[0].style.background= '#3D3D3D';
  document.getElementsByClassName('txt')[1].style.color= '#f0f0f0';
  document.getElementsByClassName('txt')[1].style.background= '#3D3D3D';
  document.getElementsByClassName('fond')[0].style.background= '#252525';
  nuit = 1
  } else {
  document.body.style.backgroundColor = '#ffffff';
  document.getElementsByClassName("txt")[0].style.color= '#000000';
  document.getElementsByClassName("txt")[0].style.background= '#d8d8d8';
  document.getElementsByClassName("txt")[1].style.color= '#000000';
  document.getElementsByClassName("txt")[1].style.background= '#d8d8d8';
  document.getElementsByClassName('fond')[0].style.background= '#C3D3DE';
  nuit = 0;

  }
}
function changeBackgroundind() {
  if (nuit == 0){
  document.body.style.backgroundColor = '#2E2E2E';
  document.getElementsByClassName('droite')[0].style.color= '#f0f0f0';
  document.getElementsByClassName('droite')[0].style.background= '#252525';
  nuit = 1
  } else {
  document.body.style.backgroundColor = '#ffffff';
  document.getElementsByClassName('droite')[0].style.color= '#000000';
  document.getElementsByClassName('droite')[0].style.background= '#f0f0f0';
  nuit = 0;

  }
}
if (btn.id == "page"){
btn.addEventListener("click", changeBackground);
} else {
btn.addEventListener("click", changeBackgroundind);
}
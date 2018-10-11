  let backgroundColors = ["red", "blue", "green", "yellow"];

(function() {
  
  if (localStorage.getItem("background") != null) {
 document.body.style.background = localStorage.getItem("background"); 
} else {
  document.body.style.background = "white";
}
  
 

  let body = '';
  for (let i = 0; i < backgroundColors.length; i++) {
    body += `<div style="background: ${backgroundColors[i]}"></div> <br>`;
  }
  document.body.innerHTML = body;
  
})();

let divs = document.getElementsByTagName("div");

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
   localStorage.removeItem("background");   
    localStorage.setItem("background", backgroundColors[i]);

  document.body.style.background = localStorage.getItem("background");              
  }, false);
  }



 
  

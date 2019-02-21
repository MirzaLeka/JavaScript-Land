
  fetch('/images')
  .then(res => res.json())
  .then(arrayOfImg => {

    let images = ''; 
    arrayOfImg.forEach(img => {
      images += `<img src="${img.url}" class="img-responsive" style="height: 300px; width: 400px; margin: 40px;"/>`
    });

    document.querySelector('#gallery').innerHTML = images;

  });


function upload() {
  
    const input = document.querySelector('#inp');
    
    if (!input.value) {
      return;
    }
  
    const FR = new FileReader();
    
    FR.readAsDataURL(input.files[0]);
    
    FR.onload = (FREvent) => {
      const img = document.querySelector('#myImg');
      img.src = FREvent.target.result;
      img.style.display = 'block';
    }
    
  }

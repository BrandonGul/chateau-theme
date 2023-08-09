const imageDisplay = document.getElementById('image-display');

document.querySelectorAll('.small-product-image').forEach((item) => {
  item.addEventListener('click', function() {
    imageDisplay.style.display = 'flex';
    window.scroll({
      top: document.getElementById('large_' + this.id).getBoundingClientRect().top, 
      behavior: 'instant'
    });
  });
});

document.getElementById('exit_button').addEventListener('click', function() {
  imageDisplay.style.display = 'none';
});

document.body.addEventListener('keydown', function(event) {
  if (event.key == "Escape" && imageDisplay.style.display == "flex") {
    imageDisplay.style.display = 'none';
  }
});

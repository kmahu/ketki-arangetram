const images = ['image/Aigiri_Nandini.jpg', 'image/Jatiswaram.jpg', 'image/Mallari.jpg'];
let current = 0;
let intervalId = null;

const imgElement = document.getElementById('slideshow-image');

function showImage(index) {
  imgElement.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function playSlideshow() {
  if (!intervalId) {
    intervalId = setInterval(nextImage, 2000); // change image every 2 seconds
  }
}

function pauseSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
}

// Start slideshow automatically
playSlideshow();
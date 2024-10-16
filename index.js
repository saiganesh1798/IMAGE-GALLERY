
const images = document.querySelectorAll('.image-grid img');
images.forEach(image => {
  image.addEventListener('click', () => {
    image.style.width = '500px'; // Adjust the width as needed
    image.style.height = 'auto';
  });
});
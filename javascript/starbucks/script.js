function imgSlider(imagePath) {
  const starbucksImage = document.querySelector('.starbucks');

   starbucksImage.style.opacity = 0;

  setTimeout(() => {
    starbucksImage.src = imagePath;
    starbucksImage.style.opacity = 1;
  }, 200);
}




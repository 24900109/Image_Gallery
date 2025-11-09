function changeImage(element) {
  const mainImage = document.getElementById('displayed-image');
  mainImage.src = element.src;
  mainImage.alt = element.alt;
}
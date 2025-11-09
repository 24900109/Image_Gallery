# Ex.08 Design of Interactive Image Gallery

## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM
gallery.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Photo Gallery</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Interactive Photo Gallery</h1>
  <div class="gallery">
    <div class="main-image">
      <img id="displayed-image" src="lion.jpg" alt="Main Display" />
    </div>
    <div class="animals">
      <img src="lion.png" onclick="changeImage(this)" alt="lion.png" />
      <img src="tiger.png" onclick="changeImage(this)" alt="tiger.png" />
      <img src="cat.png" onclick="changeImage(this)" alt="cat.png" />
      <img src="dog.png" onclick="changeImage(this)" alt="dog.png" />
      <img src="elephant.png" onclick="changeImage(this)" alt="elephant.png" />
    </div>
  </div>
  <script src="index.js"></script>
</body>
</html>
```
index.js
```
function changeImage(element) {
  const mainImage = document.getElementById('displayed-image');
  mainImage.src = element.src;
  mainImage.alt = element.alt;
}
```
style.css
```
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #fce89d;
}

.gallery {
  max-width: 800px;
  margin: auto;
}

.main-image img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border: 2px solid #333;
}

.animals {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.animals img {
  width: 100px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s;
  
}

.animals img:hover {
  border: 20px solid #090904;
}
```
## OUTPUT
![alt text](<Screenshot 2025-11-09 111700.png>)
![alt text](<Screenshot 2025-11-09 111713.png>)
![alt text](<Screenshot 2025-11-09 111734.png>)

## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.

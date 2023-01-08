let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("menuItem");
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}



// Drink Slides
let drinkIndex = 1;
showDrinks(drinkIndex);

function plusDrinks(n) {
  showDrinks(drinkIndex += n);
}

function currentDrink(n) {
  showDrinks(drinkIndex = n);
}

function showDrinks(n) {
  let i;
  let drinks = document.getElementsByClassName("drinkItem");
  console.log(drinks);
  if (n > drinks.length) {drinkIndex = 1}    
  if (n < 1) {drinkIndex = drinks.length}
  for (i = 0; i < drinks.length; i++) {
    drinks[i].style.display = "none";  
  }
  drinks[drinkIndex-1].style.display = "block";  
}

// Side Slides
let sideIndex = 1;
showSides(drinkIndex);

function plusSides(n) {
  showSides(sideIndex += n);
}

function currentSide(n) {
  showSides(sideIndex = n);
}

function showSides(n) {
  let i;
  let sides = document.getElementsByClassName("sideItem");
  console.log(sides);
  if (n > sides.length) {sideIndex = 1}    
  if (n < 1) {sideIndex = sides.length}
  for (i = 0; i < sides.length; i++) {
    sides[i].style.display = "none";  
  }
  sides[sideIndex-1].style.display = "block";  
}
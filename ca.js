const cars = [
  {
    name: "Sports Sedan",
    model: "Model 3",
    rating: 4,
    img: { src: "images/model3.jpg", alt: "Tesla Model 3 Sports Sedan" }
  },
  {
    name: "SUV",
    model: "Model X",
    rating: 5,
    img: { src: "images/modelx.jpg", alt: "Tesla Model X SUV" }
  },
  {
    name: "Truck",
    model: "Cybertruck",
    rating: 2,
    img: { src: "images/cybertruck.jpg", alt: "Tesla Cybertruck" }
  },
  {
    name: "Roadster",
    model: "Roadster",
    rating: 3,
    img: { src: "images/roadster.jpg", alt: "Tesla Roadster" }
  },
  {
    name: "Luxury Sedan",
    model: "Model S",
    rating: 5,
    img: { src: "images/models.jpg", alt: "Tesla Model S Luxury Sedan" }
  }
];

let currentIndex = 2;

function updateRating(newRating) {
  cars[currentIndex].rating = newRating; 
  renderStars(); 
}

function renderStars() {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => star.style.color = "rgba(255, 255, 255, 0.333)");

  for (let i = 0; i < cars[currentIndex].rating; i++) {
    stars[i].style.color = "orange";
  }
}

function updateCarousel() {
  const carouselImage = document.querySelector('.carousel img');
  const carName = document.querySelector('.carousel-content h2');
  const carDetails = document.querySelector('.carousel-content p');

  const currentCar = cars[currentIndex];
  carouselImage.src = currentCar.img.src;
  carouselImage.alt = currentCar.img.alt;
  carName.textContent = currentCar.name;
  carDetails.textContent = currentCar.model;

  renderStars(); 
}

function showNextCar() {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCarousel();
}

function showPreviousCar() {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();

  // star clicks
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.addEventListener('click', () => updateRating(index + 1));
  });

  // buttons
  document.querySelector('.carousel-next').addEventListener('click', showNextCar);
  document.querySelector('.carousel-prev').addEventListener('click', showPreviousCar);
});


const images = ["shoes/download.jpeg", "shoes/Nike Dunk Pro Low - Copy.png"];
let currentImageIndex = 0;

function changeBackground() {
  document.querySelector(
    ".upperdiv"
  ).style.backgroundImage = `url("${images[currentImageIndex]}")`;
                                                                                          // backgroundchanging
  // Increment the index or reset to 0 if at the end of the array
  currentImageIndex = (currentImageIndex + 1) % images.length;

  setTimeout(changeBackground, 5000); // Change image every 5 seconds (adjust as needed)
}

// Run the background image slideshow when the page loads
document.addEventListener("DOMContentLoaded", changeBackground);





function addToCart(product, price) {
  let storedCartData = localStorage.getItem("cartData");
  let cartData = storedCartData ? JSON.parse(storedCartData) : [];

  // Check if the product is already in the cart
  let existingProduct = cartData.find(item => item.name === product);

  if (existingProduct) {
    // If the product is already in the cart, increment the quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cartData.push({ name: product, price: price, quantity: 1 });
  }

  localStorage.setItem("cartData", JSON.stringify(cartData));
}
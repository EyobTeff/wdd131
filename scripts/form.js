document.getElementById("review-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your review! Your feedback has been submitted.");
    this.reset();
  });
  // Sample product array
const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" }
];

// Populate product dropdown
const productDropdown = document.getElementById('product-name');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = product.name;
  productDropdown.appendChild(option);
});

// Populate product dropdown with an array of products
const products = ['Product A', 'Product B', 'Product C', 'Product D'];
const productSelect = document.getElementById('product-name');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product;
  option.textContent = product;
  productSelect.appendChild(option);
});

// Display last modified date
const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

// Handle form submission and save to localStorage
document.getElementById('review-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const reviewCount = parseInt(localStorage.getItem('reviewCount') || '0') + 1;
  localStorage.setItem('reviewCount', reviewCount);
  window.location.href = 'confirmation.html';
});

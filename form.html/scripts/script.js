document.addEventListener('DOMContentLoaded', () => {
  // Populate the last modified date in the footer
  document.getElementById('last-modified').textContent = document.lastModified;

  // Populate the product select field
  const productArray = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  const productSelect = document.getElementById('product');
  productArray.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Handle review count using localStorage
  if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('review-count').textContent = reviewCount;
  }
});

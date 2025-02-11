document.addEventListener('DOMContentLoaded', function() {
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
  ];

  const productSelect = document.getElementById('product-name');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  const form = document.getElementById('review-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);

    form.submit();
  });
});

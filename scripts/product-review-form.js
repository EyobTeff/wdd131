document.getElementById("review-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your review! Your feedback has been submitted.");
    this.reset();
  });
  
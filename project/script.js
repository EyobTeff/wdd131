// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Array of season objects
const seasons = [
  { name: "Fall", image: "images/Fall.jpg", description: "Enjoy the crisp air and colorful leaves." },
  { name: "Winter", image: "images/winter.webp", description: "Experience snow-filled adventures." },
  { name: "Spring", image: "images/spring.jpg", description: "See the beautiful flowers bloom." },
  { name: "Summer", image: "images/summer.jpg", description: "Enjoy warm days and outdoor fun." }
];

// Dynamically generate the season sections using template literals
const seasonContainer = document.getElementById("seasons");
seasonContainer.innerHTML = seasons.map(season => `
  <div class="season" onclick="saveForLater('${season.name}')">
    <img src="${season.image}" alt="${season.name} in Rexburg" loading="lazy">
    <h3>${season.name}</h3>
    <p>${season.description}</p>
  </div>
`).join("");

// Function to save the selected season in localStorage
function saveForLater(season) {
  let savedSeasons = JSON.parse(localStorage.getItem("savedSeasons")) || [];
  
  // Prevent duplicate entries
  if (!savedSeasons.includes(season)) {
    savedSeasons.push(season);
    localStorage.setItem("savedSeasons", JSON.stringify(savedSeasons));
    alert(`${season} has been added to your 'Save for Later' list!`);
  } else {
    alert(`${season} is already in your list!`);
  }
}

// Retrieve saved selections and display them
function loadSavedSeasons() {
  const savedSeasons = JSON.parse(localStorage.getItem("savedSeasons")) || [];
  if (savedSeasons.length > 0) {
    document.getElementById("savedItems").innerHTML = 
      `<h3>Saved Seasons</h3><ul>` + 
      savedSeasons.map(season => `<li>${season}</li>`).join("") + 
      `</ul>`;
  }
}

// Call function on page load
loadSavedSeasons();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh

    // Show the confirmation message
    confirmationMessage.style.display = "block"; // Make it visible
    console.log("Confirmation message shown.");

    // Clear the form
    form.reset();

    // Hide the confirmation message after 5 seconds
    setTimeout(() => {
      console.log("Hiding confirmation message...");
      confirmationMessage.style.display = "none"; // Hide it
    }, 5000); // 5000 milliseconds = 5 seconds
  });
});
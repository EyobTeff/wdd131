document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.getElementById("temple-container");
    const navLinks = document.querySelectorAll(".nav-menu a");
  
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      }
    ];
  
    function displayTemples(filter = "all") {
      templeContainer.innerHTML = "";
  
      const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        switch (filter) {
          case "old":
            return year < 1900;
          case "new":
            return year > 2000;
          case "large":
            return temple.area > 90000;
          case "small":
            return temple.area < 10000;
          default:
            return true;
        }
      });
  
      if (filteredTemples.length === 0) {
        templeContainer.innerHTML = `<p>No temples found for the selected filter.</p>`;
        return;
      }
  
      filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");
        templeCard.innerHTML = `
          <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        templeContainer.appendChild(templeCard);
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
  
        // Update ARIA for accessibility
        navLinks.forEach(nav => nav.setAttribute("aria-current", "false"));
        e.target.setAttribute("aria-current", "true");
  
        displayTemples(filter);
      });
    });
  
    // Initial display of all temples
    displayTemples();
  });
  
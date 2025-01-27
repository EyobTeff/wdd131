// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  }
  
  function updateWeather() {
    const temperature = 10; // Static value for temperature
    const windSpeed = 5; // Static value for wind speed
  
    const windChillElement = document.getElementById("windChill");
    if (temperature <= 10 && windSpeed > 4.8) {
      windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
    } else {
      windChillElement.textContent = "N/A";
    }
  }
  
  // Update Footer Date
  function updateFooterDate() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
  }
  
  // Initialize Page
  updateWeather();
  updateFooterDate();
  
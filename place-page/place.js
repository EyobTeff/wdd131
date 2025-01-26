// Footer Date Functionality
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
  
    document.querySelector('#footer-year').textContent = currentYear;
    document.querySelector('#last-modified').textContent = `Last Modified: ${lastModified}`;
  
    // Static Weather Data
    const temperature = 10; // in Celsius
    const windSpeed = 5; // in km/h
  
    // Function to calculate wind chill
    function calculateWindChill(temp, speed) {
      return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
      ).toFixed(1);
    }
  
    const windChillElement = document.querySelector('#wind-chill');
    if (temperature <= 10 && windSpeed > 4.8) {
      windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
      windChillElement.textContent = 'N/A';
    }
  });
  
// Footer year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Static weather values for Japan example
const temp = 48; // °F
const windSpeed = 6; // mph

// 1-line function to calculate wind chill
function calculateWindChill(t, s) {
  return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}

// Display wind chill only when conditions are met
if (temp <= 50 && windSpeed > 3) {
  document.querySelector("#windchill").textContent = `${calculateWindChill(temp, windSpeed).toFixed(1)} °F`;
} else {
  document.querySelector("#windchill").textContent = "N/A";
}

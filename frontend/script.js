document.addEventListener("DOMContentLoaded", function () {

    const heading = document.querySelector(".dashboard h2");

    heading.textContent = "Live Satellite Dashboard";

    const satellite = {
    name: "SAT-01",
    mission: "Earth Observation",
    orbit: "LEO",
    altitude: 550,
    battery: 87,
    temperature: 24.5,
    signal: "GOOD",
    status: "ACTIVE"
    };

    document.getElementById("satellite-name").textContent = "🛰️ " + satellite.name;

    document.getElementById("satellite-mission").textContent =
    "Mission: " + satellite.mission;

    document.getElementById("satellite-orbit").textContent =
    "Orbit: " + satellite.orbit;

    document.getElementById("satellite-altitude").textContent =
    "Altitude: " + satellite.altitude + " km";

    document.getElementById("satellite-battery").textContent =
    satellite.battery + "%";

    document.getElementById("satellite-temperature").textContent =
    satellite.temperature + "°C";

    document.getElementById("satellite-signal").textContent =
    satellite.signal;

    document.getElementById("satellite-status").textContent =
    satellite.status;



});
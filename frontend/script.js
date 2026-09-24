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

    const satellite2 = {
      name: "SAT-02",
      mission: "Weather Monitoring",
      orbit: "LEO",
      altitude: 600,
      battery: 92,
      temperature: 22.8,
      signal: "GOOD",
      status: "ACTIVE"
   };

   const selector = document.getElementById("satellite-select");

selector.addEventListener("change", function () {

    if (selector.value === "SAT-02") {
        document.getElementById("satellite-name").textContent =
            "🛰️ " + satellite2.name;

        document.getElementById("satellite-mission").textContent =
            "Mission: " + satellite2.mission;

        document.getElementById("satellite-orbit").textContent =
            "Orbit: " + satellite2.orbit;

        document.getElementById("satellite-altitude").textContent =
            "Altitude: " + satellite2.altitude + " km";

        document.getElementById("satellite-battery").textContent =
            satellite2.battery + "%";

        document.getElementById("satellite-temperature").textContent =
            satellite2.temperature + "°C";

        document.getElementById("satellite-signal").textContent =
            satellite2.signal;

        document.getElementById("satellite-status").textContent =
            satellite2.status;
    }
     else {
        document.getElementById("satellite-name").textContent =
        "🛰️ " + satellite.name;

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
   }

});




});
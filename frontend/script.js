const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    // Check if input is empty
    if (!city) {
        weatherResult.innerHTML = "<p>Please enter a city.</p>";
        return;
    }

    // Show loading state
    weatherResult.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(
            `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
        );

        const data = await response.json();

        // Handle backend errors
        if (!response.ok) {
            weatherResult.innerHTML = `<p>${data.message}</p>`;
            return;
        }

        // Display weather
        weatherResult.innerHTML = `
            <h2>${data.city}</h2>
            <p>Temperature: ${data.temperature} °C</p>
            <p>Feels Like: ${data.feelsLike} °C</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Weather: ${data.description}</p>
            <p>Wind Speed: ${data.windSpeed} m/s</p>
        `;

    } catch (error) {
        weatherResult.innerHTML =
            "<p>Unable to connect to the weather server.</p>";

        console.error(error);
    }
});
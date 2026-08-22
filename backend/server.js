const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.get("/weather", async (req, res) => {
    const city = req.query.city;

if (!city) {
    return res.status(400).json({
        message: "City is required"
    });
}

    try {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    appid: process.env.WEATHER_API_KEY,
                    units: "metric"
                }
            }
        );
        const weatherData = {
    city: response.data.name,
    temperature: response.data.main.temp,
    feelsLike: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    windSpeed: response.data.wind.speed
};
        res.json(weatherData);

    } catch (error) {
        console.log(error.response?.data || error.message);

        res.status(500).json({
            message: "Unable to fetch weather data"
        });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
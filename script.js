const API_KEY = '';

const form = document.getElementById("form");
const searchBtn = document.getElementById("search-button");
const card = document.querySelector(".card");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const city = document.getElementById("input").value.toLowerCase();
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok) {
            throw new Error("Please enter valid city name");
        }

        const data = await response.json();
        displayData(data);

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
});

function displayData(data) {
    const weatherHtml = `
        <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class="temp">${Math.round(data.main.temp)}°C</div>
            <div class="description">${data.weather[0].description}</div>
            <div class="details">
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        </div>
    `;
    
    card.innerHTML = weatherHtml;
}

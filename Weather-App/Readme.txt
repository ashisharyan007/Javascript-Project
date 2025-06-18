#WEATHER APP 🌦️

## Description
    This is a simple and responsive Weather App built using HTML, CSS, and JavaScript. 
    It fetches real-time weather data from the OpenWeatherMap API and displays 
    the temperature, humidity, wind speed, and weather icon based on the 
    user's input (city name).

## Features

    - Get live weather details by city name
    - Displays temperature, humidity, and wind speed
    - Dynamic weather icons based on condition (Rain, Clear, Clouds, etc.)
    - Responsive design: works on mobile, tablet, and desktop
    - Displays error message for invalid city names


## How to Use

    1. Create a free account at: https://openweathermap.org/

    2. After signing up, generate your API key from the OpenWeatherMap dashboard.

    3. Go to the file `app.js`.

    4. Replace the placeholders with your actual API details:

        ------------------------------------
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const apiKey = "YOUR_API_KEY_HERE";
        ------------------------------------

    5. Save the file.

    6. Open `index.html` in your browser.

    7. Type any city name in the input box and click the search button.

    8. The app will fetch and display live weather info.


## Project structure

    - index.html      → Main structure of the app
    - style.css       → Styling and responsive design
    - app.js          → JavaScript logic for fetching API
    - /images         → Contains icons (search, weather icons)


## Technologies Used

    - HTML
    - CSS
    - JavaScript
    - OpenWeatherMap API

## Author

Ashish Aryan  



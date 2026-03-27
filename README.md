# 🌦️ Weather App
A modern weather application built with **vanilla JavaScript**, featuring a clean architecture and interactive UI.

## 🌐 Live Demo
[Live Demo](https://lvog.github.io/weather-app)

## 📌 Features
- 🔍 Search weather by city name
- ⚡ Autocomplete suggestions for faster input
- 🌡️  Current weather data (temperature, feels like, humidity, pressure, wind)
- 🕒 Local time based on city timezone
- 🗺️ Interactive map with location marker (Leaflet)
- ⏳  Loading state
- ❌ Error handling with UI feedback
- 🎨 Responsive and clean UI

## 🧠 JavaScript Architecture
The project follows a modular architecture with separation of concerns:

```text
src/js/
├── data/
│   ├── cities.js          # List of cities for autocomplete
│   ├── dateConstants.js   # Days and months constants
│   └── weatherIcons.js    # Map weather codes to icons
│
├── mappers/
│   └── mapWeatherData.js  # Transform API response into UI-friendly data
│
├── modules/
│   ├── AutocompleteModule.js # Handle autocomplete logic and keyboard navigation
│   ├── MapModule.js          # Manage map updates and coordinates
│   └── SearchModule.js       # Main app logic (search, API call, UI update)
│
├── services/
│   └── weatherService.js  # Fetch weather data from API
│
├── ui/
│   ├── AutocompleteUI.js  # Render autocomplete dropdown
│   ├── LayoutUI.js        # Manage loading, error and content states
│   ├── MapUI.js           # Initialize and update map (Leaflet)
│   └── WeatherUI.js       # Render weather data
│
├── utils/
│   ├── getCityTime.js     # Convert timezone to local time
│   └── getData.js         # Fetch helper (API requests)
│
├── config.js              # App configuration (API, constants)
└── app.js                 # Entry point (initialize modules)
```

## 🛠️ Technologies
- Webpack
- JavaScript (ES6+)
- HTML5
- SCSS
- OpenWeather API
- Leaflet


## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/lvog/weather-app.git
```

### 2. Navigate to the project folder
```bash
cd weather-app
```

### 3. Install dependencies

⚠️ Before installing dependencies, please review the [webpack-markup-starter](https://github.com/lvog/webpack-markup-starter) that is used in this project.

```bash
npm install
```

### 4. Create a `.env` file in the root directory

Add your API key:
```bash
API_KEY=your_api_key_here
```

You can get an API key by registering at [OpenWeather](https://openweathermap.org)

### 5. Run the project
```bash
npm run dev
```

### 6. Build the project for production
```bash
npm run build
```

## 🔹 Future Enhancements
- Add 5-day weather forecast  
- Save recent searches (localStorage)  
- Add unit switching (°C / °F)

## 📄 License
Distributed under the MIT License. See  `LICENSE`  for more information.

## 📬 Contact
- Email: [levchuk.oleg21@gmail.com](mailto:levchuk.oleg21@gmail.com)  
- Website: lvog.github.io  
- LinkedIn: www.linkedin.com/in/oleg-levchuk-2098b2b7

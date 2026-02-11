# ☀️ Weather Web Application

A modern, responsive weather application built with **React** and **Vite** that provides real-time weather information for any city in the world.

## 📋 Project Overview

This Weather Web Application fetches current weather data from the OpenWeather API and displays:
- **Current Temperature** (in Celsius)
- **Weather Conditions** (with corresponding weather icons)
- **Humidity** percentage
- **Wind Speed** (in km/h)
- **City Location** information

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | Frontend Framework |
| Vite | 7.2.4 | Build Tool & Dev Server |
| React DOM | 19.2.0 | DOM Rendering |
| React Toastify | 11.0.5 | Notifications |
| CSS3 | - | Styling |
| JavaScript (JSX) | - | Programming Language |

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-toastify": "^11.0.5"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository:**
```bash
git clone <repository-url>
cd wether-web-application
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
VITE_APP_ID=your_openweather_api_key
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open in browser:**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
wether-web-application/
├── src/
│   ├── App.jsx                 # Main App component (root component)
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Global styles & layouts
│   ├── assets/                 # Weather icons and images
│   │   ├── search.png          # Search icon
│   │   ├── clear.png           # Clear weather icon
│   │   ├── cloud.png           # Cloudy weather icon
│   │   ├── drizzle.png         # Drizzle/light rain icon
│   │   ├── humidity.png        # Humidity icon
│   │   ├── rain.png            # Heavy rain icon
│   │   └── snow.png            # Snow icon
│   └── componets/              # React components folder
│       ├── Wether.jsx          # Main weather display component
│       └── Wether.css          # Component-specific styles
├── public/                      # Static assets
├── index.html                   # HTML entry point
├── vite.config.js              # Vite build configuration
├── eslint.config.js            # ESLint rules configuration
├── package.json                # Project dependencies & scripts
└── README.md                    # Project documentation
```

## ✨ Key Features

- 🔍 **City Search** - Search weather for any city worldwide
- 🌤️ **Dynamic Weather Icons** - Visual representation of weather conditions
- 📊 **Real-time Data** - Live weather information from OpenWeather API
- 🔔 **Toast Notifications** - User-friendly alerts for errors and validation
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean interface with Poppins font family
- 🌡️ **Temperature Display** - Shows temperature in Celsius
- 💧 **Humidity & Wind** - Complete weather metrics

## 🎮 How to Use

1. **Default City:** The application loads London's weather on startup
2. **Search:** Enter any city name in the search bar and click the search icon
3. **View Weather:** See current temperature, humidity, and wind speed
4. **Error Handling:** Toast notifications appear for invalid inputs or cities not found

## 🔌 API Integration

**API Provider:** OpenWeatherMap (Free Tier)
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Authentication:** API key required
- **Parameters:**
  - `q` - City name
  - `appid` - API key from VITE_APP_ID environment variable

**Get your free API key:** [OpenWeatherMap](https://openweathermap.org/api)

## 📝 Available Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Run ESLint code quality checks
npm run lint

# Preview production build locally
npm run preview
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Toast notifications not showing | Ensure `<ToastContainer />` is rendered in the component |
| Weather icons not loading | Verify image paths match the assets folder |
| API not returning data | Check `VITE_APP_ID` is set in `.env` file |
| City not found errors | Use proper city names (e.g., "London", "New York") |
| Port 5173 already in use | Kill the process or specify a different port |

## 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_APP_ID=your_openweather_api_key_here
```

**How to get your free API key:**
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Copy your API key from the dashboard
4. Paste it in the `.env` file

## 🧪 Browser Compatibility

| Browser | Support |
|---------|---------|
| Google Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| IE 11 | ❌ Not supported |

## 📄 License

This project is open source and available under the **MIT License**.

## 👨‍💻 Developer

Created as a weather application project using modern React practices.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support & Issues

For bug reports, feature requests, or general questions, please open an issue in the repository.

## 🔄 Version History

- **v1.0.0** (Feb 2026) - Initial release with weather search and display functionality

---

**Last Updated:** February 11, 2026  
**Built with:** React 19 + Vite 7

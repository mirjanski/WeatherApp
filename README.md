# 🌦 Weather App (React + Vite)

A simple and modern weather application built with **React** and **Vite**. The app allows users to search for any city and view real-time weather information using a public weather API.

🔗 **Live Demo:** [https://mirjanski.github.io/WeatherApp/](https://mirjanski.github.io/WeatherApp/)

---

## 🚀 Features

* Search weather by city name
* Real-time weather data
* Displays:

  * Temperature
  * Weather condition
* Weather icons based on conditions
* Error handling for invalid city names
* Responsive design (desktop & mobile)

---

## 🛠 Technologies Used

* **React** – UI library
* **Vite** – Fast development build tool
* **JavaScript (ES6+)**
* **CSS** – Styling
* **Weather API** (e.g. OpenWeather)

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/mirjanski/WeatherApp.git
```

2. Navigate to the project folder:

```bash
cd WeatherApp
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 🔌 API Usage

The app fetches weather data from a weather API using HTTP requests.

Example API call:

```js
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
```

The response data is stored in React state and displayed dynamically.

---


## 🎯 Learning Goals

* Working with APIs in React
* Managing state with `useState` and `useEffect`
* Component-based architecture
* Using Vite for fast builds

---

## 📄 License

This project is open-source and free to use for learning purposes.

---

## 👤 Author

Created by Mirjan

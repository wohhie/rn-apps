const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?'
const fetchWeather = (lat, lon) => {
    const url = weatherURL + '&units=metric&lat=' + lat + '&lon=' + lon + '&appid=f5e3f2c1eed81f0f204be5f73846a12b';
    return fetch(url)
        .then(res => res.json())
        .then(json => (
            {
            country: json.sys.country,
            city: json.name,
            temp: json.main.temp,
            weather: json.weather[0].main,
            windSpeed: json.wind.speed,
            pressure: json.main.pressure,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min
    }))
}



const fetchWeatherByCity = (city) => {
    const url2 = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=f5e3f2c1eed81f0f204be5f73846a12b&units=metric'
    console.log(url2)
    return fetch(url2)
        .then(res => res.json())
        .then(json => ({
        country: json.sys.country,
        temp: json.main.temp,
        weather: json.weather[0].main,
        windSpeed: json.wind.speed,
        pressure: json.main.pressure,
        tempMax: json.main.temp_max,
        tempMin: json.main.temp_min
    }))
}


export {fetchWeather, fetchWeatherByCity}

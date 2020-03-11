const weatherURL = ''

const fetchWeather = (latitude, longitude) => {
    const url = weatherURL + '&lat=' + lat + '&lon=' + lon + '&units=metric';
    return fetch(url)
        .then(res => res.json())
        .then(json => ({
            country: json.sysm.country,
    }))
}



const fetchWeatherByCity = (city) => {
    const url2 = 'https://samples.openweathermap.org/data/2.5/weather?q='+ city +'&appid=b6907d289e10d714a6e88b30761fae22'
    return fetch(url2)
        .then(res => res.json())
        .then(json => ({
            country: json.sys.country
        }))
}


export {fetchWeather, fetchWeatherByCity}

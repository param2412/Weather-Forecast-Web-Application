const option = {
    method: 'GET',
    
};

const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf43f772a353e77167dd70807c22dbb8&units=metric`, option)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        
        document.getElementById('temp').innerHTML = response.main.temp;
        document.getElementById('temp2').innerHTML = response.main.temp;
        document.getElementById('feels_like').innerHTML = response.main.feels_like;
        document.getElementById('humidity').innerHTML = response.main.humidity;
        document.getElementById('humidity2').innerHTML = response.main.humidity;
        document.getElementById('min_temp').innerHTML = response.main.temp_min;
        document.getElementById('max_temp').innerHTML = response.main.temp_max;
        document.getElementById('wind_speed').innerHTML = response.wind.speed;
        document.getElementById('wind_speed2').innerHTML = response.wind.speed;
        document.getElementById('wind_degrees').innerHTML = response.wind.deg;
        document.getElementById('sunrise').innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById('sunset').innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(document.getElementById('city').value);
});

getWeather("Delhi");



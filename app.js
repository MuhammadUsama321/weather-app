

const API_KEY = `fcad418177fd89c5fe5a744e63abf66f`

const inputWeather = document.getElementById("inputweather");
const showWeather = document.getElementById("showWeather");

const search = async()=>{

    showWeather.innerHTML =`<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
    
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputWeather.value}&appid=${API_KEY}&units=metric`;
    
    
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();
    
    
    console.log(response);
    
    return showData(response);
};

const showData =(data)=>{
    showWeather.innerHTML =
    `<h1>${data.name}</h1>

    <img widhth ="80" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png `}
    
    </br>
    </br>
    
    <h1> Temprature =${data.main.temp} CELSIUS </h1>
    </br>
    </br>
    
    <h2>${data.weather[0].main} </h2>`

    
    inputWeather.value = " "
    
}
    
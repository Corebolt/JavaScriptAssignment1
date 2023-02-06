const { request } = require('express');
const { response } = require('express');
const express = require('express');
const { weeklyWeather } = require('./weather');
const weather = require('./weather');
const app = express();

app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.static("public"));

//Michael Feisthauer
//weather assignment

// http://localhost:3000/weather
app.get("/weather",(request, response) => {

    let locationArray = [weather.weeklyWeather.kingston, weather.weeklyWeather.ottawa,
    weather.weeklyWeather.barrie];

    response.render('weatherDisplayAll', {allWeather : locationArray});
});

// http://localhost:3000/weather/kingston
// http://localhost:3000/weather/kingston/sunny
app.get("/weather/:location/:sunny?", (request, response) => {
    
    let location = request.params.location.toLowerCase();   //pulls location name   
    let locationName = weather.weeklyWeather[location];    //name to display
    
    let sunnyQuery = request.params.sunny;

    let infoToDisplay = [];
    if(sunnyQuery !== undefined) {
        for(let i = 0; i < 7; i++) 
        {
            if(locationName[i].forecast == "sunny") 
            {
                infoToDisplay.push(locationName[i]);
            }
        }
    }
    else 
    {
        infoToDisplay = locationName;
    }

    response.render('weather', {location_title:infoToDisplay, location:location});     
});

// http://localhost:3000/weather/search/kingston/monday
app.get("/weather/search/:location/:day",(request, response) => {
    
    let location = request.params.location.toLowerCase(); 
    let requestedDay = request.params.day.toLowerCase();
    let locationWeather = weather.weeklyWeather[location];

    let sortedLocation = [];
    for(let i=0; i < locationWeather.length; i++)
    {
        if(locationWeather[i].day === requestedDay)
        {
            sortedLocation.push(locationWeather[i]);
        }
    }    

    response.render('weather', { location_title: sortedLocation, location:location });
});

// http://localhost:3000/warmestDay/kingston
app.get("/warmestDay/:location",(request, response) =>{

    let location = request.params.location.toLowerCase();
    let locationData = weather.temps[location];
    let weatherData = weather.weeklyWeather[location];

    let highestTemp = 0;
    let warmDay = "";   
    for(let i=0; i < 7; i++)
    {
        if(locationData[i] > highestTemp)
        {            
            highestTemp = locationData[i];
            warmDay = locationData;           
            cityInfo = weatherData[i];
        }
    }    

    response.render('highestTemps', {hottest:highestTemp, locationData:cityInfo, location:location})
});

// http://localhost:3000/warmestLocation/monday
app.get("/warmestLocation/:givenDay",(request, response) =>{

    let givenDay = request.params.givenDay.toLowerCase();
    let warmestDay = givenDay;
    let locationName = "";
    let highestTemp = 0;

    switch(givenDay){
        case "sunday":
            warmestDay = 0;
            break;
        case "monday":
            warmestDay = 1;
            break;
        case "tuesday":
            warmestDay = 2;
            break;
        case "wednesday":
            warmestDay = 3;
            break;
        case "thursday":
            warmestDay = 4;
            break;
        case "friday":
            warmestDay = 5;
            break;
        case "saturday":
            warmestDay = 6;
            break;
    }

    if(weather.temps.barrie[warmestDay] > highestTemp)
    {
        highestTemp = weather.temps.barrie[warmestDay];
        locationName = "Barrie";

        if(weather.temps.ottawa[warmestDay] > highestTemp)
        {
            highestTemp = weather.temps.ottawa[warmestDay];
            locationName = "Ottawa";

            if(weather.temps.kingston[warmestDay] > highestTemp)
            {
                highestTemp = weather.temps.kingston[warmestDay];
                locationName = "Kingston";
            }
        }
    }
    

    response.render("warmestLocation", {location:locationName, givenDay:givenDay});
});

// http://localhost:3000/averageTemps/kingston
app.get("/averageTemps/:location",(request, response) => {
    
    let location = request.params.location.toLowerCase();
    let locationData = weather.temps[location];

    let currentTemps = 0;
    for(let i=0; i < 7; i++)
    {
        currentTemps += locationData[i];
    }
    let avg = currentTemps / 7;
    avg = avg.toFixed(2);
   
    response.render("avgTemps", {location:location, average:avg});
});
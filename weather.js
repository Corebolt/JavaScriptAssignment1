//ottawa
let ottawaSunday = {
    locationName: "Ottawa",
    day: "sunday",
    temperature: 28,
    forecast: "cloudy",
    percipitation: 60,
    humidity: 45
};

let ottawaMonday = {
    locationName: "Ottawa",
    day: "monday",
    temperature: 25,
    forecast: "sunny",
    percipitation: 12,
    humidity: 20

};

let ottawaTuesday = {
    locationName: "Ottawa",
    day: "tuesday",
    temperature: 15,
    forecast: "raining",
    percipitation: 100,
    humidity: 50
};

let ottawaWednesday ={
    locationName: "Ottawa",
    day: "wednesday",
    temperature: 28,
    forecast: "partly cloudy",
    percipitation: 10,
    humidity: 10
};

let ottawaThursday={
    locationName: "Ottawa",
    day: "thursday",
    temperature: 27,
    forecast: "mostly cloudy",
    percipitation: 10,
    humidity: 40
};

let ottawaFriday={
    locationName: "Ottawa",
    day: "friday",
    temperature: 29,
    forecast: "sunny",
    percipitation: 5,
    humidity: 10
};

let ottawaSaturday={
    locationName: "Ottawa",
    day: "saturday",
    temperature: 22,
    forecast: "partly cloudy",
    percipitation: 20,
    humidity: 15
};

//kingston
let kingstonSunday = {
    locationName: "Kingston",
    day: "sunday",
    temperature: 30,
    forecast: "mostly sunny",
    percipitation: 10,
    humidity: 15
};

let kingstonMonday = {
    locationName: "Kingston",
    day: "monday",
    temperature: 25,
    forecast: "cloudy",
    percipitation: 70,
    humidity: 80

};

let kingstonTuesday = {
    locationName: "Kingston",
    day: "tuesday",
    temperature: 19,
    forecast: "cloudy",
    percipitation: 60,
    humidity: 60
};

let kingstonWednesday ={
    locationName: "Kingston",
    day: "wednesday",
    temperature: 18,
    forecast: "raining",
    percipitation: 100,
    humidity: 60
};

let kingstonThursday={
    locationName: "Kingston",
    day: "thursday",
    temperature: 22,
    forecast: "sunny",
    percipitation: 25,
    humidity: 35
};

let kingstonFriday={
    locationName: "Kingston",
    day: "friday",
    temperature: 20,
    forecast: "mostly sunny",
    percipitation: 10,
    humidity: 20
};

let kingstonSaturday={
    locationName: "Kingston",
    day: "saturday",
    temperature: 26,
    forecast: "sunny",
    percipitation: 12,
    humidity: 15
};

//barrie

let barrieSunday = {
    locationName: "Barrie",
    day: "sunday",
    temperature: 24,
    forecast: "sunny",
    percipitation: 40,
    humidity: 65
};

let barrieMonday = {
    locationName: "Barrie",
    day: "monday",
    temperature: 28,
    forecast: "cloudy",
    percipitation: 70,
    humidity: 80

};

let barrieTuesday = {
    locationName: "Barrie",
    day: "tuesday",
    temperature: 14,
    forecast: "raining",
    percipitation: 95,
    humidity: 70
};

let barrieWednesday ={
    locationName: "Barrie",
    day: "wednesday",
    temperature: 25,
    forecast: "mostly sunny",
    percipitation: 20,
    humidity: 35
};

let barrieThursday={
    locationName: "Barrie",
    day: "thursday",
    temperature: 26,
    forecast: "sunny",
    percipitation:40,
    humidity: 40
};

let barrieFriday={
    locationName: "Barrie",
    day: "friday",
    temperature: 31,
    forecast: "mostly cloudy",
    percipitation: 30,
    humidity: 20
};

let barrieSaturday={
    locationName: "Barrie",
    day: "saturday",
    temperature: 26,
    forecast: "partly cloudy",
    percipitation: 45,
    humidity: 38
};


// locations and days relating to them
let barrie ={
    sunday: barrieSunday,
    monday: barrieMonday,
    tuesday: barrieTuesday,
    wednesday: barrieWednesday,
    thursday: barrieThursday,
    friday: barrieFriday,
    saturday: barrieSaturday
};

let kingston ={
    sunday: kingstonSunday,
    monday: kingstonMonday,
    tuesday: kingstonTuesday,
    wednesday: kingstonWednesday,
    thursday: kingstonThursday,
    friday: kingstonFriday,
    saturday: kingstonSaturday
};

let ottawa ={
    sunday: ottawaSunday,
    monday: ottawaMonday,
    tuesday: ottawaTuesday,
    wednesday: ottawaWednesday,
    thursday: ottawaThursday,
    friday: ottawaFriday,
    saturday: ottawaSaturday
};

let temps = {
    "barrie" : [sunday = barrieSunday.temperature, 
                monday = barrieMonday.temperature,
                tuesday = barrieTuesday.temperature,
                wednesday = barrieWednesday.temperature,
                thursday = barrieThursday.temperature,
                friday = barrieFriday.temperature,
                saturday = barrieSaturday.temperature],

    "kingston": [sunday = kingstonSunday.temperature,
                monday = kingstonMonday.temperature,
                tuesday = kingstonTuesday.temperature,
                wednesday = kingstonWednesday.temperature,
                thursday = kingstonThursday.temperature, 
                friday = kingstonFriday.temperature, 
                saturday = kingstonSaturday.temperature],

    "ottawa":   [sunday = ottawaSunday.temperature,
                monday = ottawaMonday.temperature,
                tuesday = ottawaTuesday.temperature,
                wednesday = ottawaWednesday.temperature,
                thursday = ottawaThursday.temperature,
                friday = ottawaFriday.temperature,
                saturday = ottawaSaturday.temperature]             

}
let forecastDays = {
    "barrie" : [sunday = barrieSunday.forecast, 
                monday = barrieMonday.forecast,
                tuesday = barrieTuesday.forecast,
                wednesday = barrieWednesday.forecast,
                thursday = barrieThursday.forecast,
                friday = barrieFriday.forecast,
                saturday = barrieSaturday.forecast],

    "kingston": [sunday = kingstonSunday.forecast,
                monday = kingstonMonday.forecast,
                tuesday = kingstonTuesday.forecast,
                wednesday = kingstonWednesday.forecast,
                thursday = kingstonThursday.forecast, 
                friday = kingstonFriday.forecast, 
                saturday = kingstonSaturday.forecast],

    "ottawa":   [sunday = ottawaSunday.forecast,
                monday = ottawaMonday.forecast,
                tuesday = ottawaTuesday.forecast,
                wednesday = ottawaWednesday.forecast,
                thursday = ottawaThursday.forecast,
                friday = ottawaFriday.forecast,
                saturday = ottawaSaturday.forecast]             

}

let weeklyWeather ={
    "barrie": [barrieSunday, barrieMonday, barrieTuesday, barrieWednesday, barrieThursday,
              barrieFriday, barrieSaturday],

    "kingston": [kingstonSunday, kingstonMonday, kingstonTuesday, kingstonWednesday,
                kingstonThursday, kingstonFriday, kingstonSaturday],

    "ottawa": [ottawaSunday, ottawaMonday, ottawaTuesday, ottawaWednesday, ottawaThursday,
               ottawaFriday, ottawaSaturday]
}; 

let cityNames ={
    barrie: "Barrie",
    kingston: "Kingston",
    ottawa: "Ottawa"
};

let weather ={
    barrie: barrie,
    kingston: kingston,
    ottawa: ottawa
};

module.exports = {
    cityNames: cityNames,
    weather:weather,
    weeklyWeather:weeklyWeather,
    temps: temps,       //for grabbing temperatures from each day
    forecastDays:forecastDays //for grabbing forecast from each day
};
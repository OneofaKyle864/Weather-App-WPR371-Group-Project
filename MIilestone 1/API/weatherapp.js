
const express = require('express');
const app = express();
const port = 3000;
//Add https to access our OpenWeather API
const https= require('https');

const zipcode = '1709';
const countrycode= "ZAF"
const apiKey= "1709e56d9c6b91523ab2d15260ac59b1";
const api = "https://api.openweathermap.org/geo/1.0/zip?zip="+ zipcode + countrycode + "&appid=" + apiKey;

app.get('/', (req, res) => {
    https.get(api, function(response){
       // console.log(response.statusCode);//Check Connection 
        response.on('data', function(data)
        {
           const weatherData = JSON.parse(data);
            console.log(weatherData);
        });
    });
    res.send('Server is running!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






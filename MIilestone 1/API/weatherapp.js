const express = require('express');
const app = express();
const port = 3001;

const https = require('https');
const apikey = "06e1969da55a4b51d0b4447dcd9c92eb";
const lat = "-25.74486";
const lon = "28.18783";

const api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apikey;
app.get('/', function(req, res) {
    https.get(api, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        });
    })
    res.send("Server is running");
});

app.listen(port, function() {
    console.log("Server is listening on port " + port);
});






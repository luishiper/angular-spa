// SERVICES
weatherApp.service('cityService', function(){
   
    var city = {
        name: ''
    };
    
    this.city = city;
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function (city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=04b7961714cbb0841a7d1957691373a4", {
                                                callback: "JSON_CALLBACK"}, { 
                                                get: 
                                               { method: "JSONP"
                                                }
                                                });
                                             
   return weatherAPI.get({q: city, cnt: days}); 
    };
}])
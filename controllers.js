//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    
    $scope.city = cityService.city;
    
    $scope.submit = function() {
        $location.path("/forecast");
    };    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
    
    $scope.city = cityService.city;
                                             
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city.name, $scope.days);
    
    $scope.convertToCelsius = function(degK){
        return   parseFloat(Math.round((degK - 273.15) * 100) / 100).toFixed(2);;
   };
    
    $scope.convertToDate = function(dt) {
        return dt * 1000;
    }
}]);

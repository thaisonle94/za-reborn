var zaApp = angular.module('zaApp', [
    'firebase',
    'ngRoute',
    'zaApp.Services',
    'zaApp.Filters',
    'zaApp.Controllers',
    'zaApp.Directives'
]);

zaApp.config(function($interpolateProvider, $httpProvider){
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);

zaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl: '/views/reporting/reporting-dashboard.html'
        })
        .when('/pages-overview', {
            templateUrl: '/views/reporting/reporting-pages-overview.html'
        })
        .when('/geo/language', {
            templateUrl: '/views/reporting/reporting-geo-language.html'
        })
        .when('/geo/location', {
            templateUrl: '/views/reporting/reporting-geo-location.html'
        })
        .when('/tech/browser-os', {
            templateUrl: '/views/reporting/reporting-tech-browser-os.html'
        })
        .when('/tech/devices', {
            templateUrl: '/views/reporting/reporting-tech-devices.html'
        })
        .when('/management', {
            templateUrl: '/views/management/management-products.html'
        })

        .when('/404', {
            templateUrl: '/views/404.html'
        })
        .when('/500', {
            templateUrl: '/views/500.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
}]);
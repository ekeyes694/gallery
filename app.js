var app = angular.module('myApp', ['ngAnimate', 'ngTouch', 'ngRoute']);

 app.config(['$routeProvider', function ($routeProvider) {
     $routeProvider
         .when('/', {
             templateUrl: 'partials/home.html',
         })
         .when('/basslights', {
             templateUrl: 'partials/basslights.html',
             controller: 'basslightsCtrl'

         })
         .when('/colorado', {
             templateUrl: 'partials/colorado.html',
             controller: 'coloradoCtrl'
         })
         .otherwise({
             redirectTo: '/'
         });
}]);

 app.controller('navCtrl', function ($scope, $location) {
     $scope.isActive = function (viewLocation) {
         return viewLocation === $location.path();
     };

     $scope.classActive = function (viewLocation) {
         if ($scope.isActive(viewLocation)) {
             return 'active';
         } else {
             return 'inactive';
         }
     };
 });

  app.controller('basslightsCtrl', function ($scope) {
    $scope.photos = [
        {src: './images/basslights/one.jpg', desc: 'Image 01'},
        {src: './images/basslights/two.jpg', desc: 'Image 02'},
        {src: './images/basslights/five.jpg', desc: 'Image 05'},
        {src: './images/basslights/nine.jpg', desc: 'Image 09'}
    ];
    $scope._Index = 0;
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
    $scope.showPrev = function () {
    $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    $scope.showNext = function () {
    $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    $scope.showPhoto = function (index) {
    $scope._Index = index;
    };
});

app.controller('coloradoCtrl', function ($scope) {
    $scope.photos = [
        {src: './images/colorado/1.jpg', desc: 'Image 01'},
        {src: './images/colorado/2.jpg', desc: 'Image 01'},
        {src: './images/colorado/3.jpg', desc: 'Image 01'},
        {src: './images/colorado/4.jpg', desc: 'Image 01'},
        {src: './images/colorado/5.jpg', desc: 'Image 01'},
        {src: './images/colorado/6.jpg', desc: 'Image 01'},
        {src: './images/colorado/7.jpg', desc: 'Image 01'},
        {src: './images/colorado/8.jpg', desc: 'Image 01'},
        {src: './images/colorado/9.jpg', desc: 'Image 01'},
        {src: './images/colorado/10.jpg', desc: 'Image 01'}
    ];
    $scope._Index = 0;
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
    $scope.showPrev = function () {
    $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    $scope.showNext = function () {
    $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    $scope.showPhoto = function (index) {
    $scope._Index = index;
    };
});
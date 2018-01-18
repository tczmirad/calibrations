angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q) {
    'use strict';
    app.init($scope);
    if (!$scope.data) {
        $scope.data = {};
    } 
    
    app.call("login.logout")
    $scope.login = function () {
        app.call("login.loginBasic")
        $scope.doLogin({
            username: $scope.data.username,
            password: $scope.data.password
        }, false);
    };
   
}
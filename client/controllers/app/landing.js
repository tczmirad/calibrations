angular.module('app').controller('app_landing', app_landing);
function app_landing($scope, app) {
    'use strict';
    app.init($scope); 
    console.log($scope);
    app.call("login.logout");
}
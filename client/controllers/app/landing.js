angular.module('app').controller('app_landing', app_landing);
function app_landing($scope, app) {
    'use strict';
    app.init($scope);
    app.call("login.logout");
}
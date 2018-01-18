angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q) {
    'use strict';
    app.init($scope);
    if (!$scope.data) {
        $scope.data = {};
    }
  
    $scope.login = function () {
        $scope.
        $scope.doLogin({
            username: $scope.data.username,
            password: $scope.data.password
        }, false);
    };
    $scope.doLogin = function (credentials, useWebsocket) {
        $scope.app.showLoading('Logging in');
        var username = credentials.username;
        var password = credentials.password;
        if (useWebsocket || app.login($scope.data.username, $scope.data.password)) {
            app.action('login', 'submit', this);
        }
    };
    $scope.doAppLogin = function (credentials) {
        window.plugins.touchid.save('credentials', JSON.stringify(credentials));
        $scope.doLogin(credentials, true);
    };
}
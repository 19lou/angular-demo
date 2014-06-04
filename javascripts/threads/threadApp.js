define(
    'threadApp',
    [
        'angular',
        'core',
        'angularResource'
    ],
    function(angular,$){
        'use strict';
        console.log("abdcs");
        var threadApp = angular.module('threadApp',['ngResource']);

        threadApp.controller("ThreadController",function($scope){
            $scope.title="19楼社区";
            
        });

        return threadApp;
    }
);
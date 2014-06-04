define(
    'threadApp2',
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
            $scope.menus=[
                    {'id':1,"title":'我的帖子'},
                    {'id':2,"title":'我的相册'},
                    {'id':3,"title":"我的收藏"},
                    {'id':4,"title":"我的私信"}
            ];

        });

        return threadApp;
    }
);
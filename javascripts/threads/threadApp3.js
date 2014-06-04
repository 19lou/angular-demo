define(
    'threadApp3',
    [
        'angular',
        'core',
        'angularResource',
        'angularRoute',
        'menuService',
        'threadService',
        'filters/lengthFilter'
    ],
    function(angular,$){
        'use strict';
        var threadApp = angular.module('threadApp',['ngResource','ngRoute','menuService','threadService','lengthFilters']);

        threadApp.controller("MenuController",['$scope','Menu',function($scope,Menu){
            $scope.title="19楼社区";
            $scope.menus=Menu.query();
        }]);

        threadApp.controller("ThreadController",function($scope,Thread){
            $scope.title="我的帖子";
            $scope.threads=Thread.query();
        });

        threadApp.controller("PhotoController",function($scope){
            $scope.title="我的相册";
        });

        threadApp.controller("CollectController",function($scope){
            $scope.title="我的收藏";
        });

        threadApp.controller("MessageController",function($scope){
            $scope.title="我的私信";
        });

        threadApp.controller("ThreadViewController",['$scope','Thread','$routeParams',
            function($scope,Thread,$routeParams){
            $scope.title="帖子内容页";
            console.log($routeParams);
            $scope.thread=Thread.view({'tid':$routeParams.tid});
        }]);
        

        threadApp.config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/threads', {
                        templateUrl: '/html/threads.html',
                        controller: 'ThreadController'
                    }).
                    when('/photos',{
                       templateUrl:'/html/photos.html',
                        controller:'PhotoController'
                    }).
                    when('/collects', {
                        templateUrl: '/html/collects.html',
                        controller: 'CollectController'
                    }).
                    when('/messages', {
                        templateUrl: '/html/messages.html',
                        controller: 'MessageController'
                    }).
                    when('/thread/:tid', {
                        templateUrl: '/html/thread.html',
                        controller: 'ThreadViewController'
                    }).
                    otherwise({
                        redirectTo: '/threads'
                    });
            }]);

        return threadApp;
    }
);
define(
    "menuService",
    ["angular"],
    function(angular){
        'use strict';
        var menuService = angular.module('menuService', ['ngResource']);
        menuService.factory('Menu', ['$resource',
            function($resource){
                return $resource('/data/menus.json', {}, {
                    query: {method:'GET', isArray:true}
                });
            }
        ]);
        return menuService;
    }
);
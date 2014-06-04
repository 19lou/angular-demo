define(
    "threadService",
    ["angular"],
    function(angular){
        'use strict';
        var threadService = angular.module('threadService', ['ngResource']);
        threadService.factory('Thread', ['$resource',
            function($resource){
                console.log('');
                return $resource('/data/thread/:tid.json', {tid:'@tid'}, {
                    query: {method:'GET', params:{'tid':'list'},isArray:true},
                    view: {method:'GET', params:{}}
                });
            }
        ]);
        return threadService;
    }
);
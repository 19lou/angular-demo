define(
    "filters/lengthFilter",
    ["angular"],
    function(angular){
        'use strict';
        var lengthFilters = angular.module('lengthFilters', []);
        lengthFilters.filter('titleFilter',function(){
            return function(input){
                if (input.length > 10){
                    return input.substring(0,10)+"...";
                }
                else {
                    return input;
                }
            }
        });
        return lengthFilters;
    }
);
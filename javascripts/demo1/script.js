'use strict';

/* App Module */


var myApp = angular.module("myApp", []);


myApp.controller("InvoiceCtl",function($scope){
	$scope.title="Invoice";
	$scope.qty=100;
	$scope.cost=19.8;
});


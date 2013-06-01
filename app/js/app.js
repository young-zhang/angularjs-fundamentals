'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource']);

eventsApp.factory('myCache', function($cacheFactory) {
	return $cacheFactory('myCache', {capacity:3})
});
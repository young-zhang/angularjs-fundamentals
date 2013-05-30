'use strict';

eventsApp.factory('eventData', function($http, $log) {
	return {
        getEvent: function(onSuccess) {
            $http({method: 'GET', url: '/data/event/1'}).
                success(function(data, status, headers, config) {
                    $log.info(data, status, headers(), config);
                    onSuccess(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                });
        }
	}
});
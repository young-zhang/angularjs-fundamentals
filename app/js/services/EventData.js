'use strict';

eventsApp.factory('eventData', function($http, $log, $q) {
	return {
        getEvent: function() {
            var deferred = $q.defer();
            $http({method: 'GET', url: '/data/event/1'}).
                success(function(data, status, headers, config) {
                    $log.info(data, status, headers(), config);
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                    deferred.reject(status);
                });
            return deferred.promise;
        }
	}
});
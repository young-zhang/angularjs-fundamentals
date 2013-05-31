'use strict';

eventsApp.factory('eventData', function($resource, $q) {
	return {
        getEvent: function() {
            var deferred = $q.defer();
            console.log('eventData.getEvent()');
            $resource('/data/event/:id', {id:'@id'})
                .get(
                    {id:1},
                    function(event) {
                        deferred.resolve(event);
                    },
                    function(response) {
                        deferred.reject(response);
                    }
                );
            var promise = deferred.promise;
            console.log(promise);
            return promise;
        }
	}
});
'use strict';

eventsApp.factory('eventData', function($resource, $q) {
    var resource = $resource('/data/event/:id', {id:'@id'});
	return {
        getEvent: function() {
            var deferred = $q.defer();
            console.log('eventData.getEvent()');
            resource
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
        },
        save: function(event) {
            var deferred = $q.defer();
            event.id = 999; // we just fake the event id, it'll be saved to disk
            resource.save(
                event,
                function(response) { deferred.resolve(response); },
                function(response) { deferred.reject(response); }
            );
            console.log('save() returning promise');
            return deferred.promise;
        }
	}
});
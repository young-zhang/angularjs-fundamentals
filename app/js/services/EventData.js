'use strict';

eventsApp.factory('eventData', function($resource) {
	return {
        getEvent: function() {
            console.log('eventData.getEvent()');
            return $resource('/data/event/:id', {id:'@id'}).get({id:1});
        }
	}
});
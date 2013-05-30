'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
    	$scope.sortorder = 'name';
        $scope.event = eventData.getEvent();
        $scope.event.then(function(event) {
            console.log(event);
        },
        function(status) {
            console.log(status);
        });

        $scope.upVoteSession = function(session, event) {
            console.log('event passed in by EventDetails.html:');
            console.log(event);
            console.log('$scope.event:');
            console.log($scope.event);
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session, event) {
            session.upVoteCount--;
        };
    }
);

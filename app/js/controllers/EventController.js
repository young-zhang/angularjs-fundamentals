'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
    	$scope.sortorder = 'name';
        $scope.event = eventData.getEvent(function (event) {
            $scope.event = event;
        });
        // $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);

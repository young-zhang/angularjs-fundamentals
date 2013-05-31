'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $anchorScroll, eventData) {
    	$scope.sortorder = 'name';
        $scope.event = eventData.getEvent();
        $scope.event.then(
            function(e) {console.log(e);},
            function(r) {console.log(r);}
        );

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

        $scope.scrollToSession = function() {
            console.log('scrollToSession() called');
            $anchorScroll();
        }
    }
);
 
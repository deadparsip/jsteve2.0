
(function() {

    var spaceSloth = angular.module('whelk.spaceSloth', ['ngSanitize']);

    spaceSloth.controller('spaceSlothController', ['$scope', function ($scope) {

        $scope.spaceSloths = [
            {
                title: 'Space Sloth say Embrace Your Cosmic Insignificance tiny cosmic nought!',
                content : 'Heed the wise words of Space Sloth! Your continued existence is so utterly futile and incomprehensibly improbable as to make it '+
				'almost certain that you don&apos;t really exist.<br>Cease this pointless charade you dirty parade of geraniums!' +
				'At the very least this knowledge should help you smoothly succumb to entropy like cocoa being stirred with my Spoon Of Truth.',
				src:'/img/spacesloth/insignificance.jpg',
				alt:'Space Sloth spake: Envelop My Guided Missiles of Truth'				
            },
			{
                title: 'My face',
                content: 'ALL OVER MY FACE<br>' +
                    '<em>like a finger</em><br>' +
                    'MY FACE IS NOT BRAILLE, MADAM<br>' +
                    'please evacuate my face<br>' +
                    '<em>Do not linger</em><br>' +
                    'YOU READ ME INCORRECTLY<br>' +
                    'I am for the fully sighted and the polite only<br>' +
                    'SEE MY FACE, SEE IT CLEARLY<br>' +
                    'for it is a FACE, round thing on a neck part<br>' +
                    '<em>not a resting place for digits of the lonely!</em><br><br>'
            }
        ]

        $scope.changeActivePoem = function (index) {
            $scope.activePoem = index;
        };

        $scope.forwardPoem = function () {
            $scope.activePoem += 1;
        };

        $scope.backPoem = function () {
            $scope.activePoem -= 1;
        };


    }]);

}());

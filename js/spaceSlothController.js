
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
                title: 'Space Sloth say Indolence The Only True State of Being',
                content: 'If the Universe is infinite, then it is infinitely ridic, and so is everything in it.'+
				'Which means nothing makes sense. Including you. Which explains a lot if you ask me. So go back to bed and try not to think about how shambolically	incompetent you are at existence. ',
				src: '/img/spacesloth/ridic.jpg',
				alt: 'Space Sloth spake: Indolence The Only True State'
            },
			{
				title: 'Space Sloth say Your Existence Matters Not',
				content: 'An apathetic universe is indifferent to your struggles, quoth the Space Sloth. And let&apos;s think about that - surelemement he hath a point here.<br>One must resolve oneself to one&apos;s cosmic insignificance in order to be at peace. You are a crisp packet blowing in the wind, in a carp park that is blowing in the wind, in another car park that is blowing in the wind, in another-....etc',
				src: '/img/spacesloth/dontExist.jpg',
				alt:'Space Sloth spake: I care not'
			},
			{
				title: 'Space Sloth spake: I care not',
				content: 'And Space Sloth spaketh to the insolent man again: "One must still have chaos in oneself to be able to give birth to a dancing'+
				' star" And the man, for whom philosophy was a passion endured, did curse his enigmatic Creator and did throw a hissy fit '+
				'of apostasy. He turned his back on his the One True Spacey Obliqueness, before casting himself off the mountain to his death, and hiding the body.',
				src: '/img/spacesloth/astar.jpg',
				alt:'Space Sloth spake: One must have chaos'
			}
			
        ]

        $scope.changeActivespaceSloth = function (index) {
            $scope.activespaceSloth = index;
        };

        $scope.forwardspaceSloth = function () {
            $scope.activespaceSloth += 1;
        };

        $scope.backspaceSloth = function () {
            $scope.activespaceSloth -= 1;
        };


    }]);

}());

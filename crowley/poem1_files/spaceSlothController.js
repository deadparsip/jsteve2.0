
(function() {

    var spaceSloth = angular.module('whelk.spaceSloth', ['ngSanitize']);

    spaceSloth.controller('spaceSlothController', ['$scope', function ($scope) {
	
		//$scope.isMobile = !!('ontouchstart' in window);
		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.spaceSloths = [
            
			{
				title:	'REMEMBER you do not know anything - but neither does anybody else!',
				src: '/img/spacesloth' + $scope.isMobile + 'space-sloth-knowledge.jpg',
				alt: 'Space Sloth say you know nothing'
			},
			
			{
				title:	'Space Sloth has woken up and he is talking about all the sanities!',
				content: 'Sanities are everywhere it seems, but what exactly are they? Well, Space Sloth teaches us that sanities aren\'t really anything, they are in fact an artificially constructed flange of step-ladders for people who want to to try to measure their ordinariness against that of other bitches.',
				src: '/img/spacesloth' + $scope.isMobile + 'space-sloth-sanity-is-here.jpg',
				alt: 'Space Sloth say you know nothing'
			},								
			
			
			{
                title: 'Space Sloth says Nothing Happens For a Reason',
                content : 'Nothing happens! Absurd? No, bitch! Absurd never happens either! Wake up to the correct potatoes!'+
				'Surely reality is merely a construct which serves to enable your own self credibility. Perception itself drives us mad and keeps up sane' +
				'To be human is to draw away from life',
				src: '/img/spacesloth' + $scope.isMobile + 'space-sloth-perception-is-reality.jpg',
				alt: 'Space Sloth spake: Heed my words of truthiness you sack of bitch!'				
            },
			
            {
                title: 'Never stop being yourself?',
                content : 'Today\'s truthMissile is targeting your silent shouting space and it\'s a corker!'+
				'Just lie down and remember that you cannot be yourself because yourself does not exist, you are everything and everything is you.' +
				'Consciousness is a deceit propagated by those who would have you buy their overpriced mattresses. ~~ Accept your place in the cosmos and lie down ~ ',
				src: $scope.isMobile ?  '/img/spacesloth/' + $scope.isMobile + '/sloth-consciousness.jpg' : '/img/spacesloth/sloth-consciousness.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },	

            {
                title: 'Don\'t worry. In 150 years no one will remember you',
                content : 'Today\'s Truth Missile of Truth missiling away truthfully, cutting through the shyte spectrum towards your pointless head-hole is this:' +
				'Always try your best. Or don\'t. It doesn\'t really matter, because in a relatively short amount of time you will be dead, no one will remember you, and nothing you ever did will have had any impact on the universe. LOVE. ~ ',
				src: '/img/spacesloth/' + $scope.isMobile + '/sloth-bin-of-deathless-infinite.jpg',
				alt: 'the Space Sloth says: You will be dead soon anyway so don\'t worry'				
            },	

            {
                title: 'Homogeneous and small, you resemble some grit in a driveway in a painting of Cape Town. But this is Good, not Bad.',
                content : 'Today\'s missile of truth sent fluttering towards your thought-cave like a butterfly of sense, is a simple one. To be at one with the cosmos, you must understand that you are a tiny meaningless part of it, invisible to all, and that if you didn\'t exist (which you can\'t be sure you actually do) nothing would be any different at all! Happy Thursday! :)',
				src: '/img/spacesloth/space-sloth-homogenous.jpg',
				alt: 'the Space Sloth says: Always remember you are homogeneous'				
            },

            {
                title: 'Heed the Space Sloth: Just lie down because your utter nihility is and always won\'t be.',
                content : 'This may or may not sound a bit like some insanity you those of you uninitiated in the ways of the Sloth, '+
				'and quite possibly, it is. Alas there is no way to tell, and there never will be. So let\'s all lie down and try to forget about it all.'+
				'Just remember, although you don\'t fully exist, neither does Bruno Mars, let that provide some comfort.',
				src: '/img/spacesloth/space-sloth-caterpillar-eyebrow.jpg',
				alt: 'the Space Sloth speaks: Embrace your nihility and lie down'				
            },			
			
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
            if ($scope.activespaceSloth < $scope.spaceSloths.length) {
				$scope.back="fadeInRight";
				$scope.activespaceSloth += 1;
			}
        };

        $scope.backspaceSloth = function () {
			if ($scope.activespaceSloth > 0) {
				$scope.back="fadeInLeft";				
				$scope.activespaceSloth -= 1;
			}
        };


    }]);

}());

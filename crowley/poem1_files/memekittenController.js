
(function() {

    var memekitten = angular.module('whelk.memeKitten', [
		'ngSanitize',
		'ngTouch'
	]);

    memekitten.controller('memeKittenController', ['$scope', function ($scope) {

		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.memekittens = [
            {
                title: 'Always Believe In You!',
                content : 'If you don\'t, then who will?',
				src: '/img/memeKitten/meme-kitten-believe-in-you.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            }, 
			{
                title: 'Always Be You',
                content : 'Today\'s truthMissile is targeting your silent shouting space and it\'s a corker!'+
				'Just lie down and remember that you cannot be yourself because yourself does not exist, you are everything and everything is you.' +
				'Consciousness is a deceit propagated by those who would have you buy their overpriced mattresses. ~~ Accept your place in the cosmos and lie down ~ ',
				src: '/img/memeKitten/meme-kitten-be-yourself.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },		
            {
                title: 'Not Everyone Is Your Friend',
                content : 'Today\'s Truth Missile of Truth missiling away truthfully, cutting through the shyte spectrum towards your pointless head-hole is this:' +
				'Always try your best. Or don\'t. It doesn\'t really matter, because in a relatively short amount of time you will be dead, no one will remember you, and nothing you ever did will have had any impact on the universe. LOVE. ~ ',
				src: '/img/memeKitten/meme-kitten-friends.jpg',
				alt: 'the Space Sloth says: You will be dead soon anyway so don\'t worry'				
            },
            {
                title: 'Don\'t Have Any Bad Relationships',
                content : 'Although some of his anti-matter shame particles may have been created by a Neutron Star at a later date. But this is conjecture.',
				src: '/img/memeKitten/meme-kitten-your-time.jpg',
				alt: 'the Space Blep Cat does not like Piers Morgan'				
            }			
        ]

        $scope.changeActivememekitten = function (index) {
			console.log(index);
			$scope.activememekitten = index;
        };

        $scope.forwardmemekittens = function () {
            if ($scope.activememekitten < [$scope.memekittens.length -1]) {
				$scope.back="fadeInRight";
				$scope.activememekitten += 1;
			}
        };

        $scope.backmemekitten = function () {
			if ($scope.activememekitten > 0) {
				console.log($scope.activememekitten);
				$scope.back="fadeInLeft";				
				$scope.activememekitten -= 1;
			}
        };


    }]);

}());

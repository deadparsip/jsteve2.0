
(function() {

    var blepCat = angular.module('whelk.blepCat', ['ngSanitize']);

    blepCat.controller('blepCatController', ['$scope', function ($scope) {
	
		//$scope.isMobile = !!('ontouchstart' in window);
		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.blepCats = [
			{
                title: 'People watch Vince Vaughn movies',
                content : 'It is true. </p><em>Voluntarily</em>. All the while you bravely chose to attempt to decode existence. I salute you you beautiful clever tin of bitch.',
				src: 'img/blepSpaceCat' + $scope.isMobile + 'space-blep-dont-think-more-than-seven.jpg',
				alt: 'Blep Cat does not like Vaughn movies - he is a bitch'
            },   
			{
                title: 'Never stop being yourself?',
                content : 'Today\'s truthMissile is targeting your silent shouting space and it\'s a corker!'+
				'Just lie down and remember that you cannot be yourself because yourself does not exist, you are everything and everything is you.' +
				'Consciousness is a deceit propagated by those who would have you buy their overpriced mattresses. ~~ Accept your place in the cosmos and lie down ~ ',
				src: '/img/blepSpaceCat' + $scope.isMobile + 'space-blep-cat-important-things.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },           
			
			{
                title: 'People watch Vince Vaughn movies',
                content : 'It is true. </p><em>Voluntarily</em>. All the while you bravely chose to attempt to decode existence. I salute you you beautiful clever tin of bitch.',
				src: 'img/blepSpaceCat' + $scope.isMobile + 'space-blep-cat-vince-vaughn.jpg',
				alt: 'Blep Cat does not like Vaughn movies - he is a bitch'
            },			
            {
                title: 'Don\'t worry. In 150 years no one will remember you',
                content : 'Today\'s Truth Missile of Truth missiling away truthfully, cutting through the shyte spectrum towards your pointless head-hole is this:' +
				'Always try your best. Or don\'t. It doesn\'t really matter, because in a relatively short amount of time you will be dead, no one will remember you, and nothing you ever did will have had any impact on the universe. LOVE. ~ ',
				src: '/img/spacesloth/' + $scope.isMobile + '/sloth-bin-of-deathless-infinite.jpg',
				alt: 'the Space Sloth says: You will be dead soon anyway so don\'t worry'				
            },
            {
                title: 'When the Universe was born, all the particles required to make a fully-realised \<em\>Piers Morgan\<\/em\> were present. Probably.',
                content : 'Although some of his anti-matter shame particles may have been created by a Neutron Star at a later date. But this is conjecture.',
				src: '/img/blepSpaceCat/' + $scope.isMobile + '/space-blep-cat-piers-morgan.jpg',
				alt: 'the Space Blep Cat does not like Piers Morgan'				
            },
            {
                title: 'NOBODY IS DIFFERENT',
                content : '',
				src: '/img/blepSpaceCat/' + $scope.isMobile + '/space-blep-cat-different.jpg',
				alt: 'the Space Blep Cat does not like Piers Morgan'				
            }				
        ]

        $scope.changeActiveblepCat = function (index) {
			console.log(index);
			$scope.activeblepCat = index;
        };

        $scope.forwardblepCat = function () {
            if ($scope.activeblepCat < [$scope.blepCats.length -1]) {
				$scope.back="fadeInRight";
				$scope.activeblepCat += 1;
			}
        };

        $scope.backblepCat = function () {
			if ($scope.activeblepCat > 0) {
				console.log($scope.activeblepCat);
				$scope.back="fadeInLeft";				
				$scope.activeblepCat -= 1;
			}
        };


    }]);

}());

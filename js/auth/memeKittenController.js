
(function() {

    var memekitten = angular.module('whelk.memeKitten', [
		'ngSanitize',
		'ngTouch'
	]);

    memekitten.controller('memeKittenController', ['$scope', function ($scope) {

		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.memeKittens= [
            {
                title: 'People Around',
                content : 'Don\'t have people around who don\'t have you around. If a people is real then they will want you around as well, even when you are being more rubbish than them, they will want you around still which is great for you.',
				src: '/img/memeKitten/meme-kitten-around.jpg',
				alt: 'Meme Kitten says don\'t have people around'
            },
            {
                title: 'Don\'t worry about falling over',
                content : 'Falling over can hurt, but it can be a useful way to show the fake people that you don\'t care',
				src: '/img/memeKitten/meme-kitten-falling-over.jpg',
				alt: 'Meme Kitten says don\'t be worried about falling over'
            },				
            {
                title: 'Don\t be ashamed of you',
                content : 'TRY NOT TO BE ASHAMED OF YOU EVEN IF YOU ATE ALL OF THE EGGS and are generally not that good',
				src: '/img/memeKitten/meme-kitten-ashamed.jpg',
				alt: 'Meme Kitten says don\'t be ashamed of you'
            },	
			{
                title: 'Don\t worry about all of the failing!',
                content : 'Sometimes you feel like you are failing! But this is really just you trying to be successing, which is Much Better for you. Keep Struggling because it is still worth it.',
				src: '/img/memeKitten/meme-kitten-failing.jpg',
				alt: 'Meme Kitten says keep struggling and don\t worry about all of the failures'
            },	
			{
                title: 'People can be like the Weather',
                content : 'DON\'T BE LIKE SOME WEATHER, BE LIKE A BEAUTIFUL LAKE AND DON\'T HURT SO MUCH XXX',
				src: '/img/memeKitten/meme-kitten-weather.jpg',
				alt: 'Meme Kitten says don\t be like some weather, be like a lake'
            },				
			{
                title: 'You are not rubbish!',
                content : 'Just because some people don\'t appreciate you, that does not make you rubbish!',
				src: '/img/memeKitten/meme-kitten-special-like-a-star.jpg',
				alt: 'Meme Kitten says your value isn\'t based on how quickly other people appreciate you'			
            },
			{
                title: 'Always Believe In You!',
                content : 'If you don\'t, then who will?',
				src: '/img/memeKitten/meme-kitten-believe-in-you.jpg',
				alt: 'the MemeKitten knows your pain but try to remember it doesn\'t exist'				
            }, 
			{
                title: 'Always Be You',
                content : 'Don\t not be you'+
				'Always be yourself, because if that isn\'t OK for Other People then they aren\'t good and should go away somewhere else, like a shoe factory a million miles away!!!! They should be a ‪#‎real‬ person too.',
				src: '/img/memeKitten/meme-kitten-be-yourself.jpg',
				alt: 'the Space Sloth knows your pain but try to remember it doesn\'t exist'				
            },		
            {
                title: 'Not Everyone Is Your Friend',
                content : 'Not everyone is your friend, just because they are nearby!',
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
			$scope.activememeKitten = index;
        };

        $scope.forwardmemekittens = function () {
            console.log($scope.activememeKitten + " " + [$scope.memeKittens.length -1]);
			if ($scope.activememeKitten < [$scope.memeKittens.length -1]) {
				console.log("opoo");
				$scope.back="fadeInRight";
				$scope.activememeKitten += 1;
			}
        };

        $scope.backmemekitten = function () {
			if ($scope.activememeKitten > 0) {
				console.log($scope.activememeKitten);
				$scope.back="fadeInLeft";				
				$scope.activememeKitten -= 1;
			}
        };


    }]);

}());

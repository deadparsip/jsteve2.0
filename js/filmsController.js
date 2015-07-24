

(function () {

    var pics = angular.module('whelk.films', ['ngSanitize']);

    pics.controller('filmsController', ['$scope', function ($scope) {

        $scope.films = [
            {
                title: 'SOLITUDE',
				content: 'An epic 4 hours one-man stage play, starring William Shatner, SOLITUDE is about a rusty bathtub alone with his thoughts in deep deep space.',
				src: '/img/films/solitude.jpg'
            },

			{
                title: 'Fruit Suitcase',				
				content: 'A film chronicling the unsung heroes of WW2, <Em>the fruits</em> who lived and died as other men, but were never remembered, like the penultimate beer',
				src: '/img/films/fruit-suitcase.jpg'
            },
            {
                title: 'GUN/FAE/MAN starring Ryan Gosling',
				content: 'He doesn&apos;t talk. Hardly at all. He just looks quite moody and shoots people.',
				src: '/img/films/gufama.jpg'
            },
            {
                title: 'Horse with a Pen',					
				content: 'The premise for this film came to me one afternoon, after several solid minutes of wondering about how horses can&apos;t do some things that we take for granted, like	looking behind themselves, laughing, shaving, sexing horizontally and writing. What better way to bring their plight to light, than to make a big budget weepy blockbuster with megastar Nic Cage in it?'+
				'You can thank me by being a little more sensitive to horses in future.',
				src: '/img/films/horseWithaPen.jpg'
            },
            {
                title: 'Something Happens: A New Generic Film',
                content: 'Starring Slightly Funny People and Slightly Attractive Woman, this film, where nothing really happens, features the tried and tested formula of Slightly Douchey Guy Has Slightly Hot'+
				'Girlfriend Who Is Tired of His Slight Douchieness But Tolerates Him With Good Humour Until He Does Something Silly And Confusion Abounds Then They Have A Fight.',
				src: '/img/films/genericfilm.jpg'
            },
            {
                title: 'CATNABBED',
                content: 'THEY TOOK THE WRONG GUY&apos;S CAT!<br>'+
				'This film, based on TrueLife@trade;, explores the events which take place after a burgler unwittingly steals a cat from a man who Dont Take No Sheeit.',
				src: '/img/films/catnabbed.jpg'
            },
            {
                title: 'Death Kestrel on a Trolley',
                content: 'Each Kestrel on a Trolley is more powerful than 7 hawks in a wheelbarrow or 4 eagles in a wheelie bin! So watch out you filthy intentional nipple slip!',
				src: '/img/films/trolleyofkettle.jpg'
            },
            {
                title: 'Space Badgers IV',
                content: 'In the early 90s I spent a few years living in Borundi. While I was there I came across a rare species of badger called the Space Badger (rough translation).'+ 
				'The space badger comes in all different sizes, and is different from the common badger in that it reproduces but laying eggs. This discovery, and the consumption of fourteen pints of the local home brew together inspired me to have a fitful night&apos;s sleep, and a fearsome dream that lasted over nine hours.'+
				'I dedicated the next decade of my life to turning this dream into a film.',
				src: '/img/films/space-badger.jpg'
            },
            {
                title: 'War badger 2',
                content: 'The hugely anticipated sequel to War Badger sees our hero try to rebuild his life after the terrible bit of war that he was near in the last film.'+
				'An interesting analysis of bits of war that, when near ordinary people (or badgers, geese, etc) can totes eff a guy up in the brain cupboard.',
				src: '/img/films/war-badger2.jpg'
            },
			{
				title: 'Vaguely Badgered',
				content: 'A film that based solely on a troubling dream that awoke me one night.',
				src:'/img/films/vaguely-badgered.jpg'
			},
			{
				title: '50 Maids Grey',
				content: 'An adaptation of my 50 Maids story, with extra octopii (octopussay? Octopusssess?)',
				src:'/img/films/50-maids-grey.jpg'
			},			
			{
				title: 'War Badger',
				content: 'A deeply moving and troubling portrayal of what happens when badgers are sent to war. Wars they don@apos;t believe in. A Platoon (with Badgers) for the 21st century (crossed with Rat Race and ConAir)',
				src:'/img/films/war-badger.jpeg'
			}
        ]

        $scope.changeActiveFilms = function (index) {
            $scope.activeFilm = index;
        };

        $scope.forwardFilm = function () {
            $scope.activeFilm += 1;
        };

        $scope.backFilm = function () {
            $scope.activeFilm -= 1;
        };        

    }]);
    

}());
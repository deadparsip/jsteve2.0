
(function() {

    var vagueWhelk = {};
    var app = angular.module("whelk", [
		"ngSanitize",
		"ngAnimate",
		"ngTouch"
	]);

    angular.module('whelk', [
        'whelk.main',
        'whelk.poetry',
        'whelk.pics',
        'whelk.films',
        'whelk.spaceSloth',
		'whelk.blepCat',
		'whelk.stories',
		'whelk.memeKitten',
		'whelk.blogs'		
    ]);

    var main = angular.module('whelk.main', ['ngSanitize']);

    main.controller('MainController', ['$scope', function ($scope) {
        $scope.h1 = 'ptere hralk';
        $scope.activeSection = 0;
        $scope.activePoem = 0;
        $scope.activePic = 0;
        $scope.activeFilm = 0;
		$scope.activespaceSloth =0;
		$scope.activeblepCat =0;
		$scope.activeStory = 0;
		$scope.activememeKitten = 0;
		$scope.activeblogs = 0;		
		$scope.back = "fadeInLeft";
		
		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
				
        $scope.changeActiveSection = function (index) {
			$scope.activeSection = index;
            $scope.sections[index].showContent = false;
        };
		
		
        $scope.forward = function () {
            if ($scope.activeSection < $scope.sections.length) {
				$scope.back="fadeInRight";
				$scope.activeSection += 1;
			}
        };

        $scope.backs = function () {
			if ($scope.activeSection > 0) {
				$scope.back="fadeInLeft";				
				$scope.activeSection -= 1;
			}
        };

        $scope.navs = [
        {
            link: 'home'
        },
        {
            link: 'poetry'
        },
        {
            link: 'blep cat'
        },			
        {
            link: 'bio'
        },
        {
            link: 'films'
        },
        {
            link: 'meme kitten'
        },		
        {
            link: 'space sloth'
        },
        {
            link: 'stories'
        },
        {
            link: 'pics'
        },
        {
            link: 'blogs'
        }		
        ]


        $scope.sections = [
        {
            name: 'Welcome the flip to my thought trolley',
            href: '',
            cover: '/img/welcometoJsteve.jpg',
            alt: 'welcome to jsteve.uk',
            desc: "<p>Who am I, you sweet sweet sack of bitch? Caster of Hexes, cuckolder of mind-kettles, vin de table. I am eleventy of all these things.</p>" +
                "<p>Poet, Dovahkiin, mage, film director, astral projectionist, part-time badger farmer, moth-worrier and table. These are just some of the things that people can be." +         
            "<p>-- this is where my mind shouts fall outs -- </p><p>FEEL FREE TO HAVE A LOOK ABOUT you coagulated glove-toaster. Sometimes things " +
            "here aren't that rubbish. </p><h3>New Things ---></h3><br><p>" +
			
			"<p>Today we say Goodbye to Brendan, he was a good sort, always up for a laugh, and an expert in statistinguics. Some Interesting facts about Brendan: <br> ~He has the strongest hair in the premier league <br> ~Growing up, he was the shortest man in Northern Ireland, so he moved to Leicester <br> ~He really likes possession, at home all his things are labelled 'BRENDANS' with sticky labels <br> ~ He once fell on top of his nose after listening to 'That's my leg!' by Phil Collins <br> ~ his lips are made from bark, nobody knows why <br><br> Here is a painting of Brendan to help you along x </p><img src='/img/doodles/brendan-rogers.png' alt='The Brendan Rogers is no more'/><br><br>" +
			
			"<p>Whenever life gets too much... take a break, go easy on yourself. ALWAYS REMEMBER JUST ONE THING</p><img src='/img/blepSpaceCat" +$scope.isMobile + "blep-space-cat-toomuch.jpg' alt='The Blep Space Cat would like to offer you some of the console'/><br><br>" +
			
			"<p>REMEMBER you do not know anything - but neither does anybody else!</p><img src='/img/spacesloth/space-sloth-knowledge.jpg' alt='The Space Sloth on knowledge'/><br><br>" +			
			
			"<p>Space Blep Cat! O EM GEE.</a></p>" +
			"<p>People watch Vince Vaughn movies. <br><em>Voluntarily</em>. All the while you bravely chose to attempt to decode existence. I salute you you beautiful clever tin of bitch.</p><img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-vince-vaughn.jpg' alt='the Space Blep Cat does not like Vince Vaughn movies'/><br><br>" +
			
			"<p><a class='link' href='http://www.thevaguewhelk.com/spaceBlepCat/index.html'>Here is a Space Blep Cats! Ahhh yeah! These guys know what they are talking about m8.</a></p><p>Don\'t let important things fly away into space!<br></p><img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-important-things.jpg' alt='the Space Blep Cat likes important things close by'/><br><br>" +
			
			"<p><a class='link' href='http://www.thevaguewhelk.com/spaceBlepCat/index.html'>Even more Space Blep Cats! Oh my gloves, I am so greasy now!</a></p>"+
			"<p>When the Universe was born, all the particles required to make a fully-realised <em>Piers Morgan</em> were present. Probably."+
			"Although some of his anti-matter shame particles may have been created by a Neutron Star at a later date. But this is conjecture.</p>" + 
			"<img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-piers-morgan.jpg' alt='the Space Blep Cat does not like Piers Morgan'/><br>	<br>" + 
			
			"<p><a class='link' href='http://www.thevaguewhelk.com/spaceBlepCat/index.html'>One more Space Blep Cats for your lovely bitch faces! If you aren\'t fully mad yet</a></p><img src='/img/blepSpaceCat" + $scope.isMobile + "space-blep-cat-different.jpg' alt='the Space Blep Cat does not like Piers Morgan'/><br><br>",
			
            templateUrl: '',
            showContent: true
        },
        {
            name: 'Poetries',
            href: 'http://www.thevaguewhelk.com/poetry',
            cover: '/img/banners/poetry.jpg',
            alt: 'welcome to jsteve.uk',
            desc: "<p>When the poetries falls out of my face part, approximately 39% gets caught in my beard, so I shake it off into the flip-matrix where it can lead a happier life. " +
                   "(The rest I hide where the moth-bodies are)If the Twitter is 300 million identical souls shouting desperately and incoherently into the enormous black void of the eternal gulf of cosmic nihility, my poetry hive is a sweet " + "meaningful sherbet lemon tree humming quiet sense in a profound but moderately-sized corn field with a nice cat in it.<br>" +
                      "<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
            templateUrl: 'poetry.html',
            showContent: true
        },
		{
            name: 'Blep Cat',
            href: 'http://www.thevaguewhelk.com/poetry',
            cover: 'img/blepSpaceCat/' + $scope.isMobile + 'space-blep-cat-vince-vaughn.jpg',
            alt: 'Blep Cats',
            desc: "<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
            templateUrl: 'blep-cat.html',
            showContent: true
        },		
        {
            name: 'Bio of a fully Jon Stevens',
            href: 'http://www.thevaguewhelk.com/bio',
            cover: '/img/hallwayPosters1.jpg',
            alt: 'welcome to jsteve.uk',
            desc: "<p>Poetician, Guru, night-time Russian boxer, Liverpool striker, Man About Town 1998 (Croydon), sometime-moth-destroying trouserless sage:  I am many things to many people. Let me die in in the barrel!</p>" +
                  "<p class='go'>My life story you string of ham holding a bitch --></p>",
            templateUrl: 'bio.html',
            showContent: true
        },
        {
            name: 'Films',
            href: 'http://www.thevaguewhelk.com/bio',
            cover: '/img/films/war-badger2.jpg',
            alt: 'War Badger 2',
            desc: "<p>A series of films spanning a deflating 12 year career as a screenwriter/director in papua new guinea.</p><br> " +
                "<p>Some of these films were severely not that good, but that all came from deep within, like heart-coal, so judge not negatively, lest yea" +
                "be buried in some crows outside the Penge Conservative Club with all the benefits people.</p><p class='go'>Go and look at the films you lovely pile of bitch --></p>",
            templateUrl: 'films.html',
            showContent: true
        },
		{
            name: 'Meme Kitten',
            href: 'http://www.thevaguewhelk.com/poetry',
            cover: 'img/memeKitten/space-blep-cat-vince-vaughn.jpg',
            alt: 'Blep Cats',
            desc: "<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
            templateUrl: 'meme-kitten.html',
            showContent: true
        },
        {
            name: 'Space Sloth',
            cover: '/img/spaceSloth/sloth-bin-of-deathless-infinite.jpg',
            alt: 'The Space Sloth speeketh!',
            desc: "<p>Wisdimz from the Great Space Sloth! He will blow your mind like a sex-worker therapist with a stun-enema. That is a mind properly blown. His words will almost certainly make your wig go back son!</p>" +
                  "<p class='go'>Go and heed the Space Sloth's words you radish patch and herb garden bitch --></p><br>",
            templateUrl: 'space-sloth.html',
            showContent: true
        },
		
        {
            name: 'Short stories',
            cover: '/img/films/war-badger2.jpg',
            alt: 'The Space Sloth speeketh!',
            desc: "<p>Fables from the broken witterings of a troubled sleep that occasionally make wet and always eventually engage like a troubled gear.</p><br>" +
                    "<p class='go'>Go and look at some of the stories you uncultured but attractive bitch! --></p>",
            templateUrl: 'stories.html',
            showContent: false
        },
		
        {
            name: 'Doodles',
            href: 'http://www.thevaguewhelk.com/pics/index.html',
            cover: '/img/spaceCat1.jpg',
            alt: 'Space CAT',
            desc: "<p>Pictures can engage you like a jealous rage, or they can pass by unnoticed like a shopping trolley with new wheels. Either way, potatoes.</p><br>	" +
                  "<p class='go'>Go and look on the doodles --></p><br>",
            templateUrl: 'pics.html',
            showContent: false
        },
		{
            name: 'Blogs',
            href: 'http://www.thevaguewhelk.com/blog/index.html',
            cover: '/img/banners/reluctant-aubergine.jpg',
            alt: 'Blogs',
            desc: "<p>Bogs are mind shouts that fell into the internet. Some of them I have managed to catch and put down, humanely. This has nothing to do with this part of the site. </p><br>" +
                  "<p class='go'>Go and look on the blogs --></p><br>",
            templateUrl: 'blogs.html',
            showContent: false
        }
		]
		
        $scope.showContent = function (index) {
            if (index > 0) {
				console.log(index + " show");
				$scope.sections[index].showContent = !$scope.sections[index].showContent;
			}

		}			
		
    }]);
   

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3&appId=441624989266596";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

	

}());


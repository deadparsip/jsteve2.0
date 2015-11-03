
(function() {

    var blogs = angular.module('whelk.blogs', [
		'ngSanitize',
		'ngTouch'
	]);

    blogs.controller('blogsController', ['$scope', function ($scope) {

		$scope.isMobile = (window.innerWidth < 500) ? '/mobile/' : '/';
		$scope.back = "fadeInLeft";
        $scope.blogs= [
            {
                title: 'RULES of social media TO BE OBEYED ALL OF THE TIMES',
                content : '<p>Am I getting old or was the woman just lying? As a species we are getting weirder, and the social framework within which we are all imprisoned, scratching our groins and incoherently gibbering, becomes evermore complex and seemingly arbitrary in this the shiny new age of INTERNETS. Let us not embrace the weirdness but maybe clear it up so we all UNDERSTAND the RULES fully and are all ON BOARD*.</p> <p>Here I attempt to explain some of the more unusual rules/customs for those that still retain some sanity/dignity.</p><ol><li>Go on social media and wish happy birthday to people who AREN\'T ON SOCIAL MEDIA, i.e 1 year old nephew, dead celebrity, deranged auntie, etc. Doesn\'t make sense? JUST DO IT. IT\'S THE RULES. Always remember social media ISN\'T about real life or making sense. People who try to tell you to make sense have miserable faces and Rules instead of hands. Why can\'t you command your favourite singer to R.I.P? So what they won\'t see it? So what it is utterly futile? Please try  to avoid ignore the creeping realisation that you are merely shouting into the electronic  void like a 21st century Shakespearean character.</li><li>Take a PHOTOGRAPH of a pint of beer/glass of wine/mojito etc. and SHARE the EFF out it. Just telling the world you are drinking is NOT ENOUGH, SHOW THEM TOO. They simply won\'t believe you otherwise. And then NOBODY will know for sure that you are having fun. And then in that case are you really having fun?</li><li>If you are a girl or a sufficiently inane bloke and you are on holiday, obligatory photograph of legs must ensue. <br> Optional book-on-top-of-legs. IF book is one you wish the world to know you are reading, i.e. 50 SHADES etc.<br> Very unlikely in majority of cases anyone wants to see your pins but THESE ARE THE RULES and must be obeyed. <br> Also try to adjust angle of shot so that your legs look as much like frankfurters as possible. Bonus points for including semi-smug comment about how tough your Monday is, life is hard right now, etc. etc.<br></li> <li>If you are thinking of joining a dating site, you MUST go on holiday and take a PHOTO of yourself cuddling a dejected TIGER/LION. ALL profile pictures must be captioned with CITY photo was taken in, and DATE, even if photo is a selfie taken in a HOTEL ROOM and could be ANYWHERE IN THE WORLD for all it matters.</li><li>If you are COMMENTING on a youTube thread, you MUST pretend that you are a 9th Level black belt metaphysical solipsist and absolutely reject the concept of other people as independent beings with own thoughts, feelings or opinions. Other people are merely projections of your inner self, and any opinions offered which differ to yours are declarations of war which have to be obliterated in the fiercest and most vociferous manner before schizophrenia sets in and you DIE OF PAIN and UGLY. If you are not sure how to attack, usually a reference to your foe\'s age (\'you are JUST A LITTLE KID\'), or the state of their anus (\'why you so butthurt bruh\') is a good opening foray. As a last resort you can declare them TROLLS. Once you do this all their opinions become void and YOU WIN.</li>	<li>If uploading a PHOTO to Instagram, you MUST include as MANY HASHTAGS AS POSSIBLE, even if they are seemingly pointless ones, like #DAYTIME, #PICTURE, #HAND, #GROUND, #SKY #HAT #ME etc. <br>No one ever searches these hashtags so it is utterly futile BUT A) IT\'S THE RULES and B) STOP KIDDING YOURSELF LIFE ITSELF IS FUTILE and C)rules are for SQUARES. But let\'s not examine that too much right now. Please try not to linger on the creeping realisation that you are a herd animal and doing things for no particular reason other than perhaps the vague compulsion mimic your peers.</li><li>If you are a GURL and are ANNOYED at someone, DO NOT TELL THEM. Upload a picture to the Facebooks which has some WORDS on it, which vaguely describe how you are FEELING. i.e.\'REAL WOMEN DON\'T HAVE TIME FOR WASTEMANZ, REAL WOMEN NEED REAL MEN\', or \'LIFE ISN\'T ABOUT HOW STRONG YOUR SANDWICH IS, BUT HOW MANY TIMES YOU CAN GET BACK UP AGAIN\' etc. These pictures usually have a lovely lovely background, like a waterfall, or a lake or something, to make them extra profound.</li><li>If you are on the TWITTER and see a link to an interesting article, RETWEET IT IMMEDIATELY even if it was originally tweeted by someone everyone in entire known universe ALREADY FOLLOWS and has ALREADY SEEN. Remember twitter is NOT about passing on useful/interesting links but TELLING THE WORLD YOU FOUND THEM AND LIKE THEM so you are totes cool.</li><li>If a female friend uploads a selfie to ANY social media, you must immediately and gushingly tell them THEY ARE UTTERLY UTTERLY SOCK-SHRINKINGLY BEAUTIFUL. If you are also female, you MUST use the word HUN as much as possible when doing this. If you are male feel free to also use word HUN but be prepared to be judged DAMNINGLY like a guilty beaver.</li><li>If you ever find yourself in LAS VEGAS, or ANYWHERE that you deem to be quite a cool place, any PHOTOS you upload must include the words "[vegas||placename] BABY" in the caption. This usefully tells the world that A) the place you are in is totes cool and B) that you are fully aware of this fact, and this is the reason you are actually there - i.e. you are totes cool also</li><li>GURLS: If you are being photographed and you suspect the photograph may end up on social media, then you MUST:<br>1. Stand slightly sideways<br> 2.Turn one foot out 3. Place one hand on thigh 4. Pout like a Babel fish retching up it\'s ribs. If you miss any one of these things YOU WILL IMMEDIATELY DIE AND LOOK FAT AT THE SAME TIME. And as any fule know, following these rules MAKES EVERYONE BEAUTIFUL.</li><li>Celery.</li></ol><small>*see #2 in series, weird things people SAY now</small>',
				src: '/img/memeKitten/meme-kitten-around.jpg',
				alt: 'Social media RULES'
            },
            {
                title: 'Pointless to Phone ratio (5:1)',
                content : '<p>If you could bear with MYSELF for a moment, I will get your details up and be with YOURSELF in just one moment..</p><p>Bear with....</p><p>Bear with....</p><p>Bear with....</p><p>Bear with....</p><p>Now did you say YOURSELF\'S name was.....</p><p>............</p><p>..?</p><em>Oh sorry was that a question or am I just the crazy?</em><br><em>...well, MYSELF\'s name is, er.... never mind I am going to lie down because of the things</em><br>	<p>Excellent. Have I resolved all your issues for you today in a professional and profound and enjoyable way that left you satisfied yet slightly motivated to call us again soon?</p><p>......</p><br> <p>I didn\'t set fire to the body at that point although it would have catharted the flip out of me right then.</p>'
            },
            {
                title: 'An overheard conversation #111',				
                content : '<p>I am LITERALLY such a geek! I went to the zoo last week AND I like the Doctor Who! ohhhh so embarrassing but I am a totes geek! :) You got me :)</br>* note to self, buy a geek t-shirt as am defo a geek *'
            }		
            		
        ]

        $scope.changeactiveblogs = function (index) {
			$scope.activeblogs = index;
        };

        $scope.forwardblogs = function () {
            console.log($scope.activeblogs + " " + [$scope.blogs.length -1]);
			if ($scope.activeblogs < [$scope.blogs.length -1]) {
				$scope.back="fadeInRight";
				$scope.activeblogs += 1;
			}
        };

        $scope.backblogs = function () {
			if ($scope.activeblogs > 0) {
				$scope.back="fadeInLeft";				
				$scope.activeblogs -= 1;
			}
        };


    }]);

}());

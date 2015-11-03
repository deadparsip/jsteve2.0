
(function () {

    var pics = angular.module('whelk.pics', ['ngSanitize']);
	
    pics.controller('picsController', ['$scope', function ($scope) {
		$scope.back="fadeInLeft";	
		$scope.opac = "opac";
		
        $scope.pics = [
           {
               title: 'the Brendan Rogers',
               content: 'Today we say Goodbye to Brendan, he was a good sort, always up for a laugh, and an expert in statistinguics. Some Interesting facts about Brendan: <br> ~He has the strongest hair in the premier league <br> ~Growing up, he was the shortest man in Northern Ireland, so he moved to Leicester <br> ~He really likes possession, at home all his things are labelled \'BRENDANS\' with sticky labels <br> ~ He once fell on top of his nose after listening to \'That\'s my leg!\' by Phil Collins <br> ~ his lips are made from bark, nobody knows why <br> Here is a painting of Brendan to help you along x', 
			   src : '/img/doodles/brendan-rogers.png',
			   alt: 'Leaf of Agitation!'
           },
		   {
               title: 'Leaf of Agitation',
               content: 'Leaf! Leaf of Agitation! When you are cleary frightened in your leaf-parts, I worry for you. Please relax, leaf ',
			   src : '/img/leaf-of-agitation.jpg',
			   alt: 'Leaf of Agitation!'
           },
		   
           {
               title: 'Reluctant Aubergine.',
               content: 'Weep not, weep not, dear friend. Dear friend with your satisfyingly yielding, yet firm flesh. Your reticence brings a tear to my eye. 	   You who were so positive a vegetable up until the hamsters came. Hold my hand as I attempt to eat your face parts gently. Guilty, but sated.			Come here you bitch blaster. See you in the void, old friend. ',
			   src: '/img/banners/reluctant-aubergine.jpg',
			   alt: 'Reluctant Aubergine.'
           },
		   
           {
               title: 'Cat.',
               content: '',
			   src: '/img/spaceCat1.jpg',
			   alt: 'SPACE CAT.'
           },

		   
           {
               title: 'Bean of Ambivalence',
               content: '',			   
               src:'/img/beanOfAmbivalence.jpg',
			   alt: 'Bean of Ambivalence'
           },        	  
		   
		   
	
	
           {
               title: 'The Hatie Kopkins',
               content: '',			   
               src:'/img/doodles/katie-hopkins.gif',
			   alt: 'The Hatie Kopkins'
           },        	  
           {
               title: 'The STEVIE GERRARD (sadcryface)',
               content: '',			   
               src:'/img/doodles/stevie.gif',
			   alt: 'The STEVIE GERRARD'
           },        	  
           {
               title: 'The Arsene Wenger',
               content: '',			   
               src:'/img/doodles/arsene-wenger-philosopher.gif',
			   alt: 'The Arsene Wenger'
           },        	  
		  
		  
       	  {
               title: 'The Jeremy Clarkson',
               content: '',			   
               src:'/img/doodles/jeremy-clarkson.jpg',
			   alt: 'Bean of Ambivalence'
           },		   
		   
      	  {
               title: 'The Steve Bruce',
               content: '',			   
               src:'/img/doodles/steve-bruce.gif',
			   alt: 'The Steve Bruce'
           },			   
           {
               title: 'Bienvenida the Rafa you are the geez!',
               content: '<img src="/img/doodles/rafaAndAncellotti.gif" alt="Rafa Benitez hath gone Real Madrids"/>'+
			        '<div class="fb-share-button" data-href="http://www.thevaguewhelk.com/pics/index.html#Rafa" data-layout="button_count"></div>'+			
			        '<!--<div class="fb-comments" data-href="http://www.thevaguewhelk.com/junk/buzzfeedheadlinegenerator.html" data-width="300" data-numposts="15"></div>-->'
           },
		   
		   {
               title: 'Putin and Stepp Bladder on holiday now',
               content: '<p>Mr Putin did not like the way the US authorities forgot about jurisdictions and arrested some of the FIFA people. </p>'+
                    '<p>As an ambassador for sovereign integrity and international tables, he of course came to the defence: <br>' +
                    'This is yet another blatant attempt [by the United States] to extend its jurisdiction to other states.<br></p>' +
                    '<img src="/img/doodles/putinandsepp.gif" alt="Sepp Blatter on the hols lols with mr Putin"/>'
           },		   
        ]

        $scope.changeActivePic = function (index) {
            $scope.activePic = index;
        };

        $scope.forwardPic = function () {
            if ($scope.activePic < [$scope.pics.length-1]) {
				$scope.back="fadeInRight";
				$scope.activePic += 1;
			}
        };

        $scope.backPic = function () {
			if ($scope.activePic > 0) {
				$scope.back="fadeInLeft";
				$scope.activePic -= 1;
			}
        };

        

    }]);
    

}());
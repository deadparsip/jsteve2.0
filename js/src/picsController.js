

(function () {

    var pics = angular.module('whelk.pics', ['ngSanitize']);

    pics.controller('picsController', ['$scope', function ($scope) {

        $scope.pics = [
           {
               title: 'Putin and Stepp Bladder on holiday now',
               desc: '<p>Mr Putin did not like the way the US authorities forgot about jurisdictions and arrested some of the FIFA people. </p>'+
                    '<p>As an ambassador for sovereign integrity and international tables, he of course came to the defence: <br>' +
                    'This is yet another blatant attempt [by the United States] to extend its jurisdiction to other states.<br></p>' +
                    '<img src="/img/doodles/putinandsepp.gif" alt="Sepp Blatter on the hols lols with mr Putin"/>'
           },
           {
               title: 'Bienvenida the Rafa you are the geez!',
               desc: '<img src="/img/doodles/rafaAndAncellotti.gif" alt="Rafa Benitez hath gone Real Madrids"/>'+
			        '<div class="fb-share-button" data-href="http://www.thevaguewhelk.com/pics/index.html#Rafa" data-layout="button_count"></div>'+			
			        '<!--<div class="fb-comments" data-href="http://www.thevaguewhelk.com/junk/buzzfeedheadlinegenerator.html" data-width="300" data-numposts="15"></div>-->'
           }
        ]

        $scope.changeActivePic = function (index) {
            $scope.activePic = index;
        };
    }]);
    

}());

(function() {

    var poetry = angular.module('whelk.poetry', ['ngSanitize']);

    poetry.controller('poetryController', ['$scope', function ($scope) {

        $scope.poems = [
            {
                title: 'Wet Sock',
                content : 'my cruel fate<br>'+
                'o capricious cosmos<br>' +
                'delivered impassive and cold<br>' +
                'like last night&apos;s beans,<br>' +
                'What twisted evil this? <br>' +
                'befallen my not yet cloven hoof <br>' +
                'deliver me from wet sock before I strike out with my existence!'
            },

             {
                title: 'My face',
                content: '<p>ALL OVER MY FACE<br>' +
                    '<em>like a finger</em><br>' +
                    'MY FACE IS NOT BRAILLE, MADAM<br>' +
                    'please evacuate my face<br>' +
                    '<em>Do not linger</em><br>' +
                    'YOU READ ME INCORRECTLY<br>' +
                    'I am for the fully sighted and the polite only<br>' +
                    'SEE MY FACE, SEE IT CLEARLY<br>' +
                    'for it is a FACE, round thing on a neck part<br>' +
                    '<em>not a resting place for digits of the lonely!</em><br><br>'
            },
            {
                title: 'A chimeric music man',
                content: '<h3><em>Wouldst thou discredit me with your fibs?</em></h3>' +
                    '<p>A man with features<br>' +
                    'taken from instrument (crept onto a face)<br>' +
                    'I little understand<br>' +
                    'what he but meant<br>' +
                    '"Wouldst thou buy my frogs?"<br>' +
                    '"Your nose is a trumpet?"<br>' +
                    '"Wouldst thou buy my socks?<br>' +
                    '"Your mouth reedy clarinet!?"<br>' +
                    '<em>"Circumcise your insensitive jibes, and speak of business matters alone, lest I strike you down like a weasel earthquake!"</em></p>	' +
                    '<p>my suspicion allayed<br>' +
                    'as warm concrete batter<br>' +
                    '(with no apparent incline)<br>' +
                    'I would buy many elements<br>' +
                    'it would attempt to flatter<br>' +
                    'to assign any real function<br>' +
                    'trinkets, a trifle, a bibelot<br>' +
                    '"This molecule scraper, it lacks for a handle"<br>' +
                    '"Mine pancreas resembles a hammond organ?"<br>' +
                    '"Your vibrating paintbursh, perhaps missold?"<br>' +
                    '"You of weakened wit may not comprehend functions beyond your field, desist your ignoble ignominy and cease your libellous leakage, ' + 'lest I smite you as a bongo botherer"</p>' +
                    '<p>It was thus I was misled<br>' +
                    'bereft of money and reputation<br>' +
                    '(that I deserved mostly)<br>' +
                    'laughed out of town<br>' +
                    'home and even yet police station<br>' +
                    '"His face was banjolele!"<br>' +
                    '"You speak asunder."<br>' +
                    '"His eyes mere flaps of tamborine"<br>' +
                    '"Your insolence a wonder. Cease your witterings lest I set about you like a warren-full of beavers; Get out!"<br><br>' +
                    'It was thus I learned I was irretrievably, inescapably insane.' +
                    '<em>fin</em>' +
                    '</p>' +
                    '<img class="img-responsive" src="/img/chimericmusicman.jpg" alt="chimerica music man, poem"/>'
            },
            {
                title: 'Dental Negligence',
                content: '<p>Dental Negligence<br>' +
                    'is not a hippo<br>' +
                    '<em>despite all evidence to the contrary</em><br><br>' +
                    '<em>fin</em></p>'
            },
            {
                title: 'What',
                content: '<p>fate, loftily conspired<br>' +
                    'lucidity had yet fluffed those pillows <br>' +
                    'called upon like some pavement<br>' +
                    'with a face lacking grip, stability and litter<br>' +
                    'he expected very little from that encounter<br>' +
                    'setting fire to the moth was the only way out<br>' +
                    'sorry<br><br>' +
                    '<em>fin</em>' +
                    '</p>'
            },
            {
                title: 'Fourth Trouser and Sadly the moth',
                content: '<p>A stride beyond his usual dominion<br>' +
                    'legs confounded, pockets compounded<br>' +
                    'incapable of valued opinion - <br>' +
                    'being so wrought<br>' +
                    'Fourth Trouser had thought, <br>' +
                    'VERY LITTLE OF NOTE, <br>' +
                    'for three hundred years.<br><br>' +
                    'he finished eating the moth Sadly<br>' +
                    'and sliced himself in the seat several times before hiding the body from the authorities.<br><br>' +
                    '<em>fin</em></p>'
            },
            {
                title: 'Circle, the vicious water pool',
                content: 'With a watery spleen <br>' +
                    'and frothing grin<br>' +
                    'your foul swirling ripples<br>' +
                    'send my socks in a spin<br>' +
                    'extempore pivotings<br>' +
                    'improbable splishings<br><br>' +
                    'egg stains are sent <br>' +
                    'to their frothy graves<br><br>' +
                    'assigned reservoirs that rarely match'
            },
            {
                title: 'Lairy the Wren',
                content: 'Woken from induced mollification<br>' +
                    'lairy wren, frothing, quoth him<br>' +
                    'I am committed to danger!<br>' +
                    'I will lay my bloody wings upon thee!<br>' +
                    'my wings will chaos arrange her<br>' +
                    'sadly his sentence was lost and sounded very similar to some insanity<br>' +
                    'he established a colony in my kidney				<br>' +
                    'he smoked a pipe in my horror-show<br>' +
                    'when the tobacco, moistend, fell out and about<br>' +
                    'interesting bibilots were fashioned below<br>' +
                    'sadly they looked like droppings from a fevered nought and smelt much like some insanity'
            },
            {
                title: 'Higgs Boson lick my face particles you sexy quantum bastard',
                content: 'Warm me in your tiny ubiquitous quantum field, <br>' +
                    'gently lick my non sweaty bod,<br>' +
                    'I deride you not with my liberal use of commas<br>' +
                    'I fear you as a god,<br>' +
                    'if we were constantly at the speed of light <br>' +
                    'I would be quite a sweaty beast,<br>' +
                    'you give mass to lucky electrons, <br>' +
                    'like a tiny floating magnetic priest,<br>' +
                    'with a 5 sigma recording <br>' +
                    'you are probably the genuine article,<br>' +
                    'Higgs boson lick my atoms <br>' +
                    'you most celebrated elementary particle'
            },
            {
                title: 'HAIRY BLUE CHEESE WHY WONT YOU EAT ME BACK?',
                content: 'Oh cheese, my friend, my food, errant from my plate<br>' +
                    'cheese of blue<br>' +
                    'and hairy hue<br>' +
                    'won&apos;t you stop crying and come back to my plate?<br>' +
                    'You used to be there<br>' +
                    'right next to the biscuit<br>' +
                    'biscuit of brown and inescapable frown<br>' +
                    'biscuit that goes all the way down<br>' +
                    '(eventually to my bottom parts).<br>' +
                    'Come back to me, cheese, I&apos;ll treat you right<br>' +
                    'Try not to eat you<br>' +
                    'or force you to fight<br>' +
                    'the Quiche or the biscuit, or fridge cheese container parts<br>' +
                    'I might eat a bit, would that be OK?<br>' +
                    'If you say no, that&apos;s totes OK.'
            },
            {
                title: 'An existential leak',
                content: 'Leak, get out of my bucket <br>'+
                    'Leak, your natural role in the universe<br>'+
                        'as vegetable, destined for soup pot<br>'+
                        'clutch at ye with this misunderstanding!<br>'+
                        'Attempting to force water from my bucket<br>'+
                        'Don&apos;t you understand, leak?<br>'+
                        'THAT IS THE WRONG TYPE OF LEAK<br>'+
                        'please<br>'+
                        'It is time to adjust yourself to the correct'
            }
        

        ]

        $scope.changeActivePoem = function (index) {
            $scope.activePoem = index;
        };
    }]);

}());

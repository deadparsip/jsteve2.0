
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
                content: 'ALL OVER MY FACE<br>' +
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
                content: '<em>Wouldst thou disc' +
                    '' +
                    '' +
                    'redit me with your fibs?</em>    ' +
                    'A man with features' +
                    'taken from instrument (crept onto a face)<br>' +
                    'I little understand<br>' +
                    'what he but meant<br>' +
                    '"Wouldst thou buy my frogs?"<br>' +
                    '"Your nose is a trumpet?"<br>' +
                    '"Wouldst thou buy my socks?<br>' +
                    '"Your mouth reedy clarinet!?"<br>' +
                    '<em>"Circumcise your insensitive jibes, and speak of business matters alone, lest I strike you down like a weasel earthquake!"</em>' +
                    'my suspicion allayed<br>' +
                    'as warm concrete batter<br>' +
                    '(with no apparent incline)<br>' +
                    'I would buy many elements<br>' +
                    'it would attempt to flatter<br>' +
                    'to assign any real function<br>' +
                    'trinkets, a trifle, a bibelot<br>' +
                    '"This molecule scraper, it lacks for a handle"<br>' +
                    '"Mine pancreas resembles a hammond organ?"<br>' +
                    '"Your vibrating paintbursh, perhaps missold?"<br>' +
                    '"You of weakened wit may not comprehend functions beyond your field, desist your ignoble ignominy and cease your libellous leakage, ' + 'lest I smite you as a bongo botherer"' +
                    'It was thus I was misled<br>' +
                    'bereft of money and reputation<br>' +
                    '(that I deserved mostly)<br>' +
                    'laughed out of town<br>' +
                    'home and even yet police station<br>' +
                    '"His face was banjolele!"<br>' +
                    '"You speak asunder."<br>' +
                    '"His eyes mere flaps of tamborine"<br>' +
                    '"Your insolence a wonder. Cease your witterings lest I set about you like a warren-full of beavers; Get out!"<br><br>' +
                    'It was thus I learned I was irretrievably, inescapably insane.' +                    
                    '<img class="img-responsive" src="/img/chimericmusicman.jpg" alt="chimerica music man, poem"/>'
            },
            {
                title: 'Dental Negligence',
                content: 'Dental Negligence<br>' +
                    'is not a hippo<br>' +
                    '<em>despite all evidence to the contrary</em><br><br>'
            },
            {
                title: 'What',
                content: 'fate, loftily conspired<br>' +
                    'lucidity had yet fluffed those pillows <br>' +
                    'called upon like some pavement<br>' +
                    'with a face lacking grip, stability and litter<br>' +
                    'he expected very little from that encounter<br>' +
                    'setting fire to the moth was the only way out<br>' +
                    'sorry<br><br>'
            },
            {
                title: 'Fourth Trouser and Sadly the moth',
                content: 'A stride beyond his usual dominion<br>' +
                    'legs confounded, pockets compounded<br>' +
                    'incapable of valued opinion - <br>' +
                    'being so wrought<br>' +
                    'Fourth Trouser had thought, <br>' +
                    'VERY LITTLE OF NOTE, <br>' +
                    'for three hundred years.<br><br>' +
                    'he finished eating the moth Sadly<br>' +
                    'and sliced himself in the seat several times before hiding the body from the authorities.<br><br>'
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
            },
            {
                title: 'Man with a ladder',
				content: 'A man with ladder,<br>'+
				    'a stepped contrivance<br>'+
				    'wooden and bold<br>'+
                    'enabling defiance<br>'+
                    'of land based arguments<br>'+
                    'and rungs too old<br>'+
                    'fist nor foot able to hold<br>'+
		            '<em>(even if you used chalk)</em><br>'+
                    'quickly decided to end it&apos;s life'+
				
                    'the man with the ladder,<br>'+
                    'an evil device<br>'+
                    'wrathful and mighty<br>'+
                    'was gripped in a vice<br>'+
                    'a vice of iron <br>'+
                    'tightened with shame<br>'+
                    'to a point where breathing was a bit of a pain<br>'+
                    '<em>(even if you used a bicycle pump)</em><br>'+
                    'quickly decided to plead for mercy<br><br>'+
				
                    'the corpse with the ladder,<br>'+
                    'an apparition allayed<br>'+
                    'fugacious vice killer<br>'+
                    'rungs bloodily sprayed<br>'+
                    'As if in prayer<br>'+
                    'the Gods answered not<br>'+
                    'former owner&apos;s head now tied in a knot<br>'+
                    '<em>(not sure which kind, I never liked sailors much)</em><br>'+
                    'decided to hold his counsel<br><br>'
            },
            {
                title: 'Not actually a Paradoxical frog',
                content: 'Paradoxical Frog <br> '+
				    'Quivered upon leaf <br>'+
				    'Strung tight with strings of strain <br>'+
				    'Then loosened like roasted beef<br>'+
				    'Paradoxical Frog <br> '+
				    'Dictated letters of recrimination <br>'+
				    'Glossed with gloopy grief <br>'+
				    'Then rinsed like post masturbation.<br>'+
				    'Paradoxical Frog <br>Apologised to his crew <br>'+
				    'Dubiously dusted with doubt <br>' +
				    'Cleansed of anger with morning dew<br>	'               
            },
            {
                title: 'Berlusconi',
                content: 'Berlusconi<br>'+
                    'was licking a pony<br>' +
				    'which he thought resembled some fraud<br>'+
				    'but a kinky tycoon<br>'+
				    'addicted to poom poom<br>'+
				    '<em>will almost certainly fall off and break an eyelid if he isn&apos;t careful</em><br><br>'+
		 
				    'Berlusconi<br>'+
				    'was holding a party<br>'+
				    'gripping it tight round the neck<br>'+
				    'an ex-prime minister<br>'+
				    'with trousers quite sinister<br>'+
				    '<em>may well irritate the People of freedom and its right wing chums if he isn&apos;t a bit careful</em>'+
		 
				    'Berlusconi<br>'+
				    'was addressing a crowd<br>'+
				    'trying to find a big stamp<br>'+
				    'a corporate lord<br>'+
				    'will inevitably get bored<br>'+
				    '<em>perhaps undressing them would be a more sensible approach, if of course you are careful with the zip parts</em><br><Br>'+
		 
		 
				    'Berlusconi<br>'+
				    'was coming back from the dead<br>'+
				    'without even using a map.<br>'+
				    'even a priapic zombie<br>'+
				    'with less integrity than romney<br>'+
				    '<em>may lose to Bersani&apos;s Democratic Party coalition which could lead to a shaky coalition government, and a hung Parliament. If he isn&apos;t careful.</em><br><br>'
            },
            {
                title: 'Oboe in a grubby beaker',
                content : '	Improvised vessel for my voluminous vanity<br>'+
				'Subduer of stolen and now stationary sound<br>'+
				'When I woke up next to a beaker<br>'+
				'I was dismayed at what I found<br>'+
				'Perpendicular pipe of facial wind<br>'+
				'Misconstrued my desires<br>'+
				'And conspired to be binned<br>'+
				'Inside a grubby beaker<br><br>'+
		
				'As I loomed aloft<br>'+
				'and peered without heart<br>'+
				'cold and oblivious (like a clown in space)<br>'+
				'My oboe, once rigid musical part<br>'+
				'rested woefully inside the grubby place<br>'+
				'lacking sorely for facial wind, respect and a friendly aperture.<br>'+
				'I am bereft of oboe.<br><br>'+
				
				'>Professionally and worryingly narrated by my former friend and co-worker <a href="pictures.html#feizelCat">Feizel Kidia</a><br>'+
				'<audio controls="controls">Your browser is in love with my wooden buttock.<source src="audio/oboe.mp3" type="audio/mpeg"></audio>'
            },
            {
                title: 'Passing asunder an errant buttock',
                content: 'It was early in the day<br>'+
				    'yet late in the morning<br>'+
				    'when buttocky feelings<br>'+
                    'soon came dawning<br>'+
                    'In a strange place of waking<br>'+
                    'a nervousness accame <br>'+
                    'dry humping my head<br>'+
                    'spawning shame<br>'+
                    'What happens to buttocks<br>'+
                    'during the night<br>'+
                    'When buttockless legs<br>'+
                    'are resting without sight<br>'+
                    'They multiply and sing<br>'+
                    'But not at the same time<br>'+
                    'that would be weird guy<br>'+
                    'Straight down the line<br>'+
                    'My buttock was inside me<br>'+
                    'Nestling my kidney<br>'+
                    'Singing out of tune<br>'+
                    'What sounded like Whitney<br>'+
                    'What followed therafter<br>'+
                    'I recount with a shudder<br>'+
                    'I defecated my buttock<br>' +
                    'I passed it asunder'
            }
        ]

        $scope.changeActivePoem = function (index) {
            $scope.activePoem = index;
        };

        $scope.forwardPoem = function () {
            $scope.activePoem += 1;
        };

        $scope.backPoem = function () {
            $scope.activePoem -= 1;
        };


    }]);

}());


(function() {

    var poetry = angular.module('whelk.poetry', [
		'ngSanitize',
		'ngTouch'
	]);
	    
	
    poetry.controller('poetryController', ['$scope', function ($scope) {
		$scope.back = "fadeInLeft";
		
        $scope.poems = [
            {
                title: 'New blebs!',
                content : 'prostrate, flattened <br> the tribute shifted <br> insidious eye contact threw me  <br>  I set fire to the moth carefully <br> guilty but never beguiled'
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
                title: 'Moths 1',
                content : 'An indignant flutter <br>invidious squint <br>beneath  aroused antennae <br>intentions cast as impulsions <br>I hid your moth body twice beneath a clock'
            },			
			
			{
                title: 'Wet Sock',
                content : 'my cruel fate<br>' +
                'bestowed by a capricious cosmos<br>' +
                'delivered impassive and cold<br>' +
                '(like angel delight)<br>' +
				
                'What twisted circumstance? <br>' +
				'What limit man&apos;s endurance?<br>'+
                'What sorry state hath <br>' +
				'befallen my not yet cloven hoof<br>' +
                'deliver me from wet sock!<br>' +
				'I did not sign up for this'
            },			
            {
                title: 'A chimeric music man',
                content: '<em>Wouldst thou discredit me with your fibs?</em><br>' +
                    'A man with features <br>' +
                    'taken from instrument (crept onto a face)<br>' +
                    'I little understand<br>' +
                    'what he but meant<br>' +
                    '"Wouldst thou buy my frogs?"<br>' +
                    '"Your nose is a trumpet?"<br>' +
                    '"Wouldst thou buy my socks?<br>' +
                    '"Your mouth reedy clarinet!?"<br>' +
                    '<em>"Circumcise your insensitive jibes, and speak of business matters alone, lest I strike you down like a weasel earthquake!"</em><br><br>' +
                    'my suspicion allayed<br>' +
                    'as warm concrete batter<br>' +
                    '(with no apparent incline)<br>' +
                    'I would buy many elements<br>' +
                    'it would be to flatter<br>' +
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
            },
			{
				title: 'A Cautionary Christmas Tale',
				content:'Provocatively positioned<br>'+
				'Precariously perched<br>'+
				'Armpit Boris<br>'+
				'larily lurched<br>'+
				'falteringly flailing<br>'+
				'and dangerously decorating<br>'+
				'resting atop ladder<br>'+
				'mistakenly masturbating<br><br>	'+
				'Crushing his christmas<br>'+
				'with daredevil decisions<br>'+
				'Armpit Boris<br>'+
				'lacking in luck<br>'+
				'fell to his death <br>'+
				'destroying a duck<br>'+
				'<em>and slowly died on top of the new carpet</em><br><br>'+
				'<em>epilogue</em><br>'+
				'OH WOE, woe is me!<br>'+
				'he certainly cried <br>'+
				'before remembering his deathly condition<br>'+
				'at which point he held his counsel<br>'+
				'and lay there <br>'+
				'until february the 3rd whereupon his occasional pet cat Graham found him and licked his nose unsatisfactorily.<br><br>'
			},
			{
				title:'Nutcrackerz',
				content: 'And Nutella did shout and curse out loud<br>'+
					'What would you have me do now, o Sea<br>'+
					'Latvian sea that could not be<br>'+
					'The sea remained silent<br>'+
					'For it could not see<br>'+
					'A wise course of action for the young maniac<br><br>'+
					'And what of you, young crab of red<br>'+
					'crab that scuttles, over the shallow sea bed<br>'+
					'The crab that existed only in the mind and head<br>'+
					'of a young and deranged creature<br>'+
					'Who&apos; sanity had long since fled<br>'+
					'who was lost in a whirling tundra of screaming thoughts and NGmailings<br>'+
					'That the crab would hold its counsel again confirmed<br>'+
					'There was no answer to her maniacal bewailings<br><br>'+
					'Would you have me kill again, O latvian frog?<br>'+
					'Frog found squished<br>'+
					'in the petering bog<br>'+
					'Frog with capacity for inciting such interrogation<br>'+
					'An imaginary creature that hails from a frogless nation<br>'+
					'The frog&apos;s reticence only confirmed<br>'+
					'The killing again plan<br>'+
					'was most coldly affirmed<br>'	
			},
			{
				title: 'Intolerant of irrelevance',
				content: 'Lying down, unregarded<br>(like a crumb)<br>Salient Michael, a man fully broken<br>no longer relevant to any, but<br>'+
					'oaf, simpleton, cretin or newsagent<br>rather than change his name<br> slowly died on top of the transponder<br><br>'
			},
			{
				title:'Prodigious underpant',
				content:'Prodigious underpant<br>in a fit of conscience<br>decided to wrap buttocks<br>in a less sinister manner<br>"I have sinned" he'+
				'cried<br>his muffled confession<br>Clarified naught....<br>'
			},
			{
				title: 'A seal named Gerrard',
				content:'(The back parts of a curly bracket)'+
					'A seal named Gerrard<br>with his fins upon the floor<br>swam accross my slumber<br>and thought he saw much more<br>'+
					'sleeping in human form<br>he misconstrued my needs<br>swapping my spine for a curly bracket<br>despite my plaintive pleas<br>'+
					'I live not on a keyboard!<br>I counselled him most wisely<br>But all I said was sadly in vain<br>as he told me nicely<br>'+
					'you resemble in my eyes<br>some sort of punctuation<br>you&apos;re clearly mad, you&apos;re no more human <br>than I am oceanic'+ 'crustacean<br>I killed him and set fire to the body before realising that I was probably going to be stuck this way for life.'
			},
			{
				title:'Harmonic Spatula&apos;s tidy thoughts',
				content: 'Left behind<br><em>like a comb</em>'
			},
			{
				title:'Furious milk',
				content:'Furious Milk<br>happened by chance<br>to mend his shoe<br>after committing his aunts<br><em>who had both become irretrievably '+
				'and fundamentally insane</em><br><br><em>earlier..</em><br><br>Furious Milk<br>broke his blisters<br>tripping upon bacon<br>'+
				'after killing his sisters<br><em>who had both become inexplicably and copiously herbivore</em><br><br>Furious milk<br>'+
				'smashed his sandals<br>cracked upon bones<br>	running on vandals<br><em>who had both purposefully and malevolently desecrated his brothers'+'graves</em><br><Br>Furious milk<br>wet his socks<br>uncontrollably laughing<br>dancing in smocks<br><em>which had both belonged profusely'+
				'and incapably to his mother</em><br><Br>Furious milk<br>ended her life<br>realisation dawning<br>insanity was rife<br>'+
				'<em>in a family all now inescapably and vigorously dead</em><br><br>'
			},
			{
				title:'Intransiently transient',
				content:'fermenting gently<br>on definite parts of his brain<br>Nascent thoughts brewing<br>not entirely made of sane<br>'+
				'<em>struck wonderously affirmed</em><br><br>"I will not kill again!"<br>cried the dangerous caterpillar<br>Then he killed the moth four'+
				'times and set fire to the body again<br>which just goes to show, really.'
			},
			{
				title: 'Simon',
				content:'Nightly prowlings<br>a steamy tread<br>those plastic bags<br>carry the dead<br>hackney hookers<br>'+
					'paid a price most dear<br><em>like errant hagglers in a foreign currency of despair</em><br><br>'+
					'this tear streaked chimera<br>with her satchel of destruction<br>corduroyed product manager <br>lacks compunction<br>'+
					'cries for help<br>a spirit so absent<br><em>lamentations fall on ears made of cloth</em><br><em>like a nuclear dog you are' + ' unexpected and foul</em><br><br>'
			},
			{
				title: 'Lungbash',
				content:'<p>Lungbash wasn\'t a cloth<br> but he wasn\'t a gate <br> what he sometimes wasn\'t, <br>was a wooden red eight<br>he didn\'t be wetter, or ninety minutes late <br>he tried not being bricked in <br>he was never a country fete<br><em>Lungbash was an extremely badly restored baroque bow-fronted corner cabinet with mild depression.</em><br><br>'
			},	
			{
				title: 'Psires the wooly reason',
				content:'<p>And Psires wept and wailed and wheezed<br>and cursed out loud<br>his unsatisfactory knees<br>each and every season<br>it was said he became<br>	not a lot unlike<br>a very unlikely reason<br>(like a dehydrated fish in the sea)<br><br>And he didn\'t fit or match or please<br>his legs and his feet<br>	were more relevant than his knees<br>which were said to leak tizer<br>and renovate peas<br>	but what psires was<br>	was a very wooly reason<br>(like a failing bicep in a breeze)<br><br>Applied to an effect, an outcome or a meal<br>Psires fitted not<br>and sadly wasn\'t real<br>he lacked any sense<br>and an ability to kneel.<br>so he killed himself and set fire to the body three times before disapearing forever<br><br>'
			},	
			{
				title: 'Newly wet poetry! Not about horses! Aaaaah',
				content:'<p>piersmorgan faces - huge and sinister<br>garrulous floating ballbag<br>undulating with pointlessness <br>alone is prone to sag<br>	quivering with obsequiousness in the presence of celebrity crack <br>browning up like a hungry worm	<br>a slavering greasy former hack<br>you are not quite a worm <br>	you are @piersmorgan faces'
			},	
			{
				title: 'Beefy Bob',
				content:'<p>Beefy Bob<br>awoke with a throb<br>momentarily forgetting<br>he was surgical swab<br>and was incapable of throbbing,<br>lobbing<br> or bobbing<br><br><em>or describing a watermelon with accuracy</em><br><br><em>so he stabbed himself in the cloth four times before hiding the body from the authorities</em><br><br>'
			},	
			{
				title: 'Fully Hilt was odd',
				content:'<p>Fully Hilt,<br>gallantly untroubled,<br>upon withdrawing support<br>for sinful snails<br>flippantly precipitated <br>increased trousers sales<br>(though leg counts had doubled)<br>(after a terrible evolution)<br>and therefore had no actual part to play in the events outlined above<br><br>sorry<br><br>'
			},	
			{
				title: 'Potatoes',
				content:'<p>freshly dug up potato<br>O nameless fellow of the soil<br>tell me do you have a soul<br>do your mourn your peaty bed?<br>your silence speaks in volume<br>I really hate it when I find myself in these situations<br>I will eat your face gently<br><em>then set fire to myself in shame</em><br><br>'
			},	
			{
				title: 'Tin of Things',
				content:'<p>a tin I found on a mat one day<br>contained little more<br>than egg and dismay<br>it stiffed me up<br>with it\'s lid of misleading<br>	resting atop metal lip<br>like a robotic moustachioed ceiling<br><em>like one of my socks<br>you contain no biscuits<br>AND I HATE YOU</em><br><br>upon inspection the following week<br>the tin contained<br>some egg and some leek<br>I had been wrong all along<br>				<Em>so I killed myself and set fire to the tin threeteen times</em><br><br>	'
			},	
			{
				title: 'Porrig was a jealous frog, with lips of envy and nostrils of want',
				content:'<p>Porrig was a jealous frog<br>a frog that could not see<br>a frog at odds<br>in petering bogs<br>because he could not be<br><br>Porrig was jealous of all the frogs<br>jealous of their lillies<br>and jealous of their logs<br>but the problem with Porrig<br>the problem you see<br>	Was Porigg\'s colour matched his jealousy<br><br>Porrig was green all over himself<br>green in the pond<br>and green on the shelf<br>green in the toilet<br>and green in bed<br>green from his legs to the top of his head<br>So poor Porrig decided<br>to be ANGRY instead<br><br>	'
			},				
			{
				title: 'beady eyed bastard',
				content:'<p>your tiny beady eyes<br>gripping, squinting, blinking consternation<br>like belligerent rectums, forced to yield,<br>to inexorable defecation<br>flick across that porcine brow<br>evincing a closed uncompromising perspective<br>Your eyes may as well be noughts, sir<br>and join your faecal emitting aperture collective<br><br><em>fin</em><br><br>'
			},			
			{
				title: 'Titty of Fear',
				content:'<p>O titty of fear<br>why rustle my ear<br>I cannot hear your lamentations!<br> like a naked shark<br>your disconsolate hark<br><em>is confusing and frightening in equal measure</em><br><br>your anguished cries <br>wet not my eyes <br>I am deaf to your muffled agitations!<br>oblivious to your plaint<br>I have yet to acquaint<br>the cause of your grief<br>I see no relief<br><em>like a murderous elephant in a balloon, you confuse and frighten me in equal measure</em><br><br>oh titty of fear<br>with your murderous howl<br>please be more titty<br>	and relax on the foul<br><br>until my fear is no longer fully realised<br><br>'
			},			
						{
				title: 'Astral projections',
				content:'As I floated back down to the point,<br>the point I had left very much aggrieved<br>my projected ambivalence had been quite rude <br>		the antipathy there, I had not conceived <br>it seemed I hadn\'t actually murdered the point<br>there and then I felt casually relieved - (like a urination in a sports jacket)<br><em>I celebrated on Tony\'s meat face, she is the pizza-cake I grew up with before I turned out this way</em><br><br>The point I returned to after my physical absence<br>broadened in my vision like an elaborate spot<br>I felt quite secure the point had survived<br>but as I landed aground I saw it had not<br>the point my ambivilance had surely offended<br>had packed it\'s bags and gone for a trot<br><em>I started to panic and I cut up a local wren that had seen everything and was giving it large</em><br><br>'
			},			
			{
				title: 'Tearing asunder my friend\'s cod roe',
				content:'<p>tearing asunder my friend\'s cod roe<br>I had no consideration for the plight of his toe<br>attached to his body but not on the leg <br>' +'my friend\'s only option a fish with no head<br>but fish on the toe is not quite the cure <br>	for misplaced appendages I am reasonably sure. <br>'+'so I\'m not sorry for my actions and I refuse to stop the killing. <br><br>'
			},						
			{
				title: 'Phil Collins cares not for the nerves in my toe',
				content:'<p>when phil collins trod on my foot<br>with his leg of drumming<br>and his shoe of faith<br>this treader of toe<br>'+
				'this invader of space<br>did cry unto my legs<br>did stare at my face<br>who is this musical foe<br>this lyrical clodhopper<br>'+
				'this stepper on toe<br>this deaf drummer of lore<br>this prog-rock mofo?<br>this questionable cockerny<br>this despoiler of chukkers<br>'+
				'<em>These questions remain unanswered to this day, and it is for this reason that when he offers to take me to paradise I am not altogether sure.</em><br>'
			},			
			{
				title: 'Newly wet poetry! About horses! Aaaaah',
				content:'<h4>Cautiously Ahorse</h4><p>I am cautiously<br>Ahorse<br>But no longer,<br>of course<br>Than a normal man standing next to a chicken.</p>'+
				'<p>But I\'m longer<br>Of course<br>Than a cautious<br>horse<br>	That no longer can stand the taste of chicken</p><p>When you are no longer<br>'+
				'Of course<br>A cautious<br>Horse<br>Please get out of my kitchen<br><em>I don\'t like imagining reckless quadripeds in my cooking areas. Get out!' +
				'</em><br><em class="small">~* Unless you are the burgler part that stole my oven! Come back please!</em>	<br><Br>'				
			},						
			{
				title:'Why is there soy sauce on my face?',
				content: '<p>When all is not <br>quite as it seems<br>Soy sauce on your face<br> Isn\'t as pleasant as you might deem<br></p><p>For a brown quality liquid<br>You could do a lot worse<br>But resting on my face<br>Is not the customary place<br>For for a sauce-based liquid or even a purse.</p><p>A cat on my hand<br>Would be less out of place<br>Than a brown salty liquid<br>Resting on my face<br>Am I a freak destined to watch life through the locked bars of insanity for the rest of my days or was the woman just joking?</p><p>So please get off my face<br>Go and find a sushi to rest on<br>	If you don\'t aquiesce<br>I will soak you up to death with a napkin.<br><br>'
			}
        ]

        $scope.changeActivePoem = function (index) {
            $scope.activePoem = index;
        };

        $scope.forwardPoem = function () {
			$scope.back="fadeInRight";
			if ($scope.activePoem < $scope.poems.length) {
				$scope.activePoem += 1;
			}
        };

        $scope.backPoem = function () {
			$scope.back="fadeInLeft";
			if ($scope.activePoem > 0) {
				$scope.activePoem -= 1;
			}
        };		

	
    }]);

		
}());

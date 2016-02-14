		jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {

					command = command.trim();

				switch(command){
					case 'help':term.echo('about: see who I am \nemail: contact me (I\'d love to hear from you!) \ngithub: see my github page \nlinkedin: see my linkedin page \nproject: learn about my past projects \nworkshop: see my steam workshop projects');
						break;
					case 'about': term.echo('I\'m a junior at Cornell University. I study Computer Science and will minor in Electrical and Computer Engineering.');
						break;
					case 'project': term.echo('A few of my personal projects are \nbig_red_app\nred_events\nmaster_speech\nleap_theremin\nlabyrinth\nmelons2melons\nType project [project_name] to find out more!');
						break;
					case 'email': term.echo('I would love to hear from you! You can contact me at trevedwa@gmail.com');
						break;
					case 'github': term.echo('Check out my github at https://github.com/TrevorEdwards');
						break;
					case 'linkedin': term.echo('View my LinkedIn at https://www.linkedin.com/in/trevedwards');
						break;
					case 'workshop': term.echo('I modded games in high school. See my favorites on my Steam Workshop: http://steamcommunity.com/id/tb002/myworkshopfiles/');
						break;
					case 'project big_red_app': term.echo('I maintain an open source Android app for Cornell students, and now I own the repository for it!  See it here: https://github.com/TrevorEdwards/bigredapp-android');
						break;
					case 'project red_events': term.echo('I needed a back end for Big Red App, so I created the RedEvents API.  See it here: https://github.com/TrevorEdwards/RedEvents');
						break;
					case 'project master_speech': term.echo('We made a speech-practicing app at BrickHack 2015.  Check it out: http://devpost.com/software/master-speech');
						break;
					case 'project leap_theremin': term.echo('We made a theremin using a leap motion at my first hackathon, HackBU.  Take a look: http://devpost.com/software/leap-theremin');
						break;
					case 'project labyrinth': term.echo('One of my mods from high school: players try to escape a maze inhabited by minotaurs.  See it here: https://steamcommunity.com/sharedfiles/filedetails/?id=233263749');
						break;
					case 'project melons2melons': term.echo('What if you could play pictionary in 3d?  That\'s what I set out to make here: https://steamcommunity.com/sharedfiles/filedetails/?id=173087050');
						break;
					case 'arbitrary': term.echo('               .-. \'.-\'\r\n                __\\\/____\r\n              .\'        \'.\r\n             \/            \\         \/\\.\/\\\r\n            \/              \\        |   |\r\n           \/                \\       \\   \/\r\n         ~|      _           |~~~~~~~| |~~~~~\r\n        \/~|     \/ )          |^~~~~^~| |~^~^\/\r\n       \/~~|    (o\/            \\~^~~~\/  \/~^~\/\r\n      \/~^~\\__                  \\__.\'  \/~^~\/\r\n     \/~~~~~~\/________________________\/~^~\/\r\n    \/~^~^~^^~^~^^~^~^~^~^^~^~^~^^~^~^~^~\/\r\n   \/~^~^~^~^^~^~^~^~^^~^~^~^~^^~^~^~^~^\/\r\n   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', {
							finalize: function(div) {
							div.css("color", "blue");
							}
						});
						break;
					case 'yam': term.echo('               .,;>>%%%%%>>;,.\r\n            .>%%%%%%%%%%%%%%%%%%%%>,.\r\n          .>%%%%%%%%%%%%%%%%%%>>,%%%%%%;,.\r\n        .>>>>%%%%%%%%%%%%%>>,%%%%%%%%%%%%,>>%%,.\r\n      .>>%>>>>%%%%%%%%%>>,%%%%%%%%%%%%%%%%%,>>%%%%%,.\r\n    .>>%%%%%>>%%%%>>,%%>>%%%%%%%%%%%%%%%%%%%%,>>%%%%%%%,\r\n   .>>%%%%%%%%%%>>,%%%%%%>>%%%%%%%%%%%%%%%%%%,>>%%%%%%%%%%.\r\n  .>>%%%%%%%%%%>>,>>>>%%%%%%%%%%\'..`%%%%%%%%,;>>%%%%%%%%%>%%.\r\n .>>%%%>>>%%%%%>,%%%%%%%%%%%%%%.%%%,`%%%%%%,;>>%%%%%%%%>>>%%%%.\r\n >>%%>%>>>%>%%%>,%%%%%>>%%%%%%%%%%%%%`%%%%%%,>%%%%%%%>>>>%%%%%%.\r\n >>%>>>%%>>>%%%%>,%>>>%%%%%%%%%%%%%%%%`%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n >>%%%%%%%%%%%%%%,>%%%%%%%%%%%%%%%%%%%\'%%%,>>%%%%%%%%%%%%%%%%%%%%.\r\n >>%%%%%%%%%%%%%%%,>%%%>>>%%%%%%%%%%%%%%%,>>%%%%%%%%>>>>%%%%%%%%%%.\r\n >>%%%%%%%%;%;%;%%;,%>>>>%%%%%%%%%%%%%%%,>>>%%%%%%>>;\";>>%%%%%%%%%%%.\r\n `>%%%%%%%%%;%;;;%;%,>%%%%%%%%%>>%%%%%%%%,>>>%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n  >>%%%%%%%%%,;;;;;%%>,%%%%%%%%>>>>%%%%%%%%,>>%%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n  `>>%%%%%%%%%,%;;;;%%%>,%%%%%%%%>>>>%%%%%%%%,>%%%%%%\'%%%%%%%%%%%%%%%%%%>>.\r\n   `>>%%%%%%%%%%>,;;%%%%%>>,%%%%%%%%>>%%%%%%\';;;>%%%%%,`%%%%%%%%%%%%%%>>%%>.\r\n    >>>%%%%%%%%%%>> %%%%%%%%>>,%%%%>>>%%%%%\';;;;;;>>,%%%,`%    `;>%%%%%%>>%%\r\n    `>>%%%%%%%%%%>> %%%%%%%%%>>>>>>>>;;;;\'.;;;;;>>%%\'  `%%\'         ;>%%%%%>\r\n     >>%%%%%%%%%>>; %%%%%%%%>>;;;;;;\'\'    ;;;;;>>%%%                  ;>%%%%\r\n     `>>%%%%%%%>>>, %%%%%%%%%>>;;\'        ;;;;>>%%%\'                   ;>%%%\r\n      >>%%%%%%>>>\':.%%%%%%%%%%>>;        .;;;>>%%%%                   ;>%%%\'\r\n      `>>%%%%%>>> ::`%%%%%%%%%%>>;.      ;;;>>%%%%\'                  ;>%%%\'\r\n       `>>%%%%>>> `:::`%%%%%%%%%%>;.     ;;>>%%%%%                  ;>%\r\n        `>>%%%%>>, `::::`%%%%%%%%%%>,   .;>>%%%%%\'                   ;>%\r\n         `>>%%%%>>, `:::::`%%%%%%%%%>>. ;;>%%%%%%                    ;>%\r\n          `>>%%%%>>, :::::::`>>>%%%%>>> ;;>%%%%%\'                     ;>%,\r\n           `>>%%%%>>,::::::,>>>>>>>>>>\' ;;>%%%%%                       ;%%\r\n             >>%%%%>>,:::,%%>>>>>>>>\'   ;>%%%%%.                        ;%%\r\n              >>%%%%>>``%%%%%>>>>>\'     `>%%%%%%.\r\n              >>%%%%>> `@@a%%%%%%\'     .%%%%%%%%%.\r\n              `a@@a%@\'    `%a@@\'       `a@@a%a@@a\'');
						break;
					default:
						try{
							var result = window.eval(command);
							if (result !== undefined) {
								term.echo(new String(result));
							}
						} catch(e) {
							term.echo('Unrecognized command: '+e+'. Type help for commands');
						}
						break;
				}
        } else {
           term.echo('');
        }
    }, {
				completion: [
					'help',
					'about',
					'yam',
					'arbitrary',
					'project',
					'workshop',
					'linkedin',
					'email',
					'github'
				],
        greetings: 'Welcome to Trevor\'s Personal Site!  Type help for commands',
        name: 'TrevorTerminal', //not necessary
        height: 800,
        prompt: '\u27B3 '});
});

const Discord = require('discord.js');
const { prefix } = require('./config.json');
const token = process.env.token;
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// pyxelpranav
var members = ['510329448357429280'];
var limes = [215];

//trev
members.push('568342089591685120');
limes.push(100000399);

//zeke
members.push('437016280445222932');
limes.push(25000);

//hippiefresh
members.push('589550662547800064');
limes.push(1190);

//karma
members.push('221648732368666627');
limes.push(1585);

//snapple
members.push('270337506581544961');
limes.push(11675);

//sarah
members.push('463165936275554304');
limes.push(1218);

//holden
members.push('335742772722270208');
limes.push(45);

//dino
members.push('281525414520946689');
limes.push(592);

//effot
members.push('312414193259249668');
limes.push(35);

// betherzelli
members.push('504194785288912896');
limes.push(120);

//gordon ramsay
members.push('566066628824137740');
limes.push(70);

//ajsonic
members.push('616609825224130561');
limes.push(180);

//sienna guac
members.push('418543492663476227');
limes.push(20);

//shadow warrior
members.push('422819550992531456');
limes.push(15);

//bobe
members.push('559392459524800514');
limes.push(555);

//miamiala
members.push('541605885374365717');
limes.push(210);

//doggeagoden
members.push('588465678571405441');
limes.push(15);

// jingle
members.push('307701567019024384');
limes.push(145);

// miles edgeworth
members.push('497554422931652608');
limes.push(10);

//davo90k
members.push('534084798419828773');
limes.push(25);

//nathan the man
members.push('631216443861499943');
limes.push(10);

// seanthekill
members.push('461202532623056917');
limes.push(10);

//envolant
members.push('320771763237552128');
limes.push(5);

//im just bacon
members.push('459849126851510272');
limes.push(20);

// prragyaa
members.push('566242994408259585');
limes.push(115);

// ultra lime manager
members.push('636109710579204099');
limes.push(5000);

// retired on day 1
members.push('538199266607235072');
limes.push(15);

// too bad
members.push('446135079996227584');
limes.push(15);

//snipershan
members.push('492711291836956678');
limes.push(45);

//austin
members.push('131947629088079872');
limes.push(25);

//robloxgamer1
members.push('474143572073906195');
limes.push(15);

//hwyl
members.push('640994547966410772');
limes.push(15);

//cameron kobara
members.push('474820785291132929');
limes.push(45);

//Tymatt
members.push('305564823356178432');
limes.push(90);

//Blazes
members.push('351721870917238784');
limes.push(145);

// ADAM SALAH
members.push('595208635009990679');
limes.push(85);

// Lawn Mower
members.push('383697086098702337');
limes.push(60);

// Creevey the Kitten
members.push('298510008709283844');
limes.push(30);

// Parker.
members.push('184142231161012224');
limes.push(30);

// Skribbla
members.push('642400947829604387');
limes.push(15);

// Austin
members.push('131947629088079872');
limes.push(30);

// danicic31
members.push('561333071236956181');
limes.push(50);

// Arnor
members.push('332881071052029954');
limes.push(15);

// djzach
members.push('400120958121410561');
limes.push(30);

// *Coke*
members.push('594339713339621386');
limes.push(30);

// i get electrocuted
members.push('604719429284265995');
limes.push(25);

// Tylund
members.push('351830700007227393');
limes.push(15);

// Manu
members.push('602359275758682146');
limes.push(170);

// Mashu
members.push('318688423739392000');
limes.push(369);

// Nicknoodles
members.push('493914187509006356');
limes.push(20);

// Hirijo
members.push('298159528468414464');
limes.push(35);

// Moshi
members.push('519649125063458827');
limes.push(220);

// Sarah1
members.push('214818650647953409');
limes.push(100);

// Jif
members.push('376145282683109379');
limes.push(25);

// beep
members.push('264530664639037441');
limes.push(65);

// Zac991
members.push('625843905967161365');
limes.push(10);

// egbean
members.push('513811538155667486');
limes.push(110);

// willtreaty5
members.push('525068062689329175');
limes.push(25);

// Vluby
members.push('627623217233657897');
limes.push(15);

// im just bacon
members.push('627623217233657897');
limes.push(90);

// Plushy
members.push('551785306253426708');
limes.push(10);

// anthony5408498958945
members.push('421755946767876108');
limes.push(10);

// Memmaw
members.push('359624483717382148');
limes.push(25);

// 13yearoldnoob
members.push('587002571135123476');
limes.push(10);

// iceguy163
members.push('460248756873330738');
limes.push(45);

// Drunken Springtrap
members.push('302237216908902410');
limes.push(15);

// JayGamerPro
members.push('490993144402280449');
limes.push(65);

// Thomas The Dank Engine
members.push('460502437015453717');
limes.push(5);

// Xenomorth
members.push('639234943549046804');
limes.push(95);

// Hickla
members.push('551873933213827094');
limes.push(85);

// Electric Yammie
members.push('570673408556269580');
limes.push(15.69);

// Crazzy
members.push('352509356182339584');
limes.push(1.2);

// Bronwyn10
members.push('614347706646659076');
limes.push(135);

// Master
members.push('551128834595094530');
limes.push(50);

// Coastal
members.push('560630830175879170');
limes.push(20);

// Pookie
members.push('450085125515116544');
limes.push(15);

// brattybottom
members.push('562164253163913218');
limes.push(15);

client.on('message', message => {
	if(message.content.startsWith(`${prefix}commands`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;acc <user> - Checks the amount of limes in that users account\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;leaderboard - View the lime leaderboard\n;ranks - View LGA ranks\n;uniform - View LGA uniform\n;status - View your rank in LGA\n;moh - View the recipients of the Medal of Honour\n;servers - View the territory of Lime Green Nation');
	}


	if(message.content.startsWith(`${prefix}help`)) {
		message.channel.send('**Ultra Lime Manager Commands**\n--------------------------------------\n;balance - Check your balance\n;event - Check the upcoming event\n;acc <user> - Checks the amount of limes in that users account\n;commands - Open up the commands list\n;help - Open up the commands list\n;bio <legend> - View the bio of an LGA legend\n;leaderboard - View the lime leaderboard\n;ranks - View LGA ranks\n;uniform - View LGA uniform\n;status - View your rank in LGA\n;moh - View the recipients of the Medal of Honour\n;servers - View the territory of Lime Green Nation');
	}

	if(message.content.startsWith(`${prefix}october uniform`)) {
		message.channel.send('**Recruiting Uniform for October**\nCPRs item of the month(1500 coins)\nhttps://cdn.discordapp.com/attachments/570520105700687882/630552410682687520/Screenshot_1.png');
	}

	if(message.content.startsWith(`${prefix}balance`)) {
		let member = -1;
		for(i in members) {
			if(message.member.id == members[i]) {
				member = i;
			}
		}

		if(member >= 0) {
			message.channel.send('You have ' + limes[member] + ' limes!');
		} else {
			message.channel.send('You have ' + 0 + ' limes!');
		}
	}

	if(message.content.startsWith(`${prefix}acc`)) {
		var member = message.mentions.members.first();
		if(member != undefined) var id = member.id;
		var wowo = -1;

		for(i in members) {
			if(id == members[i]) {
				wowo = i;
				console.log(wowo);
			}
		}

		if(wowo >= 0) {
			message.channel.send('That account contains ' + limes[wowo] + ' limes!');
		} else {
			message.channel.send('That account contains ' + 0 + ' limes!');
		}

	}
	
	if(message.content.startsWith(`${prefix}count`)) {
		if(message.member.id == '510329448357429280') {
			setTimeout(function() {message.channel.send('1111111111111111111');}, 1000);
			setTimeout(function() {message.channel.send('2222222222222222222');}, 3000);
			setTimeout(function() {message.channel.send('3333333333333333333');}, 6000);
		} else {
			message.channel.send('This is a pyxel-only command.');	
		}
	}

	if(message.content.startsWith(`${prefix}event`)) {
		message.channel.send('__Upcoming events__\nhttps://www.limegreenarmy.com/p/events.html\nhttps://www.limegreenarmy.com/p/events.html\nhttps://www.limegreenarmy.com/p/recruiting-events.html');
	}
	
	if(message.content.startsWith(`${prefix}ranks`)) {
		message.channel.send('LGA ranks can be found on this page: https://www.limegreenarmy.com/p/ranks_17.html');
	}
	
	if(message.content.startsWith(`${prefix}uniform`)) {
		message.channel.send('LGA uniform can be found on this page: https://www.limegreenarmy.com/p/uniform_17.html');	
	}

	if(message.content.startsWith(`${prefix}addmoney`)) {
		var member = message.mentions.members.first();
		if(member != undefined) var id = member.id;
		var wowo = -1;

		for(i in members) {
			if(id == members[i]) {
				wowo = i;
				console.log(wowo);
			}
		}

		if(wowo >= 0) {
			if(message.member.id == 510329448357429280) { limes[wowo] += 5;
			message.channel.send('5 limes were added to the account specified.'); }
		} else {
			message.channel.send('Invalid account');
		}
		
	}
	
	if(message.content.startsWith(`${prefix}underprior`)) {
		message.channel.send('You expire. ( ͡° ͜ʖ ͡°)');
	}
	
	if(message.content.startsWith(`${prefix}who is joe`)) {
		message.channel.send('joe mama');	
	}
	
	if(message.content.startsWith(`${prefix}bio greeny`))  {
		message.channel.send('**Greeny(2013)**\nHaving been apart of every official LGA generation to-date, Greeny15390 started his journey in the Lime Green Army at their creation on April 5th, 2013. He was leading during both their runs in 2014 and brought LGA back during the summer of 2016 and once again during the summer of 2019.');
	}

	if(message.content.startsWith(`${prefix}bio fresh`))  {
		message.channel.send('**Moonwalker(2013)**\nAlso known as Fresh, Moonwalker started his run in LGA during their first generation in 2013. Being one of the original members, Moonwalker would rejoin the LGA leadership during the summer of 2019.');
	}

	if(message.content.startsWith(`${prefix}bio dmt`))  {
		message.channel.send('**Doctor Mine Turtle(2013)**\nDespite being creator of one of LGAs biggest rivals of 2013, DMT had multiple stints as leader in the early generations of LGA. He was leader various times through the years of 2013 to 2014.');
	}

	if(message.content.startsWith(`${prefix}bio sam`))  {
		message.channel.send('**Sam21619(2013)**\nAlong with Greeny, Sam21619 was one of the main leaders for the entirety of 2014. He was leader during both of LGAs stints during this year and was very active during this time.');
	}

	if(message.content.startsWith(`${prefix}bio memmaw`)) {
		message.channel.send('**Memmaw(2016)**\nThough he would play a small part in LGAs previous generations, Memmaw wouldnt officially become LGA leader until their final generation under Disneys Club Penguin during the summer of 2016.');
	}

	if(message.content.startsWith(`${prefix}leaderboard`)) {
		message.channel.send('**Lime Green Army Leaderboard**\n1. Greeny - ' + limes[1] + ' limes | __LGA LEGEND__ |\n2.Fresh - ' + limes[3] + ' limes | __LGA LEGEND__ |\n3. Karma - ' + limes[4] + ' limes\n4. Snapple - ' + limes[5] + ' limes\n5. SARAH - ' + limes[6] + ' - *Currently viewing top 5 richest penguins*');
	}
	
	if(message.content.startsWith(`${prefix}moh`)) {
		message.channel.send('Medal of Honour recipients are as follows: \nToo44 (2013)\nFresh (2013)\nTom67678 (2013)\nTyler56567 (2013)\nEpicolizard (2013)\nSkyfish (2013)\nWarriorsrevenge (2013)\nMasterTanic (2013)\nPopcorny (2014)\nJustinfortsa (2014)\nAndy21441 (2014)\nEmperor Flor (2014)\nAy12 (2014)\nRyu (2014)\nApollo (2014)\nDunno (2014)\nArceus1296 (2014)\nRedstar (2016)\nSamsungy (2016)\nPikachu624 (2016) \nZeke (2019)\nKarma (2019)\nSnapple (2019)\nSarah (2019)');	
	}
	
	if(message.content.startsWith(`${prefix}servers`)) {
		message.channel.send('LGA Servers - https://clubpenguinarmies.com/map/');	
	}
	
	if(message.content.startsWith(`${prefix}status`)) {
		var a = members.indexOf(message.member.id);
		message.channel.send('Rank in LGA: ' + a);
	}

	console.log(message.member.id);

	var mb = message.mentions.members.first();
	if(mb != undefined) var i = mb.id;

	if(i == members[28])
	message.channel.send('Hey! My prefix is ;');
});

client.login(token).catch(err => console.log(err));

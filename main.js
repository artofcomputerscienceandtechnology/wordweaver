
var currentVocab = [];


var x = 2; //current card number

function showFlashcard()
{
	if (x <= 0)
	{
		x++;	//increment after showing current card
	}
	else
	{
		x = 0;
	}
	
	
	let kanji = document.getElementById("kanji");
	let onYomi = document.getElementById("onYomi");
	let onRomaji = document.getElementById("onRomaji");
	let kunYomi = document.getElementById("kunYomi");
	let kunRomaji = document.getElementById("kunRomaji");
	let english = document.getElementById("english");
	
	
	//Get words from Array
	//Print words to card
	
	kanji.innerHTML = vocab[x][0];
	onYomi.innerHTML = vocab[x][1];
	onRomaji.innerHTML = vocab[x][2];
	kunYomi.innerHTML = vocab[x][3];
	kunRomaji.innerHTML = vocab[x][4];
	english.innerHTML = vocab[x][5]; 
}
	

	


function showPrevFlashcard()
{
	if (x <= 0)
	{
		x = vocab.length - 1;	//increment after showing current card
	}
	else	
		x--;
	 
	
	let kanji = document.getElementById("kanji");
	let onYomi = document.getElementById("onYomi");
	let onRomaji = document.getElementById("onRomaji");
	let kunYomi = document.getElementById("kunYomi");
	let kunRomaji = document.getElementById("kunRomaji");
	let english = document.getElementById("english");
	
	
	//Get words from Array
	//Print words to card
	
	let test = document.getElementById("test");
	test.innerHTML = x;
	
	kanji.innerHTML = vocab[x][0];
	onYomi.innerHTML = vocab[x][1];
	onRomaji.innerHTML = vocab[x][2];
	kunYomi.innerHTML = vocab[x][3];
	kunRomaji.innerHTML = vocab[x][4];
	english.innerHTML = vocab[x][5]; 
	
}

function showNextFlashcard(cardNum)
{
	//x = cardNum;
	if (x <= vocab.length - 1)
	{
		x++;	//increment after showing current card
	}
	else	
		x = 0;
	
	let test = document.getElementById("test");
	test.innerHTML = x;
	
	let kanji = document.getElementById("kanji");
	let onYomi = document.getElementById("onYomi");
	let onRomaji = document.getElementById("onRomaji");
	let kunYomi = document.getElementById("kunYomi");
	let kunRomaji = document.getElementById("kunRomaji");
	let english = document.getElementById("english");
	
	
	//Get words from Array
	//Print words to card
	
	kanji.innerHTML = vocab[x][0];
	onYomi.innerHTML = vocab[x][1];
	onRomaji.innerHTML = vocab[x][2];
	kunYomi.innerHTML = vocab[x][3];
	kunRomaji.innerHTML = vocab[x][4];
	english.innerHTML = vocab[x][5]; 
	
	//test
	getShowOptions();
} 

let autoShow;
function autoShowCards()
{
		autoShow = setInterval(showNextFlashcard, 5000);
}

function stopAutoShowCards()
{
	clearInterval(autoShow); 
}

//show specific vocab card number from array
function goToCard()
{
	//get value from input
	let cardNumInput = document.getElementById("cardNumInput");
	
	cardNum = cardNumInput.value;
	//show card with x == input value
	showNextFlashcard(cardNum);
}

function addToKnownCards()
{
	let test = 1;
}


function addToUnknownCards()
{
	let c = 9;
}

function flipCard()
{
	getShowOptions();
}

function getShowOptions()
{	
	let kanji = document.getElementById("kanji");
	let onYomi = document.getElementById("onYomi");
	let onRomaji = document.getElementById("onRomaji");
	let kunYomi = document.getElementById("kunYomi");
	let kunRomaji = document.getElementById("kunRomaji");
	let english = document.getElementById("english");
	
	//Get each checkbox value to show kanji/onyomi/kinyomi/english
	var showKanjiCB = document.getElementById("showKanjiCB").checked; 
	var showOnYomiCB = document.getElementById("showOnYomiCB").checked; 
	var showKunYomiCB = document.getElementById("showKunYomiCB").checked; 
	var showEnglishCB = document.getElementById("showEnglishCB").checked; 
	
	//alert(showKanjiCB);
	if (showKanjiCB == true)
	{
		//alert("True");
		kanji.innerHTML = vocab[x][0];
	}
	else
	{
			kanji.innerHTML = " ";
	}
	
	if (showOnYomiCB == true)
	{
		//alert("True");
		onYomi.innerHTML = vocab[x][1];
		onRomaji.innerHTML = vocab[x][2];
	}
	else
	{
		onYomi.innerHTML = " ";
		onRomaji.innerHTML = " ";
	}
	
	if (showKunYomiCB == true)
	{
		kunYomi.innerHTML = vocab[x][3];
		kunRomaji.innerHTML = vocab[x][4];
	}
	else
	{
		kunYomi.innerHTML = " ";
		kunRomaji.innerHTML = " ";
	}
	
	if (showEnglishCB == true)
	{
		english.innerHTML = vocab[x][5];
	}
	else
	{
		english.innerHTML = " ";
	}
}

function generateQuestion()
{
	//get elements by id
	
	//print question
	
	//print 4 options, 1 correct/3 random 
}

function checkQuestion()
{
	//get value of input
}


function setLanguage()
{
	//get value from input
	
	if (lang == "korean")
	{
		//currentVocab = koreanVocab
		currentVocab = koreanVocab.splice();
		console.log(currentVocab);
	}
}



let vocab = [
    ['Kanji', 'On Yomi', 'romaji', 'Kun yomi', 'romaji', 'english', 'example sentence',],
    ['国',  'コク', 'koku ', 'くに ', 'kuni ', 'country ', ' ',],
	['人',  'ジン、 ニン', 'jin, nin ', 'ひと ', 'hito ', 'person ', ' ',],
	['年',  'ネン', 'nen ', 'とし ', 'toshi ', 'year ', ' ',],
	['大',  'ダイ、 タイ', 'dai, tai ', 'おお(きい) ', 'oo(kii) ', 'large, big ', ' ',],
	['十',  'ジュウ', 'juu ', 'とお、 と ', 'tou, to ', '10, ten ', ' ',],
	['本',  'ホン', 'hon ', 'もと ', 'moto ', 'book, present, true ', ' ',],
	['中',  'チュウ', 'chuu ', 'なか、 うち、 あた(る) ', 'naka, uchi, ata(ru) ', 'in, inside, middle, mean, center ', ' ',],
	['長',  'チョウ', 'chou ', 'なが(い)、 おさ ', 'naga(i), osa ', 'long, leader, superior, senior ', ' ',],
	['出',  'シュツ、 スイ', 'shutsu, sui ', 'で(る)、 だ(す)、 い(でる) ', 'de(ru), da(su), i(deru) ', 'exit, leave, go out ', ' ',],
	['三',  'サン', 'san ', 'み(つ) ', 'mitsu ', 'three, 3 ', ' ',],
	['時',  'ジ', 'ji ', 'とき、 -どき ', 'toki, doki ', '	time, hour ', ' ',],
	['行',  'コウ、 ギョウ、 アン', 'kou, gyou, an ', 'い(く)、 ゆ(く)、 おこな(う) ', 'i(ku), yu(ku), okona(u) ', 'going, journey, carry out, line, row ', ' ',],
	['見',  'ケン', 'ken ', 'み(る)、 み(せる) ', 'mi(ru), mi(seru) ', 'see, hopes, chances, idea, opinion, look at, visible ', ' ',],
	['月',  'ゲツ、 ガツ', 'getsu, gatsu ', 'つき ', 'tsuki ', 'moon, month ', ' ',],
	['分',  'ブン、 フン、 ブ', 'bun, fun, bu ', 'わ(ける) ', 'wa(keru) ', 'part, minute of time, understand ', ' ',],
	['後',  'ゴ、 コウ', 'go, kou ', 'のち、 うし(ろ)、 あと ', 'nochi, ushi(ro), ato ', 'behind, back, later ', ' ',],
	['前',  'ゼン', 'zen ', 'まえ ', 'mae ', 'in front, before ', ' ',],
	['生',  'セイ、 ショウ', 'sei, shou ', 'い(きる)、 う(む)、 お(う)、 は(える)、 なま ', 'i(kiru), u(mu), o(u), ha(eru), nama ', 'life, genuine, birth ', ' ',],
	['五',  'ゴ', 'go ', 'いつ(つ) ', 'itsu(tsu) ', 'five, 5 ', ' ',],
	['間',  'カン、 ケン', 'kan, ken ', 'あいだ、 ま、 あい ', 'aida, ma, ai ', 'interval, space ', ' ',],
	['上',  '', ' ', ' ', ' ', 'above, up ', ' ',],
	['東',  'トウ', 'tou ', 'ひがし ', 'higashi ', 'east ', ' ',],
	['四',  'シ', 'shi ', 'よ(つ)、 よん ', 'yo(tsu), yon ', 'four, 4 ', ' ',],
	['今',  'コン、 キン', 'kon, kin ', 'いま ', 'ima ', 'now; the present ', ' ',],
	['金',  '', ' ', 'かね、 かな-、 -がね ', ' ', 'gold ', ' ',],
	['九',  '', ' ', 'ここの(つ) ', ' ', 'nine, 9 ', ' ',],
	['入',  'ニュウ', 'nyuu ', 'い(る)、はい(る) ', 'i(ru), hai(ru) ', 'enter, insert ', ' ',],
	['学',  '', ' ', 'まな(ぶ) ', 'mana(bu) ', 'study, learning, science ', ' ',],
	['高',  '', ' ', 'たか(い) ', 'taka(i) ', 'tall, high, expensive ', ' ',],
	['円',  '', ' ', 'まる(い) ', 'maru(i) ', 'circle, yen, round ', ' ',],
	['子',  '', ' ', 'こ、 ね ', 'ko, ne ', 'child ', ' ',],
	['外',  '', ' ', 'そと、 ほか、 はず(す)、 と- ', 'soto, hoka, hazu-, to- ', 'outside ', ' ',],
	['八',  'ハチ', 'hachi ', 'や(つ)、 よう ', 'ya(tsu), you ', 'eight, 8 ', ' ',],
	['六',  'ロク', 'roku ', ' ', ' ', 'six, 6 ', ' ',],
	['下',  '', ' ', 'した、 しも、 もと、 さ(げる)、 くだ(る)、 お(ろす) ', 'shita, shimo, moto, sa(geru), kuda(ru), o(rosu) ', 'below, down, descend, give, low, inferior', ' ',],
	['来',  '', ' ', 'く.る、 きた.る、 き、 こ ', 'kuru, kitaru, ki, ko ', 'come, due, next, cause, become ', ' ',],
	['気',  '', ' ', 'いき ', 'iki ', 'spirit, mind, air, atmosphere, mood ', ' ',],
	['小',  '', ' ', 'ちい(さい)、 こ-、 お-、 さ- ', ' ', 'small ', ' ',],
	['七',  'シチ', ' ', 'なな(つ)、 なの ', ' ', 'seven, 7 ', ' ',],
	['山',  '', ' ', 'やま ', ' ', 'mounatain ', ' ',],
	['話',  '', ' ', 'はな(す)、 はなし ', ' ', 'talk, tale ', ' ',],
	['女',  '', ' ', 'おんな、 め ', ' ', 'woman ', ' ',],
	['北',  '', ' ', 'きた ', ' ', 'north ', ' ',],
	['午',  '', ' ', 'うま ', ' ', 'noon, sign of the horse ', ' ',],
	['百',  '', ' ', ' ', ' ', 'hundred, 100 ', ' ',],
	['書',  '', ' ', ' ', 'kaku ', 'write ', ' ',],
	['先',  '', ' ', ' ', 'saki ', 'before, ahead, previous, future, precedence ', ' ',],
	['名',  '', ' ', 'な ', 'na ', 'name, noted, distinguished, reputation ', ' ',],
	['川',  '', ' ', 'かわ ', 'kawa ', 'river ', ' ',],
	['千',  '', 'sen ', 'ち ', 'chi ', 'thousand, 1000 ', ' ',],
	['水',  '', ' ', 'みず ', 'mizu ', 'water ', ' ',],
	['半',  '', ' ', 'なか(ば)  ', 'naka(ba)', 'half, middle, odd number, semi- ', ' ',],
	['男',  '', ' ', 'おとこ、 お ', 'otoko, o ', 'man ', ' ',],
	['西',  '', ' ', 'にし ', 'nishi ', 'west ', ' ',],
	['電',  'デン', 'den ', ' ', ' ', 'electricity ', ' ',],
	['校',  'コウ', 'kou ', ' ', ' ', 'school, exam ', ' ',],
	['語',  '', ' ', 'かた(る) ', 'kata(ru) ', 'word, speech, language ', ' ',],
	['土',  '', ' ', 'つち ', 'tsuchi ', 'soil, earth, ground ', ' ',],
	['木',  '', ' ', 'き、 こ ', 'ki, ko- ', 'tree, wood ', ' ',],
	['聞',  '', ' ', 'き(く) ', 'ki(ku) ', 'to hear; to listen; to ask ', ' ',],
	['食',  '', ' ', 'く(う)、 た(べる)、 は(む) ', ' ', 'eat, food ', ' ',],
	['車',  '', ' ', 'くるま ', 'kuruma ', 'car, wheel ', ' ',],
	['何',  '', ' ', 'なに、 なん ', 'nani, nan ', 'what ', ' ',],
	['南',  '', ' ', 'みなみ ', 'minami ', 'south ', ' ',],
	['万',  'マン、 バン', 'man, ban ', ' ', ' ', 'ten thousand, 10,000 ', ' ',],
	['毎',  '', ' ', 'ごと(に) ', 'goto(ni) ', 'every ', ' ',],
	['白',  '', ' ', 'しろ(い) ', 'shiro(i) ', 'white ', ' ',],
	['天',  '', ' ', 'あまつ ', 'amatsu ', 'heavens, sky, imperial ', ' ',],
	['母',  '', ' ', 'はは、 かあ ', 'haha, kaa ', 'mother ', ' ',],
	['火',  '', ' ', 'ひ、 び、 ほ ', 'hi, -bi, ho- ', 'fire ', ' ',],
	['右',  '', ' ', 'みぎ ', 'migi ', 'right ', ' ',],
	['読',  '', ' ', 'よ(む) ', 'yo(mu) ', 'to read ', ' ',],
	['友',  '', ' ', 'とも ', 'tomo ', 'friend ', ' ',],
	['左',  '', ' ', 'ひだり ', 'hidari ', 'left ', ' ',],
	['休',  '', ' ', 'やす(む) ', 'yasu(mu) ', 'rest, day off, retire, sleep ', ' ',],
	['父',  '', ' ', 'ちち、 とう ', 'chichi, tou ', 'father ', ' ',],
	['雨',  '', ' ', 'あめ、 あま ', 'ame, ama ', 'rain ', ' ',],
	['会',  '', ' ', 'あ(う) ', 'a(u) ', 'meeting; meet ', ' ',],
	['同',  '', ' ', 'おな(じ) ', 'onaji ', 'same, agree, equal ', ' ',],
	['事',  '', ' ', 'こと', 'koto ', 'matter, thing, fact, business, reason, possibly ', ' ',],
	['自',  '', ' ', 'みずか(ら) ', 'mizuka(ra) ', 'oneself ', ' ',],
	['社',  '', ' ', 'やしろ ', 'yashiro ', 'company, firm, office, association, shrine ', ' ',],
	['発',  'ハツ、 ホツ', 'hatsu, hotsu ', ' ', ' ', 'departure, discharge, emit, start from ', ' ',],
	['者',  '', ' ', 'もの ', 'mono', 'someone, person ', ' ',],
	['地',  'チ、 ジ', 'chi, ji ', ' ', ' ', 'ground, earth ', ' ',],
	['業',  '', ' ', 'わざ ', 'waza ', 'business, vocation, arts, performance ', ' ',],
	['方',  '', ' ', 'かた ', 'kata ', 'direction, person, alternative ', ' ',],
	['新',  '', ' ', 'あたら(しい)、 あら(た) ', 'atara(shii), ara(ta) ', 'new ', ' ',],
	['場',  '', ' ', 'ば ', 'ba ', 'location, place ', ' ',],
	['員',  'イン', 'in ', ' ', ' ', 'employee, member, number, the one in charge ', ' ',],
	['立',  '', ' ', 'た(つ) ', 'ta(tsu) ', 'stand up, rise ', ' ',],
	['開',  '', ' ', 'ひら(く)、 あ(ける) ', 'hira(ku), a(keru) ', 'open, unfold, unseal ', ' ',],
	['手',  '', ' ', 'て ', 'te ', 'hand ', ' ',],
	['力',  '', ' ', 'ちから ', 'chikara ', 'power, strength, strong, strain, bear up, exert ', ' ',],
	['問',  '', ' ', 'と(う) ', 'to(u) ', 'question, ask, problem ', ' ',],
	['代',  '', ' ', 'か(わり) ', 'ka(wari) ', 'substitute, change, convert, replace, period ', ' ',],
	['明',  '', ' ', 'あか(るい) ', 'aka(rui) ', 'bright, light ', ' ',],
	['動',  '', ' ', 'うご(く) ', 'ugo(ku) ', 'move, motion, change ', ' ',],
	['京',  '', ' ', 'みやこ ', 'miyako ', 'capital ', ' ',],
	['目',  '', ' ', 'め ', 'me ', 'eye, class, look, insight, experience ', ' ',],
	['通',  '', ' ', 'とお(る)、かよ(う) ', 'too(ru), kayo(u) ', 'traffic, pass through, avenue, commute ', ' ',],
	['言',  '', ' ', 'い（う）、 こと ', 'i(u), koto ', 'say, word', ' ',],
	['理',  'リ', 'ri ', ' ', ' ', 'logic, arrangement, reason, justice, truth', ' ',],
	['体',  '', ' ', 'からだ ', 'karada ', 'body, substance, object, reality ', ' ',],
	['田',  '', ' ', 'た ', 'ta ', 'rice field, rice paddy ', ' ',],
	['主',  '', ' ', 'ぬし、 おも ', 'nushi, omo ', 'lord, chief, master, main thing, principal ', ' ',],
	['題',  'ダイ', 'dai ', ' ', ' ', 'topic, subject ', ' ',],
	['意',  'イ', 'i ', ' ', ' ', 'idea, mind, heart, taste, thought ', ' ',],
	['不',  'フ、 ブ', 'fu, bu ', ' ', ' ', 'negative, non-, bad ', ' ',],
	['作',  '', ' ', 'つく(る) ', 'tsuku(ru) ', 'make, production, prepare, build ', ' ',],
	['用',  '', ' ', 'もち(いる) ', 'mochi(iru) ', 'utilize, business, service, use, employ ', ' ',],
	['度',  '', ' ', 'たび、 た(い) ', 'tabi, ta(i) ', 'degrees, occurrence, time, counter for occurrences ', ' ',],
	['強',  '', ' ', 'つよ(い) ', 'tsuyo(i) ', 'strong ', ' ',],
	['公',  'コウ', 'kou ', ' ', ' ', 'public, prince, official, governmental ', ' ',],
	['持',  '', ' ', 'も(つ) ', 'mo(tsu) ', 'hold, have ', ' ',],
	['野',  '', ' ', 'の ', 'no ', 'plains, field, rustic, civilian life ', ' ',],
	['以',  '', ' ', 'もっ(て) ', 'mo(tte) ', 'by means of, because, in view of, compared with ', ' ',],
	['思',  '', ' ', 'おも(う) ', 'omo(u) ', 'think ', ' ',],
	['家',  '', ' ', 'いえ、 や、 うち ', 'ie, ya, uchi ', 'house, home, family, professional, expert ', ' ',],
	['世',  '', ' ', 'よ ', 'yo ', 'generation, world, society, public ', ' ',],
	['',  '', ' ', ' ', ' ', ' ', ' ',],
	['N3 Kanji',  '', ' ', ' ', ' ', ' ', ' ',],
	['政',  'セイ', 'sei ', 'まつりごと ', 'matsurigoto ', 'politics, government ', ' ',],
	['議',  'ギ', 'gi ', ' ', ' ', 'deliberation, consultation, debate ', ' ',],
	['民',  '', ' ', 'たみ ', 'tami ', 'people, nation, subjects ', ' ',],
	['連',  '', ' ', ' ', ' ', 'take along, lead, join, connect ', ' ',],
	['対',  '', ' ', ' ', ' ', 'opposite, even, equal, versus, anti-, compare ', ' ',],
	['部',  '', ' ', ' ', ' ', 'section, bureau, dept, class, copy, part, portion ', ' ',],
	['合',  '', ' ', ' ', ' ', 'fit, suit, join, 0.1 ', ' ',],
	['市',  '', ' ', ' ', ' ', 'market, city, town ', ' ',],
	['内',  '', ' ', ' ', ' ', 'inside, within, between, among, house, home ', ' ',],
	['相',  '', ' ', ' ', ' ', 'inter-, mutual, together, each other, minister of state ', ' ',],
	['定',  '', ' ', ' ', ' ', 'determine, fix, establish, decide ', ' ',],
	['回',  '', ' ', ' ', ' ', '-times, round, revolve, counter ', ' ',],
	['選',  '', ' ', ' ', ' ', 'elect, select, choose, prefer ', ' ',],
	['米',  '', ' ', ' ', ' ', 'rice, USA, meter ', ' ',],
	['実',  '', ' ', ' ', ' ', 'reality, truth ', ' ',],
	['関',  '', ' ', ' ', ' ', 'connection, barrier, gateway, involve, concerning ', ' ',],
	['決',  '', ' ', ' ', ' ', 'decide, fix, agree upon, appoint ', ' ',],
	['全',  '', ' ', ' ', ' ', 'whole, entire, all, complete, fulfill ', ' ',],
	['表',  '', ' ', ' ', ' ', 'surface, table, chart, diagram ', ' ',],
	['戦',  '', ' ', ' ', ' ', 'war, battle, match ', ' ',],
	['経',  '', ' ', ' ', ' ', 'longitude, pass thru, expire, warp ', ' ',],
	['最',  '', ' ', ' ', ' ', 'utmost, most, extreme ', ' ',],
	['現',  '', ' ', ' ', ' ', 'present, existing, actual ', ' ',],
	['調',  '', ' ', ' ', ' ', 'tune, tone, meter, prepare, investigate ', ' ',],
	['化',  '', ' ', ' ', ' ', 'change, take the form of, influence, enchant, delude, -ization ', ' ',],
	['当',  '', ' ', ' ', ' ', 'hit, right, appropriate ', ' ',],
	['約',  '', ' ', ' ', ' ', 'promise, approximately, shrink ', ' ',],
	['首',  '', ' ', ' ', ' ', 'neck ', ' ',],
	['法',  '', ' ', ' ', ' ', 'method, law, rule, principle, model, system ', ' ',],
	['性',  '', ' ', ' ', ' ', 'sex, gender, nature ', ' ',],
	['的',  '', ' ', ' ', ' ', 'mark, target, object, adjective ending ', ' ',],
	['要',  '', ' ', ' ', ' ', 'need, main point, essence, pivot ', ' ',],
	['制',  '', ' ', ' ', ' ', 'system, law, rule ', ' ',],
	['治',  '', ' ', ' ', ' ', 'reign, cure, heal ', ' ',],
	['務',  '', ' ', ' ', ' ', 'task, duties ', ' ',],
	['成',  '', ' ', ' ', ' ', 'turn into, become, get, grow, elapse ', ' ',],
	['期',  '', ' ', ' ', ' ', 'period, time, date, term ', ' ',],
	['取',  '', ' ', ' ', ' ', 'take, fetch ', ' ',],
	['都',  '', ' ', ' ', ' ', 'metropolis, capital ', ' ',],
	['和',  '', ' ', ' ', ' ', 'harmony, Japanese style, peace ', ' ',],
	['機',  '', ' ', ' ', ' ', 'machine, airplane, opportunity ', ' ',],
	['平',  '', ' ', ' ', ' ', 'even, flat, peace ', ' ',],
	['加',  '', ' ', ' ', ' ', 'add, addition, increase, join ', ' ',],
	['受',  '', ' ', ' ', ' ', 'accept, undergo, answer (phone), take ', ' ',],
	['続',  '', ' ', ' ', ' ', 'continue, series, sequel ', ' ',],
	['進',  '', ' ', ' ', ' ', 'advance, proceed ', ' ',],
	['数',  '', ' ', ' ', ' ', 'number, strength, fate, law, figures ', ' ',],
	['記',  'キ', 'ki ', 'しる(す) ', 'shiru(su) ', 'scribe, account, narrative ', ' ',],
	['初',  '', ' ', ' ', ' ', 'first time, beginning ', ' ',],
	['指',  '', ' ', ' ', ' ', 'finger, point to, indicate ', ' ',],
	['権',  '', ' ', ' ', ' ', 'authority, power, rights ', ' ',],
	['支',  '', ' ', ' ', ' ', 'branch, support, sustain ', ' ',],
	['産',  '', ' ', ' ', ' ', 'products, bear, give birth ', ' ',],
	['点',  '', ' ', ' ', ' ', 'spot, point, mark ', ' ',],
	['報',  '', ' ', ' ', ' ', 'report, news, reward ', ' ',],
	['済',  '', ' ', ' ', ' ', 'settle, relieve, finish ', ' ',],
	['活',  'カツ', 'katsu ', ' ', ' ', '	living ', ' ',],
	['原',  'ゲン', 'gen ', 'はら ', 'hara ', 'original, primitive, field ', ' ',],
	['共',  'キョウ', 'kyou ', 'とも ', 'tomo ', 'together, both, neither ', ' ',],
	['得',  'トク', 'toku ', 'え(る) ', 'e(ru) ', 'gain, get, find, earn, acquire, can, may, able to, profit ', ' ',],
	['解',  'カイ、ゲ', 'kai, ge ', 'と(く)、ほど(く) ', 'to(ku), hodo(ku) ', 'unravel, explanation ', ' ',],
	['交',  'コウ', 'kou ', 'まじ(わる)、 ま(ぜる)、 か(わす) ', 'maji(waru), ma(zeru), ka(wasu) ', 'mingle, mixing, association, coming & going ', ' ',],
	['資',  'シ', 'shi ', ' ', ' ', 'assets, resources, capital, funds, data, be conducive to ', ' ',],
	['予',  '', ' ', 'あらかじ(め) ', 'arakaji(me) ', 'beforehand, previous, myself, I ', ' ',],
	['向',  'コウ', 'kou ', 'む(く)、むか(い) ', 'mu(ku), muka(i) ', 'facing, beyond ', ' ',],
	['際',  '', ' ', ' ', ' ', 'occasion, time ', ' ',],
	['',  '', ' ', ' ', ' ', 'victory, win ', ' ',],
	['面',  '', ' ', ' ', ' ', 'mask, face, features, surface ', ' ',],
	['告',  '', ' ', ' ', ' ', 'revelation, inform ', ' ',],
	['反',  '', ' ', ' ', ' ', 'anti- ', ' ',],
	['判',  '', ' ', ' ', ' ', 'judgement, signature ', ' ',],
	['認',  '', ' ', ' ', ' ', 'acknowledge, witness, recognize ', ' ',],
	['参',  '', ' ', ' ', ' ', 'going, coming, participate ', ' ',],
	['利',  '', ' ', ' ', ' ', 'profit, advantage, benefit ', ' ',],
	['組',  '', ' ', ' ', ' ', 'association, assemble, unite ', ' ',],
	['信',  '', ' ', ' ', ' ', 'faith, truth, trust ', ' ',],
	['在',  '', ' ', ' ', ' ', 'exist, outskirts ', ' ',],
	['件',  '', ' ', ' ', ' ', 'affair, case, matter ', ' ',],
	['側',  '', ' ', ' ', ' ', 'side, lean, oppose ', ' ',],
	['任',  '', ' ', ' ', ' ', 'responsibility, duty ', ' ',],
	['引',  '', ' ', ' ', ' ', 'pull, tug, jerk ', ' ',],
	['求',  '', ' ', ' ', ' ', 'request, want, demand ', ' ',],
	['所',  '', ' ', ' ', ' ', 'place, extent ', ' ',],
	['次',  '', ' ', ' ', ' ', 'next, order ', ' ',],
	['昨',  '', ' ', ' ', ' ', 'yesterday, previous ', ' ',],
	['論',  '', ' ', ' ', ' ', 'argument, discourse ', ' ',],
	['官',  '', ' ', ' ', ' ', 'bureaucrat, the government, organ ', ' ',],
	['増',  '', ' ', ' ', ' ', 'increase, add ', ' ',],
	['係',  '', ' ', ' ', ' ', 'person in charge, connection ', ' ',],
	['感',  '', ' ', ' ', ' ', 'emotion, feeling, sensation ', ' ',],
	['情',  '', ' ', ' ', ' ', 'feelings, emotion, passion ', ' ',],
	['投',  '', ' ', ' ', ' ', '	throw, discard ', ' ',],
	['示',  '', ' ', ' ', ' ', 'show, indicate, display ', ' ',],
	['変',  '', ' ', ' ', ' ', 'unusual, change, strange ', ' ',],
	['打',  '', ' ', ' ', ' ', '	strike, hit, knock ', ' ',],
	['直',  '', ' ', ' ', ' ', 'straightaway, honesty, frankness, fix, repair ', ' ',],
	['両',  '', ' ', ' ', ' ', 'both ', ' ',],
	['式',  '', ' ', ' ', ' ', '	style, ceremony ', ' ',], 
	['確',  '', ' ', ' ', ' ', 'assurance, firm, confirm', ' ',], 
	['果',  '', ' ', ' ', ' ', 'fruit, reward, carry out, achieve, complete  ', ' ',],
	['N2 Kanji',  '', ' ', ' ', ' ', ' ', ' ',],  
	['',  '', ' ', ' ', ' ', ' ', ' ',], 
	['',  '', ' ', ' ', ' ', ' ', ' ',]
];

let knownVocab = [ 
	['',  '', ' ', ' ', ' ', ' ', ' ',], 
	['',  '', ' ', ' ', ' ', ' ', ' ',]
];

let unknownVocab = [ 
	['',  '', ' ', ' ', ' ', ' ', ' ',],
	['',  '', ' ', ' ', ' ', ' ', ' ',]
];




let frenchVocab = [ 
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  '']
];

let spanishVocab = [ 
	['do you understand?',  '¿entiende(s)?'],
	['i don’t understand',  'no entiendo'],
	['i don’t know',  'no (lo) sé'],
	[' i have no idea',  'no tengo ni idea'],
	['i am from…i’m lost',  'estoy perdido(a)'],
	['i am from…',  '(yo) soy de…'],
	['how ‘s it going?',  '¿cómo te va? '],
	['sorry! ',  '¡lo siento!'],
	[' what?',  '¿qué…?'],
	['who?',  '¿quién…? '],
	['when?',  '¿cuándo…?'],
	['where?',  '¿dónde…?'],
	['why?',  '¿por qué…? '],
	[' which?',  '¿cuál?'],
	[' how?',  '¿cómo…?'],
	[' I',  'Yo '],
	[' you',  'usted (formal'],
	[' you',  'tú (informal) '],
	['he',  'él'],
	['she',  'ella '],
	[' we',  'nosotros/nosotras'],
	['you all',  'ustedes'],
	[' they',  'ellos '],
	[' they ',  'ellas(females)'],
	['good morning',  'buenos días'],
	['good afternoon',  'buenas tardes '],
	['good evening / good night',  'buenas noches '],
	['old',  'viejo/a'],
	['young ',  ' joven'],
	['youthful',  ' juvenil'],
	['new  ',  'nuevo/a '],
	['happy birthday!',  '¡feliz cumpleaños!'],
	['congratulations!',  '¡felicitaciones! '],
	['have fun!',  '¡diviértete! '],
	['welcome!',  '¡bienvenidos! / ¡bienvenidas!'],
	['see you later (most likely today)',  'hasta luego'],
	[' see you tomorrow',  'hasta mañana'],
	['see you (informal)',  'nos vemos'],
	['have a nice day!',  '¡tenga un buen día!'],
	['Sunday',  'Domingo'],
	['Monday',  'Lunes'],
	[' Tuesday',  'Martes '],
	['Wednesday',  'Miércoles'],
	['Thursday',  'Jueves'],
	['Friday',  'Viernes'],
	[' Saturday',  'Sabado'],
	[' January',  'Enero'],
	['February',  'Febrero '],
	['March',  'Marzo'],
	['April',  'Abril '],
	['May',  'Mayo '],
	['June',  'Junio '],
	[' July',  'Julio'],
	[' August',  'Agosto'],
	['September',  'Septiembre '],
	['October',  'Octubre'],
	['November',  'Noviembre'],
	['December',  'Diciembre '],
	[' day before yesterday',  'anteayer '],
	['yesterday',  'ayer'],
	[' year',  'el año'],
	[' day',  'el día'],
	['month',  'el mes '],
	['century',  'el siglo '],
	['hour',  'la hora'],
	[' today',  'hoy'],
	['week',  'la semana'],
	['tomorrow, morning',  'mañana'],
	['midnight',  'medianoche'],
	[' noon',  'mediodia'],
	['minute',  'el minuto '],
	['night',  'la noche '],
	[' seconds',  'los segundos'],
	['afternoon',  'la tarde '],
	[' father',  'el padre'],
	['dad',  'el papá '],
	['mother',  'la madre '],
	[' mom',  'la mamá '],
	['brother',  'el hermano '],
	[' sister',  'la hermana '],
	['son',  'el hijo '],
	['daughter',  'la hija  '],
	['grandfather',  'el abuelo'],
	['grandmother',  'la abuela'],
	[' great-grandfather',  'el bisabuelo'],
	['great-grandmother',  'la bisabuela'],
	['granddaughter',  'la nieta '],
	[' grandson',  'el nieto'],
	['uncle',  'el tío'],
	['aunt',  'la tía '], 
	['cousin (male)',  'el primo'],
	['cousin (female)',  'la prima '],
	['my relatives',  'mis parientes'],
	[' to hug',  'abrazar'],
	['to love',  'amar'],
	[' to laugh',  'reír '],
	[' to forgive',  'perdonar'],
	['to start',  'empezar '],
	['to follow',  'seguir'],
	[' to open',  'abrir'],
	[' to search',  'buscar'],
	[' to sing',  'cantar '],
	[' to close',  'cerrar'],
	[' to destroy',  'destruir '],
	['to sleep',  'dormir'],
	[' to find',  'encontrar '],
	[' to hide',  'esconder '],
	[' to wait',  'esperar '],
	['to miss',  'faltar '],
	['to do ',  'hacer '],
	['to try',  'intentar '],
	['to call',  'llamar'],
	[' to take',  'llevar'],
	[' to cry',  'llorar'],
	[' to fight',  'luchar'],
	[' to lie',  'mentir '],
	['to hate',  'odiar'],
	['to receive',  'recibir'],
	['to recognize',  'reconocer'],
	['to steal',  'robar '],
	['to save',  'salvar'],
	['to smile',  'sonreír'],
	['to dream',  'soñar'],
	['to take',  'tomar '],
	['to live',  'Vivir'],
	['quiet',  'tranquilo/a'],
	['loud',  'ruidoso/a '],
	['to shout',  'gritar '],
	[' to hear',  'escuchar '],
	[' silence',  'silencio '],
	['loud',  'alto'],
	['soft',  'bajo'],
	['deafening',  'ensordecedor'],
	['sharp, high-pitched',  'agudo'],
	[' low-pitched',  'grave '],
	['melodious',  'melodioso '],
	['harmonic',  'armónico'],
	['buzz',  'zumbido'],
	[' deaf',  'sordo'],
	[' to see',  'ver'],
	[' to look',  'mirar '],
	[' colorful',  'de colores'],
	['bright',  'brillante'],
	['dim',  'apagado'],
	[' light',  'claro '],
	['dark',  'oscuro'],
	[' blind',  'ciego'],
	['to stare',  'mirar fijamente'],
	['to glance',  'echar un vistazo'],
	[' to squint',  'bizquear'],
	['to wink',  'guiñar'],
	[' to blink',  'parpadear '],
	[' to touch',  'tocar '],
	[' to grab',  'agarrar '],
	['soft',  'suave'],
	['rough',  'áspero(a) '],
	['smooth',  'liso(a)'],
	['wrinkled',  'rugoso(a)'],
	[' sticky',  'pegajoso(a)'],
	['sharp',  'punzante'],
	['silky',  'sedoso(a)'],
	[' spongy',  'esponjoso(a) '],
	['fluffy',  'mullido(a) '],
	[' tingle',  'hormigueo'],
	['numb',  'entumecido(a) '],
	[' to touch gently',  'rozar'],
	['to caress',  'acariciar '],
	['to grab',  'agarrar '],
	[' smell',  'olor '],
	['scent',  'el perfume '],
	['fragrance',  'la fragancia'],
	['stench',  'el hedor'],
	[' smelly',  'apestoso(a)'],
	[' fresh',  'fresco(a)'],
	['pungent',  'acre'],
	['musty',  'húmedo(a) '],
	['rotten',  'podrido(a)'],
	['smoky',  'ahumado(a) '],
	['to stink',  'apestar '],
	['flavor',  'sabor '],
	['try',  'probar '],
	['delicious ',  'delicioso '],
	['perfect',  'perfecto'],
	['appetizing',  'apetitoso  '],
	['sweet',  'dulce'],
	['sugary ',  'dulzón'],
	['bland',  'soso  '],
	['open ',  'abierto/a '],
	['wide',  'ancho/a'],
	['narrow',  'estrecho/a'],
	[' far',  'lejano/a'],
	[' close',  'cercano/a'],
	['joyful',  'alegre'],
	['funny, amusing',  'gracioso/a'],
	['serious',  'serio/a'],
	['shy',  'tímido/a'],
	[' brave',  'valiente'],
	['crazy',  'loco/a'],
	['content',  'contento(a)'],
	['happy',  'feliz'],
	['worried',  'preocupado(a)'],
	['nervous',  'nervioso(a)'],
	['tranquil',  'tranquilo(a) '],
	['calm',  'calmado(a)'],
	['excited',  'emocionado(a) '],
	['long',  'largo/a'],
	[' short',  'corto/a'],
	[' straight',  'liso/a'],
	['curly',  'rizado/a'],
	['wavy',  'ondulado/a'],
	[' blonde',  'rubio/a'],
	['thick',  'abundante '],
	[' thin',  'fino/a'],
	[' layered',  'escalado/a'],
	[' dyed',  'teñido/a '],
	['healthy',  ' saludable '],
	[' light',  'claro/a'],
	[' frizzy',  'encrespado/a'],
	[' shiny',  'brillante'],
	['bald',  'calvo/a '],
	['big',  'grande '],
	['small ',  'pequeño/a'],
	[' huge ',  'enorme '],
	['slender',  'esbelto/a'],
	[' skinny',  'flaco/a '],
	['petite',  'menudo/a'],
	[' tall',  'alto/a'],
	[' short',  'bajo/a'],
	['beautiful ',  'hermoso/a'],
	[' handsome ',  'guapo/a'],
	['ugly  ',  'feo/a '],
	['cute  ',  'adorable '],
	[' pretty  ',  'bonita '],
	['stunning',  'impresionante'],
	['plain  ',  'poco atractivo/a '],
	[' average ',  'promedio/a'],
	['attractive  ',  'atractivo/a'],
	['to color',  'colorear'],
	[' to construct',  'construir'],
	['to cut',  'cortar'],
	['to sew',  'coser'],
	[' to draw',  'dibujar'],
	[' to paint',  'pintar'],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	
];

let italianVocab = [ 
	['Viola — ',  'Violet'],
	['Indaco — ',  'Indigo'],
	['Blu — ',  'Blue'],
	['Verde — ',  'Green'],
	['Giallo — ',  'Yellow'],
	['Arancione — ',  'Orange'],
	['Rosso — Red',  ''],
	['Nero — ',  'Black'],
	['Marrone — Brown',  ''],
	['Rosa — ',  'Pink'],
	['Bianco — ',  'White'],
	['nord — ',  'north'],
	['sud — ',  'south'],
	['est — ',  'east'],
	['ovest — ',  'west'],
	['andare — ',  'to go'],
	['girare or svoltare — ',  'to turn'],
	['andare diritto — ',  'go straight ahead'],
	['andare indietro — ',  'go back'],
	['continuare — ',  'continue'],
	['fermarsi — ',  'to stop'],
	['partire — ',  'to leave'],
	['arrivare — ',  'to arrive'],
	['a sinistra — ',  'left'],
	['a destra — ',  'right'],
	['verso or attraverso — ',  'through'],
	['accanto a — ',  'next to'],
	['vicino a — ',  'close to'],
	['dall’altra parte di / di fronte a / davanti a — ',  'across from (opposite)'],
	['davanti a / di fronte a — ',  'in front of'],
	['dietro — ',  'behind'],
	['fino a — ',  'until'],
	[' il / l’ / lo — ',  'the (masculine, singular)'],
	['la — ',  'the (feminine, singular)'],
	['i / gli — ',  'the (masculine, plural)'],
	['le — ',  'the (feminine, plural)'],
	['un — ',  'a (masculine)'],
	['una — ',  'a (feminine)'],
	['la madre — ',  'the mother'],
	['il padre — ',  'the father'],
	['il marito — ',  'the husband'],
	['la moglie — ',  'the wife'],
	['il figlio — ',  'the son'],
	['la figlia — ',  'the daughter'],
	['la cucina — ',  'the kitchen'],
	['il bagno — ',  'the bathroom'],
	['la donna — ',  'the woman'],
	['l’uomo — ',  'the man'],
	['il bambino — ',  'the kid'],
	['il caffè — ',  'the coffee'],
	['la birra — ',  'the beer'],
	['la settimana — ',  'the week'],
	['l’anno — ',  'the year'],
	['la scarpa — ',  'the shoe'],
	['la camicia — ',  'the shirt'],
	['i calzini — the socks',  ''],
	['io — ',  'I'],
	['tu / Lei —',  ' you / you (formal)'],
	['lui — ',  'he'],
	['lei — ',  'she'],
	['noi — ',  'we'],
	['voi — ',  'you (plural)'],
	['loro — ',  'they'],
	['il mio / la mia / i miei / le mie — ',  'my/mine'],
	['il tuo / la tua / i tuoi / le tue — ',  'your/yours'],
	[' il suo / la sua / i suoi / le sue — ',  'his, her/his, hers. Your/yours (formal)'],
	['il nostro / la nostra / i nostri / le nostre — ',  'ours'],
	['il vostro / la vostra / i vostri / le vostre — ',  'your/yours (plural)'],
	['il loro / la loro / i loro / le loro — ',  'their/theirs'],
	['io sono — ',  'I am'],
	['tu sei — ',  'you are'],
	['lui / lei è — ',  'he/she/it is'],
	['noi siamo — ',  'we are'],
	['voi siete — ',  'you are (plural)'],
	['loro sono — ',  'they are'],
	['contento — ',  'happy'],
	['triste — ',  'sad'],
	['alto — ',  'tall'],
	['basso — ',  'short'],
	['pulito — ',  'clean'],
	['sporco — ',  'dirty'],
	['caldo — ',  'hot'],
	['freddo — ',  'cold'],
	['brutto — ',  'ugly'],
	['bello — ',  'pretty'],
	['le guance',  'Cheeks — '],
	['il mento',  'Chin — '],
	['le orecchie ',  'Ears — '],
	['gli occhi ',  'Eyes — '],
	['la faccia ',  'Face — '],
	['la testa ',  'Head—'],
	['la mandibola',  'Jaw — '],
	['le labbra',  'Lips — '],
	['la bocca',  'Mouth — '],
	['il naso',  'Nose — '],
	['i denti ',  'Teeth — '],
	['la lingua',  'Tongue — '],
	['il braccio',  'Arm — '],
	['l’ascella',  'Armpit — '],
	['il petto',  'Chest — '],
	['la clavicola',  'Collarbone — '],
	['il gomito',  'Elbow — '],
	['il dito',  'Finger — '],
	['la mano',  'Hand — '],
	['il medio',  'Middle finger — '],
	['il collo',  'Neck — '],
	['il mignolo ',  'Pinkie — '],
	['la costola',  'Rib — '],
	['l’anulare ',  'Ring finger — '],
	['la spalla ',  'Shoulder — '],
	['la spina dorsale ',  'Spine — '],
	['lo stomaco',  'Stomach — '],
	['la gola',  'Throat — '],
	['il pollice',  'Thumb — '],
	['la pancia',  'Tummy — '],
	['il polso',  'Wrist — '],
	['la caviglia',  'Ankle — '],
	['il sedere ',  'Bottom — '],
	['il polpaccio ',  'Calf — '],
	['il piede',  'Foot — '],
	['il tallone ',  'Heel — '],
	['l’anca',  'Hip — '],
	['il ginocchio',  'Knee — '],
	['la gamba ',  'Leg — '],
	['lo stinco',  'Shin — '],
	['il dito del piede ',  'Toe — '],
	['l’arteria',  'Artery — '],
	['i peli',  'Body hair — '],
	['l’osso',  'Bone — '],
	['il cervello',  'Brain — '],
	['l’unghia',  'Fingernail — '],
	['i capelli ',  'Hair — '],
	['il cuore',  'Heart — '],
	['il fegato ',  'Liver — '],
	['i polmoni ',  'Lungs — '],
	['il muscolo ',  'Muscle — '],
	['il nervo',  'Nerve — '],
	['la pelle',  'Skin — '],
	['l’unghia del piede',  'Toenail — '],
	['la vena',  'Vein — '],
	['Il Cane — ',  'The Dog'],
	['Il Gatto — ',  'The Cat'],
	['Il Pesce — ',  'The Fish'],
	['L’uccello — ',  'The Bird'],
	['Il Pollo — ',  'The Chicken'],
	['La Mucca — ',  'The Cow'],
	['Il Cavallo — ',  'The Horse'],
	['La Scimmia — ',  'The Monkey'],
	['Il Serpente — ',  'The Snake'],
	['La Rana — ',  'The Frog'],
	['Il Coccodrillo — ',  'The Crocodile'],
	['La Tigre — ',  'The Tiger'],
	['Il Leone — ',  'The Lion'],
	['',  ''],
	['',  '']
];

let russianVocab = [ 
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  '']
];

let polishVocab = [ 
	['week',  ' tydzień ('],
	['year',  ' rok'],
	['today',  'dziś'],
	[' tomorrow',  ' jutro'],
	['yesterday',  ' wczoraj '],
	['calendar',  'kalendarz'],
	['second',  ' sekunda'],
	['hour',  ' godzina'],
	['minuta',  'minuta'],
	['o`clock',  'godzina'],
	[' clock',  'zegar'],
	[' can (able)',  'móc'],
	['to use',  'korzystać '],
	['to do',  'robić '],
	['to go',  'iść'],
	['to come',  'przychodzić'],
	['to laugh',  ' śmiać się'],
	['to make',  ' robić'],
	['to see',  ' widzieć '],
	[' far',  'daleko'],
	['small',  ' mały'],
	[' good',  ' dobry'],
	['beautiful',  ' piękny'],
	[' ugly',  ' brzydki'],
	[' difficult',  'trudny'],
	['easy',  ' łatwy '],
	['bad',  'zły'],
	['near',  'blisko'],
	[' Nice to meet you.',  'Miło mi cię poznać'],
	['Hello',  'Cześć'],
	['Good morning.',  ' Dzień dobry'],
	['Good afternoon.',  ' Dzień dobry'],
	[' Good evening',  'Dobry wieczór.'],
	['Good night.',  'Dobranoc'],
	[' How are you?  ',  'Jak się masz?'],
	['Thank you!',  'Dziękuję'],
	['No',  'Nie'],
	['I`m...',  'Jestem...'],
	['Do widzenia.',  ' Goodbye'],
	[' Yes',  'Tak'],
	['Monday',  ' poniedziałek'],
	['Tuesday',  ' wtorek'],
	['Wednesday',  ' środa'],
	['Thursday',  ' czwartek'],
	['Friday',  'piątek'],
	['Saturday',  'sobota'],
	['Sunday',  'niedziela'],
	['January',  ' styczeń'],
	['February',  'luty'],
	['March',  'marzec'],
	[' April',  ' kwiecień'],
	[' June',  ' czerwiec'],
	[' July',  ' lipiec'],
	[' August',  'sierpień'],
	['September',  'wrzesień '],
	['October',  ' październik'],
	['November',  ' listopad'],
	[' December',  ' grudzień'],
	['coffee',  'kawa'],
	[' beer',  'piwo'],
	['tea',  ' herbata'],
	['wine',  'wino'],
	['water',  'woda '],
	['chicken',  ' kurczak'],
	['fish',  'ryba'],
	['foot',  'stopa'],
	[' leg',  'noga'],
	[' head',  ' głowa'],
	[' arm',  ' dłoń ręka'],
	[' hand',  ''],
	[' finger',  'palec'],
	['body',  ' ciało'],
	['stomach',  'żołądek '],
	[' nurse',  'pielęgniarka'],
	[' employee',  'pracownik '],
	['police officer ',  ' policjant'],
	['engineer',  ' inżynier'],
	[' doctor',  ' lekarz'],
	[' manager',  'menedżer'],
	['teacher',  'nauczycielka'],
	['programmer',  'programista '],
	[' salesman',  'sprzedawca'],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
];

let koreanVocab = [ 
	['Hello',  '안녕하세요', 'annyeonghaseyo'],
	['Please',  '주세요', 'juseyo'],
	['Sorry',  '죄송합니다', 'joesonghamnida'],
	['Yes ',  '네', 'ne'],
	['Maybe',  '아마도', 'amado'],
	['No',  '', 'aniyo'],
	['Help',  '도와 주세요', 'dowa juseyo'], 
	['Excuse me',  ' 저기요', 'jeogiyo'],
	['	water',  '물', 'mul'],
	['	rice',  '밥', 'bap'],
	['	vegetables',  '야채 ', 'yachae'],
	['	fruit',  '과일 ', 'gwail'],
	['	meat',  '고기 ', 'gogi'],
	['	bread',  '빵', 'ppang'],
	['fish',  '생선', 'saengseon'],
	['	coffee',  '커피', 'keopi'],
	['	beer',  '맥주 ', 'maekju'],
	['	friend',  '친구 ', 'chingu'],
	['family',  '가족 ', 'gajok'],
	['	dad',  '아빠 ', 'appa'],
	['mom',  '엄마', 'eomma'],
	['boyfriend',  '남자 친구', 'namja chingu'],
	['girlfriend',  ' 여자 친구', 'yeoja chingu'],
	['marriage',  ' 결혼', 'gyeolhon'],
	['husband',  '남편', 'nampyeon'],
	['	wife',  '아내 ', 'anae'],
	['	house',  '집 ', 'jip'],
	['	bathroom',  '화장실 ', 'hwajangsil'],
	['	country',  ' 나라', 'nara'],
	['	job',  '직업', 'jigeop'],
	['person',  ' 사람', 'saram'],
	['	time',  '시간 ', 'sigan'],
	['now',  ' 지금', 'jigeum'],
	['today',  '오늘 ', 'oneul'],
	['	yesterday',  ' 어제', 'eoje'],
	['	tomorrow',  '내일 ', 'naeil'],
	['to go',  '가다 ', 'gada'],
	['to come',  '오다', 'oda'],
	['to have',  '있다 ', 'itda'],
	['	to be',  '이다 ', 'ida'],
	['	to eat',  '먹다 ', 'meokda'],
	['	to drink',  '마시다', 'masida'],
	['	to give',  '주다', 'juda'],
	['to see',  '보다 ', 'boda'],
	['	to sleep',  '자다 ', 'jada'],
	['to buy',  '사다', 'sada'],
	['to laugh',  '웃다', 'utda'],
	['	to cry',  '울다', 'ulda'],
	['	to wear',  '입다', 'ipda'],
	['to walk',  '걷다 ', 'geotda'],
	['to read',  '읽다', 'iktta'],
	['	to learn',  '배우다 ', 'baeuda'],
	['to study',  '공부하다', 'gongbuhada'],
	['to meet',  '만나다 ', 'mannada'],
	['very',  '매우', 'maeu'],
	['very',  '아주 ', 'aju'],
	['quite',  '꽤', 'kkwae'],
	['almost',  '거의 ', 'geoui'],
	['fast',  '빨리', 'ppalli'],
	['slowly',  '천천히 ', 'cheoncheonhi'],
	['carefully',  '신중하게 ', 'sinjunghage'],
	['always',  '항상', 'hangsang'],
	['always',  '늘', 'neul'],
	['	frequently',  '자주 ', 'jaju'],
	['usually',  '보통', 'botong'],
	['sometimes',  '가끔', 'gakkeum'],
	['occasionally	',  '가끔 ', 'gakkeum'],
	['rarely',  '드물게 ', 'deumulge'],
	['	never',  '결코', 'gyeolko'],
	['	never',  '절대', 'jeoldae'],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', ''],
	['',  '', '']
]
let icelandicVocab = [ 
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  ''],
	['',  '']
];



let currentLanguage = "";


function setLangTo(language)
{
    //
    currentLanguage = language;
	
    if (language == "japanese")
    {
        alert("Language set to Japanese xxxx")
        //set current array to japanese
        //clear temp arrays
        //load new content
    }
    
    if (language == "korean")
    {
        alert("Language set to Korean")
		
    }
    
    if (language == "russian")
    {
        alert("Language set to Russian")
    }
    
    if (language == "spanish")
    {
        alert("Language set to spanish")
    }
    
}

 
 /*
function selectLanguageFromDropdown()
{
    //get selected language
    var e = document.getElementById("languageSelectDropdown");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    
     document.getElementById("currentLanguageDisplay").innerHTML = "Current Language: " + text; 
     
    //set arrays according to language
    //alert("You selected " + text)
    
    //update page with selected language content
}
*/

function selectLanguageFromDropdown()
{
    //get selected language
    var e = document.getElementById("languageSelectDropdown");
    var value = e.value;
    var languageSelected = e.options[e.selectedIndex].text;
    currentLanguage = languageSelected;
    //set arrays according to language
    //alert("You selected " + languageSelected);
    //const elem = document.getElementById("currentLanguageDisplay"); 
    //elem.innerHTML = "Current Language: " + text;
    document.getElementById("currentLanguageDisplay").innerHTML = "Current Language: " + languageSelected; 
  
	 //alert(languageSelected);
    if (languageSelected == "Korean")
    {
		//alert("You selected korean");
       window.currentVocab = koreanVocab.splice();
	   currentVocab = Array.from(koreanVocab);
	    //currentVocab = [...koreanVocab];
     console.log(currentVocab);
    }
     
    //update page with selected language content
}



function testFlashcard()
{
	console.log(currentVocab);
	//x = cardNum;
	if (x <= vocab.length - 1)
	{
		x++;	//increment after showing current card
	}
	else	
		x = 0;
	
	let test = document.getElementById("test");
	test.innerHTML = x;
	
	/*let onYomi = document.getElementById("onYomi"); 
	let kunYomi = document.getElementById("kunYomi"); 
	let onRomaji = document.getElementById("onRomaji"); 
	let kunRomaji = document.getElementById("kunRomaji"); 
	onYomi.innerHTML = " ";
	kunYomi.innerHTML = " ";
	onRomaji.innerHTML = " ";
	kunRomaji.innerHTML = " "; */
	
	let english = document.getElementById("english");
	let korean = document.getElementById("korean");
	
	//Get words from Array
	//Print words to card
	//alert(currentVocab[x][1]);
	//kanji.innerHTML = currentVocab[x][1]; 
	//english.innerHTML = currentVocab[x][0]; 
	korean.innerHTML = currentVocab[x][1];
	koreanRomanization.innerHTML = currentVocab[x][2];
	english1.innerHTML = currentVocab[x][0]; 	
	//test
	//getShowOptions();	
	
}
 
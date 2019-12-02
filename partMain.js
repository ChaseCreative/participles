//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");



//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "Participles!";}

function gameTitle() {get("startButton").innerHTML = "Are You Crippled by Participles?";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}


//CHANGE THE NAMES OF THE GAMES HERE
  var game1Title = get("answerOne").innerHTML = "Let's Get Active!";
  var game2Title = get("answerTwo").innerHTML = "Find Out What's In Your Future?";
  var game3Title = get("answerThree").innerHTML = "Let's Find Out What's In Your Past?";
  var game4Title = get("answerFour").innerHTML = "";



//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();

    var nomPE1 = "a";
    var genPE1 = "ae";
    var datPE1 = "ae";
    var accPE1 = "am";
    var ablPE1 = "ā";
    var vocPE1 = "a";

    var nomPE1Pl = "ae";
    var genPE1Pl = "ārum";
    var datPE1Pl = "īs";
    var accPE1Pl = "ās";
    var ablPE1Pl = "īs";
    var vocPE1Pl = "ae";

    var nomPE2 = "us";
    var genPE2 = "ī";
    var datPE2 = "ō";
    var accPE2 = "um";
    var ablPE2 = "ō";
    var vocPE2 = "e";

    var nomPE2Pl = "ī";
    var genPE2Pl = "ōrum";
    var datPE2Pl = "īs";
    var accPE2Pl = "ōs";
    var ablP2Pl = "īs";
    var vocPE2Pl = "ī";

    var nomPE3 = "is";
    var genPE3 = "is";
    var datPE3 = "ī";
    var accPE3 = "em";
    var ablPE3 = "e";
    var vocPE3 = "is";

    var nomPE3Pl = "ēs";
    var genPE3Pl = "ium";
    var datPE3Pl = "ibus";
    var accPE3Pl = "ēs";
    var ablPE3Pl = "ibus";
    var vocPE3Pl = "ēs";



    		var pres1stSing = "ō";
    		var pres2ndSing = "ās";
    		var pres3rdSing = "at";
    		var pres1stPl = "āmus";
    		var pres2ndPl = "ātis";
    		var pres3rdPl = "ant";

        var pres1stSing2 = "eō";
    		var pres2ndSing2 = "ēs";
    		var pres3rdSing2 = "et";
    		var pres1stPl2 = "ēmus";
    		var pres2ndPl2 = "ētis";
    		var pres3rdPl2 = "ent";

        var pres1stSing3 = "ō";
    		var pres2ndSing3 = "is";
    		var pres3rdSing3 = "it";
    		var pres1stPl3 = "imus";
    		var pres2ndPl3 = "itis";
    		var pres3rdPl3 = "unt";

        var pres1stSing3iO = "iō";
    		var pres2ndSing3iO = "is";
    		var pres3rdSing3iO = "it";
    		var pres1stPl3iO = "imus";
    		var pres2ndPl3iO = "itis";
    		var pres3rdPl3iO = "iunt";

        var pres1stSing4 = "iō";
    		var pres2ndSing4 = "īs";
    		var pres3rdSing4 = "it";
    		var pres1stPl4 = "īmus";
    		var pres2ndPl4 = "ītis";
    		var pres3rdPl4 = "iunt";

    		var imp3rdSing = "ābat";
    		var imp3rdPl = "ābant";

    		var fut3rdSing = "ābit";
    		var fut3rdPl = "ābunt";

        var per3rdSing = "āvit";
    		var per3rdPl = "āvērunt";

        var perfect1stSing = "ī";
        var perfect2ndSing = "isti";
    		var perfect3rdSing = "it";
        var perfect1stPl = "imus";
        var perfect2ndPl = "istis";
    		var perfect3rdPl = "ērunt";

    		var pluPer3rdSing = "āverat";
    		var pluPer3rdPl = "āverant";

    		var futPer3rdSing = "āverit";
    		var futPer3rdPl = "āverint";




var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];



//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 25;
var countdown = setInterval(0,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}




function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){presActivePart()};
  //responseButton.onclick = function(){hint()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){futureActivePart()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){perPassPart()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){testIndirectStatement()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }


/*
 var headyVerb = [["say","said", "dīc" + pE3[pEIndex], "dīx" + pT[pEIndex]],["think","thought", "put" + pE1[pEIndex], "putav" + pT[pEIndex]], ["see","saw", "vid" + pE2[pEIndex], "vīd" + pT[pEIndex]], ["feel","felt", "sent" + pE4[pEIndex], "sens" + pT[pEIndex]],["hear","heard", "aud" + pE4[pEIndex], "audiv" + pT[pEIndex]],["know","knew", "sc" + pE4[pEIndex], "scīv" + pT[pEIndex]]];

var hVIndex = Math.floor(Math.random() * headyVerb.length);

 var pronounHe = ["I","You","He does","We","You all", "They"];
 var pronounShe = ["I","You","She","We","You all", "They"];

 var subjectAccusativeMas = [["mercatorem", "the merchant"],["patrem","the father"],["agricolam", "the farmer"],["filium", "the son"],["nautam","the sailor"],["senem", "the old man"], ["servum","the servant"]];
var sAMasIndex = Math.floor(Math.random() * subjectAccusativeMas.length);

var subjectAccusativeFem = [["uxorem", "the wife"],["sororem","the sister"],["ancilam", "the maid servant"],["filiam", "the daughter"],["matrem", "the mother"],["feminam", "the woman"]];
var sAFemIndex = Math.floor(Math.random() * subjectAccusativeFem.length);

var verbInfinitive = [["is finding","has found","will find", "is found", "has been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["is saving","has saved","will save", "is saved", "has been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["captures","captured","will capture", "is captured", "was captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["loves","loved","will love", "is loved", "was loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["wounds","wounded","will wound", "is wounded", "was wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];

var verbInfinitiveEng = [["is finding","has found","will find", "is found", "has been found","is finding","has found","will find", "is found", "has been found"],["is saving","has saved","will save", "is saved", "has been saved","is saving","has saved","will save", "is saved", "has been saved"],["captures","captured","will capture", "is captured", "was captured","captures","captured","will capture", "is captured", "was captured"],["loves","loved","will love", "is loved", "was loved","loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded","wounds","wounded","will wound", "is wounded", "was wounded"]];



var verbInfinitivePast = [["was finding","had found","would find", "was being found", "had been found","invenīre", "invenisse", "inventurum esse", "inveni", "inventum esse"],["was saving","had saved","would save", "was being saved", "had been saved","servāre", "servavisse", "servaturum esse", "servari", "servatum esse"],["was capturing","had captured","would capture", "was being captured", "had been captured","capere", "cēpisse", "capturum esse", "capi", "captum esse"],["was loving","had loved","would love", "was being loved", "had been loved","amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
var verbInfinitiveEngPast = [["was finding","had found","would find", "was being found", "had been found","was finding","had found","would find", "was being found", "had been found"],["was saving","had saved","would save", "was being saved", "had been saved","was saving","had saved","would save", "was being saved", "had been saved"],["was capturing","had captured","would capture", "was being captured", "was capturing","had captured","would capture", "was being captured", "had been captured"],["was loving","had loved","would love", "was being loved", "had been loved","was loving","had loved","would love", "was being loved", "had been loved"],["was wounding","had wounded","would wound", "was being wounded", "had been wounded","was wounding","had wounded","would wound", "was being wounded", "had been wounded"]];

//var verbInfinitiveEng = [["loves","loved","will love", "is loved", "was loved"],["wounds","wounded","will wound", "is wounded", "was wounded"]];
//var verbInfinitiveLat = [["amāre", "amavisse", "amaturum esse", "amāri", "amatum esse"],["vulnerāre", "vulneravisse", "vulneraturum esse", "vulnerāri", "vulneratum esse"]];
*/

//var tenseIndex = [0.1,2,3,4,]
//var verbInfIndex = Math.floor(Math.random() * verbInfinitive.length);

//var tenseIndex = ["0","1", "2", "3","4"]
var tenseIndex = Math.floor(Math.random() * 5);


 var sentence = "";
 var correctAnswer = "";
 var wrongAnswer1 = "";
 var wrongAnswer2 = "";
 var wrongAnswer3 = "";


 var sentencePast = "";
 var correctAnswerPast = "";
 var wrongAnswer1Past = "";
 var wrongAnswer2Past = "";
 var wrongAnswer3Past = "";


var  checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];




/*
var nounArray123 = [["puell", "girl"], ["regin", "queen"],["pugn", "fight"],["fili", "daughter"],["amic", "girl friend"],["agricol", "farmer"], ["poet", "poet"], ["ancill", "maid servant"], ["naut", "sailor"]];


var verbArray132 = [["loves","loved", "was loving", "will love", "am"], ["begs","begged", "was begging", "will beg","or"],["observes","observed", "was observing", "will observe", "observ"],["carries","carried", "was carrying", "will carry", "port"],["greets","greeted", "was greeting", "will greet", "salut"],["kills","killed", "was killing", "will kill", "nec"],["fights", "fought", "was fighting", "will fight", "pugn"], ["saves","saved", "was saving", "will save", "serv"], ["looks at", "looked at", "was looking at", "will look at", "spect"], ["calls","called", "was calling", "will call","voc"],["carries","carried", "was carrying", "will carry","port"], ["annoys","annoyed", "was annoying", "will annoy","vex"], ["wounds","wounded", "was wounding", "will wound","vulner"], ["beats","beat", "was beating", "will beat","verber"], ["scolds","scolded", "was scolding", "will scold","vituper"], ["hits","hit", "was hitting", "will hit","puls"], ["frees","freed", "was freeing", "will free","liber"], ["waits for","waited for", "was waiting", "will wait","exspect"], ["avoids","avoided", "was avoiding", "will avoid","vit"], ["hides","hid", "was hiding", "will hide","cel"]];





var ranVerbIndex = Math.floor(Math.random() * verbArray132.length);
newVerb132 = new Verb(verbArray132[ranVerbIndex][4]);
verb132 = newVerb132.verbForm;


var verbTenseArray = [pres3rdSing, per3rdSing, imp3rdSing, fut3rdSing];

*/









  function presActivePart(){

    class Verb{
     constructor(verbStem){
       this.verbForm = verbStem;
     }
    }


    var verbArray = [["loves","loved", "used to love", "am"], ["praises","praised", "was praising", "laud"],["carries","carried", "was carrying", "port"],["greets","greeted", "was greeting", "salut"],["kills","killed", "was killing", "nec"],["fights", "fought", "was fighting", "pugn"], ["saves","saved", "was saving", "serv"], ["looks at", "looked at", "was looking at",  "spect"], ["calls","called", "was calling", "voc"], ["annoys","annoyed", "was annoying", "vex"], ["wounds","wounded", "was wounding", "vulner"], ["beats","beat", "was beating", "verber"], ["scolds","scolded", "was scolding", "vituper"], ["hits","hit", "was hitting", "puls"], ["frees","freed", "was freeing", "liber"], ["waits for","waited for", "was waiting for", "exspect"], ["avoids","avoided", "was avoiding", "vit"], ["hides","hid", "was hiding", "cel"]];


    var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
    newVerb = new Verb(verbArray[randomVerbIndex][3]);
    verbPresSing = newVerb.verbForm + pres3rdSing;

    verbPerSing = newVerb.verbForm + per3rdSing;

    verbImpSing = newVerb.verbForm + imp3rdSing;


    verbPresSingEng = new Verb(verbArray[randomVerbIndex][0]);
    verbPerSingEng = new Verb(verbArray[randomVerbIndex][1]);
    verbImpSingEng = new Verb(verbArray[randomVerbIndex][2]);

    var verbArrayPlural = [["love","loved", "used to love", "am"],["praise","praised", "were praising", "laud"], ["carry","carried", "were carrying", "port"],["greet","greeted", "were greeting", "salut"],["kill","killed", "were killing", "nec"],["are fighting", "fought", "used to fight", "pugn"], ["save","saved", "kept saving", "serv"], ["look at", "looked at", "were looking at",  "spect"], ["are calling","called", "were calling", "voc"], ["annoy","annoyed", "were annoying", "vex"], ["wound","wounded", "were wounding", "vulner"], ["beat","beat", "were beating", "verber"], ["scold","scolded", "used to scold", "vituper"], ["strike","struck", "kept striking", "puls"], ["free","freed", "were freeing", "liber"], ["wait for","waited for", "were waiting for", "exspect"], ["avoid","avoided", "were avoiding", "vit"], ["hide","hid", "used to hide", "cel"]];

var randomVerbPluralIndex = Math.floor(Math.random() * verbArrayPlural.length);
newVerbPlural = new Verb(verbArrayPlural[randomVerbIndex][3]);
verbPresPl = newVerbPlural.verbForm + pres3rdPl;

verbPerPl = newVerbPlural.verbForm + per3rdPl;


verbImpPl = newVerbPlural.verbForm + imp3rdPl;


    class Subject {

     constructor(nounStem){
     this.nounForm = nounStem;
     }
    }

    var nounArray = [["puell", "girl","girls"], ["regin", "queen", "queens"],["fili", "daughter", "daughters"],["domin", "mistress", "mistresses"],["amic", "girl friend", "girl friends"],["agricol", "farmer", "farmers"],["besti", "beast", "beasts"], ["de", "goddess", "goddesses"],["poet", "poet", "poets"], ["ancill", "maid servant", "maid servants"], ["naut", "sailor", "sailors"],["femin", "woman", "women"]];

    var nounArray2 = [["servus", "serv","slave","slaves"],["libertus", "libert","freedman","freedmen"],["inimicus", "inimic","enemy","enemies"], ["patronus", "patron","patron", "patrons"],["dominus", "domin","master", "masters"],["magister", "magistr","teacher", "teachers"],["nuntius", "nunti","messenger", "messengers"], ["puer", "puer","boy", "boys"],["vilicus", "vilic","overseer", "overseers"],["vir", "vir","man", "men"]["venalicius", "venalici","slave dealer", "slave dealers"],["coquus", "coqu", "cook", "cooks"],["deus", "de", "god", "gods"],["Graecus", "Graec", "Greek", "Greeks"],["aper", "apr", "boar", "boars"],["avarus", "avar", "miser", "misers"]];

    var nounArray3 = [["canis", "can","dog","dogs"],["pugil", "pugil","boxer","boxers"],["fur", "fur","thief","thieves"],["gladiator", "gladiator","gladiator","gladiators"], ["pater", "patr", "father", "fathers"],["feles", "fel", "cat", "cats"],["cliens", "client", "client", "clients"],["hospes", "hospit", "guest", "guests"],["infans", "infant", "infant", "infants"],["senex", "sen", "old man", "old men"],["venator", "venator", "hunter", "hunters"],["hostis", "host", "enemy", "enemies"],["mercator", "mercator", "merchant", "merchant"],["mater", "matr","mother", "mothers"],["frater", "fratr","brother", "brothers"],["soror", "soror","sister", "sisters"],["homo", "homin","man", "men"],["uxor", "uxor","wife", "wives"],["iuvenis", "iuven","young man", "young men"]];


    var randomNounIndex = Math.floor(Math.random() * nounArray.length);
    var randomNoun2Index = Math.floor(Math.random() * nounArray2.length);
    var randomNoun3Index = Math.floor(Math.random() * nounArray3.length);



    newNoun = new Subject(nounArray[randomNounIndex][0]);
    subjectSing = newNoun.nounForm + nomPE1;
    subjectPl = newNoun.nounForm + nomPE1Pl;


    //subjectSing2 = newNoun2.nounForm;
    newNoun2 = new Subject(nounArray2[randomNoun2Index][0]);
    subjectSing2 = newNoun2.nounForm;
    newNoun2NomPl = new Subject(nounArray2[randomNoun2Index][1]);
    subjectPl2 = newNoun2NomPl.nounForm + nomPE2Pl;


    newNoun3 = new Subject(nounArray3[randomNoun3Index][0]);
    subjectSing3 = newNoun3.nounForm;
    newNoun3NomPl = new Subject(nounArray3[randomNoun3Index][1]);
    subjectPl3 = newNoun3NomPl.nounForm + nomPE3Pl;


var randomObjectIndex = Math.floor(Math.random() * nounArray.length);

    newObject = new Subject(nounArray[randomObjectIndex][0]);
    objectSing = newObject.nounForm + accPE1;
    objectPl = newObject.nounForm + accPE1Pl;





var randomObject2Index = Math.floor(Math.random() * nounArray2.length);
    newObject2 = new Subject(nounArray2[randomObject2Index][1]);

    objectSing2 = newObject2.nounForm + accPE2;
    objectPl2 = newObject2.nounForm + accPE2Pl;

    var randomObject3Index = Math.floor(Math.random() * nounArray3.length);
        newObject3 = new Subject(nounArray3[randomObject3Index][1]);
        objectSing3 = newObject3.nounForm + accPE3;
        objectPl3 = newObject3.nounForm + accPE3Pl;


        var presActPart = [["ambulans","ambulant", "walking"],["ridens","rident", "smiling"],["dormiens","dormient", "sleeping"],["cantans","cantant", "singing"],["cogitans","cogitant", "thinking"],["currens","current", "running"],["saliens","salient", "jumping"],["tremens","trement", "trembling"],["clamans","clamant", "yelling"],["discedens","discedent", "departing"]];

        var futActPart = [["ambulatur","intending to walk"],["risur","about to laugh"],["dormitur","about to sleep"],["cantatur","about to sing"],["cogitatur","about to think"],["cursur","about to run"],["saltur","about to jump"],["territur","about to frighten"],["clamatur","intending to shout"],["discessur","intending to leave"],["deceptur","about to decieve"]];

        var perPassivePart = [["vis","seen"],["capt", "captured"],["audit","heard"],["territ", "frightened"],["fract","broken"],["servat","saved"],["vulnerat","wounded"],["monit","warned"],["invent","found"],["decept","deceived"],["accusat","accused"],["necat","killed"],["liberat","freed"],["petit","attacked"],["sciss","cut"],["deris","mocked"]];


        var randomPAPIndex = Math.floor(Math.random() * presActPart.length);

        newPAP = new Subject(presActPart[randomPAPIndex][0]);
        nomPAP = newPAP.nounForm;
      stemPAP = new Subject(presActPart[randomPAPIndex][1]);
        dirObjSingPAP = stemPAP.nounForm + accPE3;
        nomAccPluralPAP = stemPAP.nounForm + nomPE3Pl;




timeleft = 25;
responseButton.innerHTML = "";


    countDownTimer();

     countdown = setInterval(countDownTimer,1000);




    startButton.disabled = true;




    ranISIndex = Math.floor(Math.random() * 5);


    if (ranISIndex == 0){

    sentence = "The " + nounArray3[randomNoun3Index][2] + ", while " + presActPart[randomPAPIndex][2]+ ", " + verbArray[randomVerbIndex][2] + " the " + nounArray3[randomObject3Index][3] + ".";

      correctAnswer = subjectSing3 + " " + presActPart[randomPAPIndex][0] + " " +  objectPl3 + " " + verbImpSing;

      wrongAnswer1 = subjectSing3 + " " + presActPart[randomPAPIndex][1] + accPE3 + " " + objectPl3 + " " + verbImpSing;

      wrongAnswer2 = subjectPl3 + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " + objectPl3 + " " + verbPerPl;

      wrongAnswer3 = subjectSing3 + " " + presActPart[randomPAPIndex][0] + " " +  objectPl3 + " " + verbPresSing;


    checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
    shuffle(checkAnswers);

} else if (ranISIndex == 1){


  sentence = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][1] + " the " + presActPart[randomPAPIndex][2] +  " " + nounArray2[randomObject2Index][2] + ".";

    correctAnswer = subjectSing + " " + presActPart[randomPAPIndex][1] + accPE3 + " " +  objectSing2 + " " + verbPerSing;

    wrongAnswer1 = subjectSing + " " + presActPart[randomPAPIndex][0] + " " + objectSing2 + " " + verbPerSing;

    wrongAnswer2 = subjectPl + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " + objectSing2 + " " + verbImpPl;

    wrongAnswer3 = subjectSing + " " + presActPart[randomPAPIndex][1] + accPE3Pl + " " +  objectPl2 + " " + verbPresSing;



checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
shuffle(checkAnswers);

} else if (ranISIndex == 2) {

     sentence = "The " + nounArray2[randomNoun2Index][3] + ", who were " + presActPart[randomPAPIndex][2] + ", " + verbArrayPlural[randomVerbIndex][1] + " the " + nounArray3[randomObject3Index][2] + ".";

       correctAnswer = subjectPl2 + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " +  objectSing3 + " " + verbPerPl;

       wrongAnswer1 = subjectPl2 + " " + presActPart[randomPAPIndex][1] + accPE3 + " " + objectSing3 + " " + verbPerPl;

       wrongAnswer2 = subjectPl2 + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " + objectSing3 + " " + verbImpPl;

       wrongAnswer3 = subjectSing2 + " " + presActPart[randomPAPIndex][1] + accPE3 + " " +  objectSing3 + " " + verbPresSing;


     checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
     shuffle(checkAnswers);

} else if (ranISIndex == 3) {

  sentence = "The " + nounArray[randomNounIndex][2] + ", while " + presActPart[randomPAPIndex][2] + ", " + verbArrayPlural[randomVerbIndex][0] + " the " + nounArray2[randomObject2Index][3] + ".";

    correctAnswer = subjectPl + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " +  objectPl2 + " " + verbPresPl;

    wrongAnswer1 = subjectPl + " " + presActPart[randomPAPIndex][1] + accPE3 + " " + objectSing2 + " " + verbPresPl;

    wrongAnswer2 = subjectPl + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " + objectPl2 + " " + verbPerPl;

    wrongAnswer3 = subjectSing + " " + presActPart[randomPAPIndex][1] + nomPE3Pl + " " +  objectPl2 + " " + verbPerSing;


     checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
     shuffle(checkAnswers);

} else if (ranISIndex == 4) {

  sentence = "The " + nounArray3[randomNoun3Index][3] + " " + verbArrayPlural[randomVerbIndex][0] + " the " + nounArray[randomObjectIndex][2] + " who are " + presActPart[randomPAPIndex][2] + ".";

    correctAnswer = subjectPl3 + " " + objectPl + " " + presActPart[randomPAPIndex][1] + accPE3Pl + " " + verbPresPl;

    wrongAnswer1 = subjectPl3 + " " + objectPl + " " + presActPart[randomPAPIndex][1] + accPE3Pl + " " + verbPerPl;

    wrongAnswer2 = subjectPl3 + " " + objectPl + " " + presActPart[randomPAPIndex][1] + accPE3Pl + " " + verbImpPl;

    wrongAnswer3 = subjectSing3 + " " +  objectSing + " " + presActPart[randomPAPIndex][1] + accPE3 + " " + verbPresSing;



     checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
     shuffle(checkAnswers);

}





  startButton.innerHTML = sentence;

  document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

  document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

  document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

  document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



    responseButton.disabled = false;



      resetAnswerColors();

      enableButtons();

        decrementCount();






      if (count == 0){

        gameOverAudio();

        startButton.innerHTML = "Select a New Game!";

        answerOne.innerHTML = game1Title;
        answerTwo.innerHTML = game2Title;
        answerThree.innerHTML = game3Title;
        answerFour.innerHTML = game4Title;

        document.getElementById("boxThree").innerHTML = "Score";
        responseButton.innerHTML = "You earned " + points + " points!";
        points = 0;

        stopTimer();
        document.getElementById("boxOne").innerHTML = "Timer";

        answerOne.onclick = function(){selectGame1()};
        answerTwo.onclick = function(){selectGame2()};
        answerThree.onclick = function(){selectGame3()};
        answerFour.onclick = function(){selectGame4()};

        count = 11;


         }




    }












    function futureActivePart(){

      class Verb{
       constructor(verbStem){
         this.verbForm = verbStem;
       }
      }


      var verbArray = [["loves","loved", "used to love", "am"], ["praises","praised", "was praising", "laud"],["carries","carried", "was carrying", "port"],["greets","greeted", "was greeting", "salut"],["kills","killed", "was killing", "nec"],["fights", "fought", "was fighting", "pugn"], ["saves","saved", "was saving", "serv"], ["looks at", "looked at", "was looking at",  "spect"], ["calls","called", "was calling", "voc"], ["annoys","annoyed", "was annoying", "vex"], ["wounds","wounded", "was wounding", "vulner"], ["beats","beat", "was beating", "verber"], ["scolds","scolded", "was scolding", "vituper"], ["hits","hit", "was hitting", "puls"], ["frees","freed", "was freeing", "liber"], ["waits for","waited for", "was waiting for", "exspect"], ["avoids","avoided", "was avoiding", "vit"], ["hides","hid", "was hiding", "cel"]];


      var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
      newVerb = new Verb(verbArray[randomVerbIndex][3]);
      verbPresSing = newVerb.verbForm + pres3rdSing;

      verbPerSing = newVerb.verbForm + per3rdSing;

      verbImpSing = newVerb.verbForm + imp3rdSing;


      verbPresSingEng = new Verb(verbArray[randomVerbIndex][0]);
      verbPerSingEng = new Verb(verbArray[randomVerbIndex][1]);
      verbImpSingEng = new Verb(verbArray[randomVerbIndex][2]);

      var verbArrayPlural = [["love","loved", "used to love", "am"],["praise","praised", "were praising", "laud"], ["carry","carried", "were carrying", "port"],["greet","greeted", "were greeting", "salut"],["kill","killed", "were killing", "nec"],["are fighting", "fought", "used to fight", "pugn"], ["save","saved", "kept saving", "serv"], ["look at", "looked at", "were looking at",  "spect"], ["are calling","called", "were calling", "voc"], ["annoy","annoyed", "were annoying", "vex"], ["wound","wounded", "were wounding", "vulner"], ["beat","beat", "were beating", "verber"], ["scold","scolded", "used to scold", "vituper"], ["strike","struck", "kept striking", "puls"], ["free","freed", "were freeing", "liber"], ["wait for","waited for", "were waiting for", "exspect"], ["avoid","avoided", "were avoiding", "vit"], ["hide","hid", "used to hide", "cel"]];

    var randomVerbPluralIndex = Math.floor(Math.random() * verbArrayPlural.length);
    newVerbPlural = new Verb(verbArrayPlural[randomVerbIndex][3]);
    verbPresPl = newVerbPlural.verbForm + pres3rdPl;

    verbPerPl = newVerbPlural.verbForm + per3rdPl;


    verbImpPl = newVerbPlural.verbForm + imp3rdPl;


      class Subject {

       constructor(nounStem){
       this.nounForm = nounStem;
       }
      }

      var nounArray = [["puell", "girl","girls"], ["regin", "queen", "queens"],["fili", "daughter", "daughters"],["domin", "mistress", "mistresses"],["amic", "girl friend", "girl friends"],["besti", "beast", "beasts"], ["de", "goddess", "goddesses"], ["ancill", "maid servant", "maid servants"], ["femin", "woman", "women"]];

      var nounArrayMasc = [["agricol", "farmer", "farmers"],["poet", "poet", "poets"],["naut", "sailor", "sailors"]];

      var nounArray2 = [["servus", "serv","slave","slaves"],["libertus", "libert","freedman","freedmen"],["inimicus", "inimic","enemy","enemies"], ["patronus", "patron","patron", "patrons"],["dominus", "domin","master", "masters"],["magister", "magistr","teacher", "teachers"],["nuntius", "nunti","messenger", "messengers"], ["puer", "puer","boy", "boys"],["vilicus", "vilic","overseer", "overseers"],["vir", "vir","man", "men"]["venalicius", "venalici","slave dealer", "slave dealers"],["coquus", "coqu", "cook", "cooks"],["deus", "de", "god", "gods"],["Graecus", "Graec", "Greek", "Greeks"],["aper", "apr", "boar", "boars"],["avarus", "avar", "miser", "misers"]];

      var nounArray3 = [["canis", "can","dog","dogs"],["pugil", "pugil","boxer","boxers"],["fur", "fur","thief","thieves"],["gladiator", "gladiator","gladiator","gladiators"], ["pater", "patr", "father", "fathers"],["feles", "fel", "cat", "cats"],["cliens", "client", "client", "clients"],["hospes", "hospit", "guest", "guests"],["infans", "infant", "infant", "infants"],["senex", "sen", "old man", "old men"],["venator", "venator", "hunter", "hunters"],["hostis", "host", "enemy", "enemies"],["mercator", "mercator", "merchant", "merchant"],["mater", "matr","mother", "mothers"],["frater", "fratr","brother", "brothers"],["soror", "soror","sister", "sisters"],["homo", "homin","man", "men"],["uxor", "uxor","wife", "wives"],["iuvenis", "iuven","young man", "young men"]];


      var nounArray3Masc = [["canis", "can","dog","dogs"],["pugil", "pugil","boxer","boxers"],["fur", "fur","thief","thieves"],["gladiator", "gladiator","gladiator","gladiators"], ["pater", "patr", "father", "fathers"],["feles", "fel", "cat", "cats"],["cliens", "client", "client", "clients"],["hospes", "hospit", "guest", "guests"],["infans", "infant", "infant", "infants"],["senex", "sen", "old man", "old men"],["venator", "venator", "hunter", "hunters"],["hostis", "host", "enemy", "enemies"],["mercator", "mercator", "merchant", "merchant"],["frater", "fratr","brother", "brothers"],["homo", "homin","man", "men"],["iuvenis", "iuven","young man", "young men"]];

      var nounArray3Fem = [["canis", "can","dog","dogs"],["feles", "fel", "cat", "cats"], ["infant", "infant", "infant","infants"],["mater", "matr","mother", "mothers"],["soror", "soror","sister", "sisters"],["uxor", "uxor","wife", "wives"]];



      var randomNounIndex = Math.floor(Math.random() * nounArray.length);
      var randomNounMascIndex = Math.floor(Math.random() * nounArrayMasc.length);
      var randomNoun2Index = Math.floor(Math.random() * nounArray2.length);
      var randomNoun3Index = Math.floor(Math.random() * nounArray3.length);
      var randomNoun3MascIndex = Math.floor(Math.random() * nounArray3Masc.length);
      var randomNoun3FemIndex = Math.floor(Math.random() * nounArray3Fem.length);



      newNoun = new Subject(nounArray[randomNounIndex][0]);
      subjectSing = newNoun.nounForm + nomPE1;
      subjectPl = newNoun.nounForm + nomPE1Pl;

      newNounMasc = new Subject(nounArrayMasc[randomNounMascIndex][0]);
      subjectSingMasc = newNounMasc.nounForm + nomPE1;
      subjectPlMasc = newNounMasc.nounForm + nomPE1Pl;


      //subjectSing2 = newNoun2.nounForm;
      newNoun2 = new Subject(nounArray2[randomNoun2Index][0]);
      subjectSing2 = newNoun2.nounForm;
      newNoun2NomPl = new Subject(nounArray2[randomNoun2Index][1]);
      subjectPl2 = newNoun2NomPl.nounForm + nomPE2Pl;


      newNoun3Masc = new Subject(nounArray3Masc[randomNoun3MascIndex][0]);
      subjectSing3Masc = newNoun3Masc.nounForm;
      newNoun3NomPlMasc = new Subject(nounArray3Masc[randomNoun3MascIndex][1]);
      subjectPl3Masc = newNoun3NomPlMasc.nounForm + nomPE3Pl;


      newNoun3Fem = new Subject(nounArray3Fem[randomNoun3FemIndex][0]);
      subjectSing3Fem = newNoun3Fem.nounForm;
      newNoun3NomPlFem = new Subject(nounArray3Fem[randomNoun3FemIndex][1]);
      subjectPl3Fem = newNoun3NomPlFem.nounForm + nomPE3Pl;



    var randomObjectIndex = Math.floor(Math.random() * nounArray.length);

      newObject = new Subject(nounArray[randomObjectIndex][0]);
      objectSing = newObject.nounForm + accPE1;
      objectPl = newObject.nounForm + accPE1Pl;


      var randomObjectMascIndex = Math.floor(Math.random() * nounArrayMasc.length);

        newObjectMasc = new Subject(nounArrayMasc[randomObjectMascIndex][0]);
        objectSingMasc = newObjectMasc.nounForm + accPE1;
        objectPlMasc = newObjectMasc.nounForm + accPE1Pl;


    var randomObject2Index = Math.floor(Math.random() * nounArray2.length);

      newObject2 = new Subject(nounArray2[randomObject2Index][1]);
      objectSing2 = newObject2.nounForm + accPE2;
      objectPl2 = newObject2.nounForm + accPE2Pl;


      var randomObject3MascIndex = Math.floor(Math.random() * nounArray3Masc.length);
          newObject3Masc = new Subject(nounArray3Masc[randomObject3MascIndex][1]);
          objectSing3Masc = newObject3Masc.nounForm + accPE3;
          objectPl3Masc = newObject3Masc.nounForm + accPE3Pl;


          var randomObject3FemIndex = Math.floor(Math.random() * nounArray3Fem.length);
              newObject3Fem = new Subject(nounArray3Fem[randomObject3FemIndex][1]);
              objectSing3Fem = newObject3Fem.nounForm + accPE3;
              objectPl3Fem = newObject3Fem.nounForm + accPE3Pl;


          var presActPart = [["ambulans","ambulant", "walking"],["ridens","rident", "smiling"],["dormiens","dormient", "sleeping"],["cantans","cantant", "singing"],["cogitans","cogitant", "thinking"],["currens","current", "running"],["saliens","salient", "jumping"],["tremens","trement", "trembling"],["clamans","clamant", "yelling"],["discedens","discedent", "departing"]];

          var futActPart = [["ambulatur","intending to walk"],["risur","about to laugh"],["dormitur","going to sleep"],["cantatur","about to sing"],["cogitatur","about to think"],["cursur","going to run"],["saltur","about to jump"],["territur","about to frighten"],["clamatur","going to shout"],["discessur","intending to leave"],["deceptur","about to decieve"]];

          var perPassivePart = [["vis","seen"],["capt", "captured"],["audit","heard"],["territ", "frightened"],["fract","broken"],["servat","saved"],["vulnerat","wounded"],["monit","warned"],["invent","found"],["decept","deceived"],["accusat","accused"],["necat","killed"],["liberat","freed"],["petit","attacked"],["sciss","cut"],["deris","mocked"]];


          var randomPAPIndex = Math.floor(Math.random() * presActPart.length);
          var randomFAPIndex = Math.floor(Math.random() * futActPart.length);
          var randomPPPIndex = Math.floor(Math.random() * perPassivePart.length);

          newPAP = new Subject(presActPart[randomPAPIndex][0]);
          nomPAP = newPAP.nounForm;
        stemPAP = new Subject(presActPart[randomPAPIndex][1]);
          dirObjSingPAP = stemPAP.nounForm + accPE3;
          nomAccPluralPAP = stemPAP.nounForm + nomPE3Pl;




    timeleft = 25;
    responseButton.innerHTML = "";


      countDownTimer();

       countdown = setInterval(countDownTimer,1000);




      startButton.disabled = true;

//ranVerbTenseShuffleIndex = Math.floor(Math.random() * verbTenseArrayShuffle.length);

var verbTenseArrayShuffle = [[verbPresSing,verbArray[randomVerbIndex][0]],[verbPerSing,verbArray[randomVerbIndex][1]],[verbImpSing,verbArray[randomVerbIndex][2]]];
var verbTenseArrayPluralShuffle = [[verbPresPl,verbArrayPlural[randomVerbIndex][0]],[verbPerPl,verbArrayPlural[randomVerbIndex][1]],[verbImpPl,verbArrayPlural[randomVerbIndex][2]]];

shuffle(verbTenseArrayShuffle);
shuffle(verbTenseArrayPluralShuffle);


      ranISIndex = Math.floor(Math.random() * 3);


      if (ranISIndex == 0){

      sentence = "The " + nounArray3Masc[randomNoun3MascIndex][2] + ", who is " + futActPart[randomFAPIndex][1] + ", " + verbTenseArrayShuffle[0][1] + " the " + nounArray3Fem[randomObject3FemIndex][3] + ".";

        correctAnswer = subjectSing3Masc + " " + futActPart[randomFAPIndex][0] + nomPE2 + " " +  objectPl3Fem + " " + verbTenseArrayShuffle[0][0];

        wrongAnswer1 = subjectSing3Masc + " " + futActPart[randomFAPIndex][0] + accPE1Pl + " " +  objectPl3Fem + " " + verbTenseArrayShuffle[1][0];

        wrongAnswer2 = subjectPl3Masc + " " + futActPart[randomFAPIndex][0] + nomPE2Pl + " " +  objectPl3Fem + " " + verbPresPl;

        wrongAnswer3 = subjectSing3Masc + " " + futActPart[randomFAPIndex][0] + accPE1 + " " +  objectSing3Fem + " " + verbTenseArrayShuffle[2][0];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

    } else if (ranISIndex == 1){


    //sentence = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][1] + " the " + presActPart[randomPAPIndex][2] +  " " + nounArray[randomObjectIndex][2] + ".";

    sentence = "The " + nounArray2[randomNoun2Index][2] + ", who was " + futActPart[randomFAPIndex][1] + ", " + verbTenseArrayShuffle[0][1] + " the " + nounArray[randomObjectIndex][1] + ".";

      correctAnswer = subjectSing2 + " " + futActPart[randomFAPIndex][0] + nomPE2 + " " +  objectSing + " " + verbTenseArrayShuffle[0][0];

      wrongAnswer1 = subjectSing2 + " " + futActPart[randomFAPIndex][0] + accPE2 + " " +  objectSing + " " + verbTenseArrayShuffle[1][0];

      wrongAnswer2 = subjectPl2 + " " + futActPart[randomFAPIndex][0] + nomPE2Pl + " " +  objectSing + " " + verbPresPl;

      wrongAnswer3 = subjectSing2 + " " + futActPart[randomFAPIndex][0] + accPE2Pl + " " +  objectPl + " " + verbTenseArrayShuffle[2][0];


    checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
    shuffle(checkAnswers);

    } else {

      sentence = "The " + nounArray[randomNounIndex][2] + " " + verbTenseArrayPluralShuffle[0][1] + " the " + nounArray3Masc[randomObject3MascIndex][2] + " who was " + futActPart[randomFAPIndex][1] + ".";

        correctAnswer = subjectPl + " " + futActPart[randomFAPIndex][0] + accPE2 + " " +  objectSing3Masc + " " + verbTenseArrayPluralShuffle[0][0];

        wrongAnswer1 = subjectPl + " " + futActPart[randomFAPIndex][0] + nomPE1Pl + " " +  objectSing3Masc + " " + verbTenseArrayPluralShuffle[1][0];

        wrongAnswer2 = subjectPl + " " + futActPart[randomFAPIndex][0] + accPE2Pl + " " +  objectPl3Masc + " " + verbPresPl;

        wrongAnswer3 = subjectPl + " " + futActPart[randomFAPIndex][0] + accPE2 + " " +  objectSing3Masc + " " + verbTenseArrayPluralShuffle[2][0];


       checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
       shuffle(checkAnswers);

    }





    startButton.innerHTML = sentence;

    document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

    document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

    document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

    document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



      responseButton.disabled = false;



        resetAnswerColors();

        enableButtons();

          decrementCount();






        if (count == 0){

          gameOverAudio();

          startButton.innerHTML = "Select a New Game!";

          answerOne.innerHTML = game1Title;
          answerTwo.innerHTML = game2Title;
          answerThree.innerHTML = game3Title;
          answerFour.innerHTML = game4Title;

          document.getElementById("boxThree").innerHTML = "Score";
          responseButton.innerHTML = "You earned " + points + " points!";
          points = 0;

          stopTimer();
          document.getElementById("boxOne").innerHTML = "Timer";

          answerOne.onclick = function(){selectGame1()};
          answerTwo.onclick = function(){selectGame2()};
          answerThree.onclick = function(){selectGame3()};
          answerFour.onclick = function(){selectGame4()};

          count = 11;


           }




      }






















      function perPassPart(){

        class Verb{
         constructor(verbStem){
           this.verbForm = verbStem;
         }
        }


        var verbArray = [["loves","loved", "used to love", "am"], ["praises","praised", "was praising", "laud"],["carries","carried", "was carrying", "port"],["greets","greeted", "was greeting", "salut"],["kills","killed", "was killing", "nec"],["fights", "fought", "was fighting", "pugn"], ["saves","saved", "was saving", "serv"], ["looks at", "looked at", "was looking at",  "spect"], ["calls","called", "was calling", "voc"], ["annoys","annoyed", "was annoying", "vex"], ["wounds","wounded", "was wounding", "vulner"], ["beats","beat", "was beating", "verber"], ["scolds","scolded", "was scolding", "vituper"], ["hits","hit", "was hitting", "puls"], ["frees","freed", "was freeing", "liber"], ["waits for","waited for", "was waiting for", "exspect"], ["avoids","avoided", "was avoiding", "vit"], ["hides","hid", "was hiding", "cel"]];


        var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
        newVerb = new Verb(verbArray[randomVerbIndex][3]);
        verbPresSing = newVerb.verbForm + pres3rdSing;

        verbPerSing = newVerb.verbForm + per3rdSing;

        verbImpSing = newVerb.verbForm + imp3rdSing;


        verbPresSingEng = new Verb(verbArray[randomVerbIndex][0]);
        verbPerSingEng = new Verb(verbArray[randomVerbIndex][1]);
        verbImpSingEng = new Verb(verbArray[randomVerbIndex][2]);

        var verbArrayPlural = [["love","loved", "used to love", "am"],["praise","praised", "were praising", "laud"], ["carry","carried", "were carrying", "port"],["greet","greeted", "were greeting", "salut"],["kill","killed", "were killing", "nec"],["are fighting", "fought", "used to fight", "pugn"], ["save","saved", "kept saving", "serv"], ["look at", "looked at", "were looking at",  "spect"], ["are calling","called", "were calling", "voc"], ["annoy","annoyed", "were annoying", "vex"], ["wound","wounded", "were wounding", "vulner"], ["beat","beat", "were beating", "verber"], ["scold","scolded", "used to scold", "vituper"], ["strike","struck", "kept striking", "puls"], ["free","freed", "were freeing", "liber"], ["wait for","waited for", "were waiting for", "exspect"], ["avoid","avoided", "were avoiding", "vit"], ["hide","hid", "used to hide", "cel"]];

      var randomVerbPluralIndex = Math.floor(Math.random() * verbArrayPlural.length);
      newVerbPlural = new Verb(verbArrayPlural[randomVerbIndex][3]);
      verbPresPl = newVerbPlural.verbForm + pres3rdPl;

      verbPerPl = newVerbPlural.verbForm + per3rdPl;


      verbImpPl = newVerbPlural.verbForm + imp3rdPl;


        class Subject {

         constructor(nounStem){
         this.nounForm = nounStem;
         }
        }

        var nounArray = [["puell", "girl","girls"], ["regin", "queen", "queens"],["fili", "daughter", "daughters"],["domin", "mistress", "mistresses"],["amic", "girl friend", "girl friends"],["besti", "beast", "beasts"], ["de", "goddess", "goddesses"], ["ancill", "maid servant", "maid servants"], ["femin", "woman", "women"]];

        var nounArrayMasc = [["agricol", "farmer", "farmers"],["poet", "poet", "poets"],["naut", "sailor", "sailors"]];

        var nounArray2 = [["servus", "serv","slave","slaves"],["libertus", "libert","freedman","freedmen"],["inimicus", "inimic","enemy","enemies"], ["patronus", "patron","patron", "patrons"],["dominus", "domin","master", "masters"],["magister", "magistr","teacher", "teachers"],["nuntius", "nunti","messenger", "messengers"], ["puer", "puer","boy", "boys"],["vilicus", "vilic","overseer", "overseers"],["vir", "vir","man", "men"]["venalicius", "venalici","slave dealer", "slave dealers"],["coquus", "coqu", "cook", "cooks"],["deus", "de", "god", "gods"],["Graecus", "Graec", "Greek", "Greeks"],["aper", "apr", "boar", "boars"],["avarus", "avar", "miser", "misers"]];

        var nounArray3 = [["canis", "can","dog","dogs"],["pugil", "pugil","boxer","boxers"],["fur", "fur","thief","thieves"],["gladiator", "gladiator","gladiator","gladiators"], ["pater", "patr", "father", "fathers"],["feles", "fel", "cat", "cats"],["cliens", "client", "client", "clients"],["hospes", "hospit", "guest", "guests"],["infans", "infant", "infant", "infants"],["senex", "sen", "old man", "old men"],["venator", "venator", "hunter", "hunters"],["hostis", "host", "enemy", "enemies"],["mercator", "mercator", "merchant", "merchant"],["mater", "matr","mother", "mothers"],["frater", "fratr","brother", "brothers"],["soror", "soror","sister", "sisters"],["homo", "homin","man", "men"],["uxor", "uxor","wife", "wives"],["iuvenis", "iuven","young man", "young men"]];


        var nounArray3Masc = [["canis", "can","dog","dogs"],["pugil", "pugil","boxer","boxers"],["fur", "fur","thief","thieves"],["gladiator", "gladiator","gladiator","gladiators"], ["pater", "patr", "father", "fathers"],["feles", "fel", "cat", "cats"],["cliens", "client", "client", "clients"],["hospes", "hospit", "guest", "guests"],["infans", "infant", "infant", "infants"],["senex", "sen", "old man", "old men"],["venator", "venator", "hunter", "hunters"],["hostis", "host", "enemy", "enemies"],["mercator", "mercator", "merchant", "merchant"],["frater", "fratr","brother", "brothers"],["homo", "homin","man", "men"],["iuvenis", "iuven","young man", "young men"]];

        var nounArray3Fem = [["canis", "can","dog","dogs"],["feles", "fel", "cat", "cats"], ["mater", "matr","mother", "mothers"],["soror", "soror","sister", "sisters"],["uxor", "uxor","wife", "wives"]];



        var randomNounIndex = Math.floor(Math.random() * nounArray.length);
        var randomNounMascIndex = Math.floor(Math.random() * nounArrayMasc.length);
        var randomNoun2Index = Math.floor(Math.random() * nounArray2.length);
        var randomNoun3Index = Math.floor(Math.random() * nounArray3.length);
        var randomNoun3MascIndex = Math.floor(Math.random() * nounArray3Masc.length);
        var randomNoun3FemIndex = Math.floor(Math.random() * nounArray3Fem.length);



        newNoun = new Subject(nounArray[randomNounIndex][0]);
        subjectSing = newNoun.nounForm + nomPE1;
        subjectPl = newNoun.nounForm + nomPE1Pl;

        newNounMasc = new Subject(nounArrayMasc[randomNounMascIndex][0]);
        subjectSingMasc = newNounMasc.nounForm + nomPE1;
        subjectPlMasc = newNounMasc.nounForm + nomPE1Pl;


        //subjectSing2 = newNoun2.nounForm;
        newNoun2 = new Subject(nounArray2[randomNoun2Index][0]);
        subjectSing2 = newNoun2.nounForm;
        newNoun2NomPl = new Subject(nounArray2[randomNoun2Index][1]);
        subjectPl2 = newNoun2NomPl.nounForm + nomPE2Pl;


        newNoun3Masc = new Subject(nounArray3Masc[randomNoun3MascIndex][0]);
        subjectSing3Masc = newNoun3Masc.nounForm;
        newNoun3NomPlMasc = new Subject(nounArray3Masc[randomNoun3MascIndex][1]);
        subjectPl3Masc = newNoun3NomPlMasc.nounForm + nomPE3Pl;


        newNoun3Fem = new Subject(nounArray3Fem[randomNoun3FemIndex][0]);
        subjectSing3Fem = newNoun3Fem.nounForm;
        newNoun3NomPlFem = new Subject(nounArray3Fem[randomNoun3FemIndex][1]);
        subjectPl3Fem = newNoun3NomPlFem.nounForm + nomPE3Pl;



      var randomObjectIndex = Math.floor(Math.random() * nounArray.length);

        newObject = new Subject(nounArray[randomObjectIndex][0]);
        objectSing = newObject.nounForm + accPE1;
        objectPl = newObject.nounForm + accPE1Pl;


        var randomObjectMascIndex = Math.floor(Math.random() * nounArrayMasc.length);

          newObjectMasc = new Subject(nounArrayMasc[randomObjectMascIndex][0]);
          objectSingMasc = newObjectMasc.nounForm + accPE1;
          objectPlMasc = newObjectMasc.nounForm + accPE1Pl;


      var randomObject2Index = Math.floor(Math.random() * nounArray2.length);

        newObject2 = new Subject(nounArray2[randomObject2Index][1]);
        objectSing2 = newObject2.nounForm + accPE2;
        objectPl2 = newObject2.nounForm + accPE2Pl;


        var randomObject3MascIndex = Math.floor(Math.random() * nounArray3Masc.length);
            newObject3Masc = new Subject(nounArray3Masc[randomObject3MascIndex][1]);
            objectSing3Masc = newObject3Masc.nounForm + accPE3;
            objectPl3Masc = newObject3Masc.nounForm + accPE3Pl;


            var randomObject3FemIndex = Math.floor(Math.random() * nounArray3Fem.length);
                newObject3Fem = new Subject(nounArray3Fem[randomObject3FemIndex][1]);
                objectSing3Fem = newObject3Fem.nounForm + accPE3;
                objectPl3Fem = newObject3Fem.nounForm + accPE3Pl;


            var presActPart = [["ambulans","ambulant", "walking"],["ridens","rident", "smiling"],["dormiens","dormient", "sleeping"],["cantans","cantant", "singing"],["cogitans","cogitant", "thinking"],["currens","current", "running"],["saliens","salient", "jumping"],["tremens","trement", "trembling"],["clamans","clamant", "yelling"],["discedens","discedent", "departing"]];

            var futActPart = [["ambulatur","intending to walk"],["risur","about to laugh"],["dormitur","going to sleep"],["cantatur","about to sing"],["cogitatur","about to think"],["cursur","going to run"],["saltur","about to jump"],["territur","about to frighten"],["clamatur","going to shout"],["discessur","intending to leave"],["deceptur","about to decieve"]];

            var perPassPart = [["vis","seen"],["capt", "captured"],["audit","heard"],["territ", "frightened"],["fract","broken"],["servat","saved"],["vulnerat","wounded"],["monit","warned"],["invent","found"],["decept","deceived"],["accusat","accused"],["necat","killed"],["liberat","freed"],["petit","attacked"],["sciss","cut"],["deris","mocked"]];


            var randomPAPIndex = Math.floor(Math.random() * presActPart.length);
            var randomFAPIndex = Math.floor(Math.random() * futActPart.length);
            var randomPPPIndex = Math.floor(Math.random() * perPassPart.length);

            newPAP = new Subject(presActPart[randomPAPIndex][0]);
            nomPAP = newPAP.nounForm;
          stemPAP = new Subject(presActPart[randomPAPIndex][1]);
            dirObjSingPAP = stemPAP.nounForm + accPE3;
            nomAccPluralPAP = stemPAP.nounForm + nomPE3Pl;




      timeleft = 25;
      responseButton.innerHTML = "";


        countDownTimer();

         countdown = setInterval(countDownTimer,1000);




        startButton.disabled = true;

  //ranVerbTenseShuffleIndex = Math.floor(Math.random() * verbTenseArrayShuffle.length);

  var verbTenseArrayShuffle = [[verbPresSing,verbArray[randomVerbIndex][0]],[verbPerSing,verbArray[randomVerbIndex][1]],[verbImpSing,verbArray[randomVerbIndex][2]]];
  var verbTenseArrayPluralShuffle = [[verbPresPl,verbArrayPlural[randomVerbIndex][0]],[verbPerPl,verbArrayPlural[randomVerbIndex][1]],[verbImpPl,verbArrayPlural[randomVerbIndex][2]]];

  shuffle(verbTenseArrayShuffle);
  shuffle(verbTenseArrayPluralShuffle);


        ranISIndex = Math.floor(Math.random() * 3);


        if (ranISIndex == 0){

        sentence = "The " + nounArray3Masc[randomNoun3MascIndex][2] + ", who was " + perPassPart[randomFAPIndex][1] + ", " + verbTenseArrayShuffle[0][1] + " the " + nounArray3Fem[randomObject3FemIndex][3] + ".";

          correctAnswer = subjectSing3Masc + " " + perPassPart[randomFAPIndex][0] + nomPE2 + " " +  objectPl3Fem + " " + verbTenseArrayShuffle[0][0];

          wrongAnswer1 = subjectSing3Masc + " " + perPassPart[randomFAPIndex][0] + nomPE2 + " " +  objectPl3Fem + " " + verbTenseArrayShuffle[1][0];

          wrongAnswer2 = subjectPl3Masc + " " + perPassPart[randomFAPIndex][0] + nomPE2Pl + " " +  objectPl3Fem + " " + verbPresPl;

          wrongAnswer3 = subjectSing3Masc + " " + perPassPart[randomFAPIndex][0] + accPE1 + " " +  objectSing3Fem + " " + verbTenseArrayShuffle[2][0];


        checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
        shuffle(checkAnswers);

      } else if (ranISIndex == 1){


      //sentence = "The " + nounArray[randomNounIndex][1] + " " + verbArray[randomVerbIndex][1] + " the " + presActPart[randomPAPIndex][2] +  " " + nounArray[randomObjectIndex][2] + ".";

      sentence = "The " + nounArray2[randomNoun2Index][2] + ",  having been " + perPassPart[randomFAPIndex][1] + ", " + verbTenseArrayShuffle[0][1] + " the " + nounArray[randomObjectIndex][2] + ".";

        correctAnswer = subjectSing2 + " " + perPassPart[randomFAPIndex][0] + nomPE2 + " " +  objectPl + " " + verbTenseArrayShuffle[0][0];

        wrongAnswer1 = subjectSing2 + " " + perPassPart[randomFAPIndex][0] + accPE1Pl + " " +  objectPl + " " + verbTenseArrayShuffle[1][0];

        wrongAnswer2 = subjectPl2 + " " + perPassPart[randomFAPIndex][0] + nomPE2Pl + " " +  objectSing + " " + verbPresPl;

        wrongAnswer3 = subjectSing2 + " " + perPassPart[randomFAPIndex][0] + nomPE2 + " " +  objectPl + " " + verbTenseArrayShuffle[2][0];


      checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
      shuffle(checkAnswers);

      } else {

        sentence = "The " + nounArray[randomNounIndex][2] + " " + verbTenseArrayPluralShuffle[0][1] + " the " + perPassPart[randomFAPIndex][1] + " " + nounArray3Masc[randomObject3MascIndex][2] + ".";

          correctAnswer = subjectPl + " " + perPassPart[randomFAPIndex][0] + accPE2 + " " +  objectSing3Masc + " " + verbTenseArrayPluralShuffle[0][0];

          wrongAnswer1 = subjectPl + " " + perPassPart[randomFAPIndex][0] + nomPE1Pl + " " +  objectSing3Masc + " " + verbTenseArrayPluralShuffle[1][0];

          wrongAnswer2 = subjectPl + " " + perPassPart[randomFAPIndex][0] + accPE2Pl + " " +  objectPl3Masc + " " + verbPresPl;

          wrongAnswer3 = subjectPl + " " + perPassPart[randomFAPIndex][0] + accPE2 + " " +  objectSing3Masc + " " + verbTenseArrayPluralShuffle[2][0];


         checkAnswers = [[correctAnswer,true],[wrongAnswer1,false],[wrongAnswer2,false],[wrongAnswer3,false]];
         shuffle(checkAnswers);

      }





      startButton.innerHTML = sentence;

      document.getElementById(answers[0]).innerHTML = checkAnswers[0][0];

      document.getElementById(answers[1]).innerHTML = checkAnswers[1][0];

      document.getElementById(answers[2]).innerHTML =  checkAnswers[2][0];

      document.getElementById(answers[3]).innerHTML = checkAnswers[3][0];



        responseButton.disabled = false;



          resetAnswerColors();

          enableButtons();

            decrementCount();






          if (count == 0){

            gameOverAudio();

            startButton.innerHTML = "Select a New Game!";

            answerOne.innerHTML = game1Title;
            answerTwo.innerHTML = game2Title;
            answerThree.innerHTML = game3Title;
            answerFour.innerHTML = game4Title;

            document.getElementById("boxThree").innerHTML = "Score";
            responseButton.innerHTML = "You earned " + points + " points!";
            points = 0;

            stopTimer();
            document.getElementById("boxOne").innerHTML = "Timer";

            answerOne.onclick = function(){selectGame1()};
            answerTwo.onclick = function(){selectGame2()};
            answerThree.onclick = function(){selectGame3()};
            answerFour.onclick = function(){selectGame4()};

            count = 11;


             }


        }





   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}









function clickedAnswerOne(){


	if (checkAnswers[0][1] == true){

    correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;


    answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";


    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = sentence;
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


	//	unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";


		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (checkAnswers[1][1] == true){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";

    answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";

		responseButton.innerHTML = sentence;
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		//unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (checkAnswers[2][1] == true){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		//timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
    answerTwo.style.backgroundColor = "black";
    answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerFour.style.color = "red";
    answerFour.style.backgroundColor = "black";
    answerFour.style.border = "black";
    answerFour.disabled = true;
    document.getElementById("A4").style.backgroundColor = "black";


		responseButton.innerHTML = sentence;

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


	//	unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}



function clickedAnswerFour(){



	if (checkAnswers[3][1] == true){


		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		//responseButton.disabled = true;
		//timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";

    answerOne.style.color = "red";
    answerOne.style.backgroundColor = "black";
    answerOne.style.border = "black";
    document.getElementById("A1").style.backgroundColor = "black";

    answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
    document.getElementById("A2").style.backgroundColor = "black";

    answerThree.style.color = "red";
    answerThree.style.backgroundColor = "black";
    answerThree.style.border = "black";
    document.getElementById("A3").style.backgroundColor = "black";




		responseButton.innerHTML = sentence;

		responseButton.style.color = "yellow";

    responseButton.style.color = "yellow";
		startButton.innerHTML = "Optime!  Next Question!";
		startButton.disabled = false;


		//unHideResponseNext();




	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}

var rachel_name = "Rachel Daydou";
var rachel_company = "Lihaoma";
var rachel_img = "img/swid_rachel.jpg";
var rachel_desc = "I am French, 29 yo, born and raised in Paris' Chinatown. I’ve been in China for 7 years, first 4 years in Beijing as Brand Manager for ABInBev's imported beers in China. Then I was Project Manager for the fashion retail group Beaumanoir in Shanghai where I opened and managed 20 flagship stores with Y200M yearly revenue. 3 years ago, I became the co-founder of Lihaoma礼好吗 . Lihaoma turns advertising into entertainment. Users play branded games to win branded rewards! We’ve helped 350 brands including Feiyue, Budweiser and Dunkin Donuts multiply by 10 their ad engagement rate. We were awarded most innovative startup in 2016 by the Shanghai government and have been selected out of 210 companies to join Chinaccelerator Batch 11.\n\nPersonal achievements:\n8 times France Champion of KungFu Wushu.\nHSK5\n\nProfessional achievements:\nGBC Prize for women entrepreneurship\nInvited as jury member for Startup Salad (in Mandarin)\nInterviewed on SH TV and CCTV (in Mandarin)\n\nCommunities:\nI'm managing member of Startup Grind Shanghai. I also mentor startups of French Tech Shanghai. I teach Lean Startup & Leadership at the university of Shanghai. I've been in entrepreneurs' panels organised by National University of Singapore.\n\nEntrepreneurship activities:\nI lead the entrepreneurship program of UTSEUS Shanghai University. This diploma program brings international students from ideation to prototyping to fund raising in 4 months, through 13 workshops, 3 pitches, 2 hackathons, 1 study trip and 1 professional exhibition, with the help of a mentor and 200 advisors. We get excellent feedbacks from our partners Mobike, WeWork, Caohejing High tech Park, French Tech among others.\n\nYou can check my LinkedIn here: https://cn.linkedin.com/in/rdaydou.";

var mary_name = "Mary Ma";
var mary_company = "KOL F&B";
var mary_img = "img/swid_mary.jpg";
var mary_desc = "Mary Ma is born and raised in Shanghai and holds a Master of Art in TV Production from the Shanghai Theater Academy and Bachelor of Arts in Arabic Language and Literature from Shanghai International Studies University. She is one of the co-founder of a women's lifestyle blog Fu*koff30 as well as another co-founder of a popular pop-up stand in Shanghai called 11PM serving wagyu quality burgers late at night.\n\nHer interests in the culinary arts led up to doing private homemade meals via a Chinese APP platform called 我有饭 (Let's have a meal) which had over 30 lunch/dinning events severed within a year. This led to her TV appearance on a local TV show, Crazy Refrigerator and her collaborations with various brands (Pizza Hut, Heinneken, Airbnb, Ascott, NordicTrack, Puma and many others). In her social media platforms such as Wechat and Weibo, she has over 30K followers in total. She also has over 5 years of work experience in PR with a strong focus on digital marketing, brand awareness and providing direction for the company's public-facing communications.";

var miranda_name = "Miranda Tan";
var miranda_company = "Robin8";
var miranda_img = "img/swid_miranda.jpg";
var miranda_desc = "Robin8 is apotentially disruptive technology in the media, advertising and marketing industry.\n\nFor the consumer, Robin8 is an intelligent App on iOS or android to help anyone manage their influence. Robin8 believes every person hasuntapped influence. Robin8 offers every person an army of robots tomanage and monetize their influence using the Robin8 app. Using Robin8, every person can see their influence scores and how they rank compared to friends or industry experts. Robin8 calculates influence as the abilityfor the user to  inspire someone to follow, like or retweet or outreach withothers. In addition to your influence score, Robin8 will recommendsrelevant content (native advertising) and paid campaigns to the user. Currently Robin8 has identified over 14 Million user profiles from Weibo, Zhihu and WeChat public accounts.  If Robin8 has the person’s profile uponregistration, Robin8 will link the profile to the person and if Robin8 does not have the users profile, Robin8 will calculate the person’s profile and influence based on the content and the campaign that the user takes.";

var evrim_name = "Evrim Kanbur";
var evrim_company = "Expat Neighbors";
var evrim_img = "img/swid_evrim.jpg";
var evrim_desc = "Evrim Kanbur, founder of Expat Neighbors.\n\nExpat Neighbors improves neighborhood connections between expats around the world. Developed in Shanghai with members of 3,800 people in Shanghai and 200 members in Hong Kong and Tokyo.\n\nEvrim decided on the entrepreneurial path 3 years ago with the intent to bring about a virtual neighborhood spirit by building meaningful relationships that enable her model to match the needs with offers made by expat neighbors. She has spoken at TEDxYouth@Suzhou on this topic. Previous to Expat Neighbors, she was an auditor at Deloitte and a BD Manager and Payment Systems Turkey Manager at Riot Games.";

var fei_name = "Fei Fang";
var fei_company = "Ping Plus Plus";
var fei_img = "img/swid_fei.jpg";
var fei_desc = "Product Marketing Director of Pingplusplus.\nWomen Tech Lead of Google Developer Group Shanghai.\n\nFei was the winner of Hong Kong Cyberport Hackathon 2014, the first prize in Aliyun Creative Software and Game Design 2015, and the first prize of Hardware Design of NYU Hackathon 2015 in Shanghai. With a strong tech background, Fei has participated in startups for three times and done zero-to-one marketing for two times. During her stay in Pingplusplus, she performed as the product marketing director and promoted products by marketing and customer positioning. Moreover, she runs Google Developer Group as a volunteer and is recognised as the women tech lead in Shanghai by Google.";

$.fn.multiline = function(text){
	this.text(text);
	this.html(this.html().replace(/\n/g,'<br/>'));
	return this;
}


$(document).ready(function(){


	$("#speakers li").click(function() {
		switch(this.id) {
			case '0':
			$("#popup_name").text(rachel_name);
			$("#popup_company").text(rachel_company);
			$("#popup_img").attr('src', rachel_img);
			$("#popup_desc").multiline(rachel_desc);
			break;
			case '1':
			$("#popup_name").text(mary_name);
			$("#popup_company").text(mary_company);
			$("#popup_img").attr('src', mary_img);
			$("#popup_desc").multiline(mary_desc);
			break;
			case '2':
			$("#popup_name").text(miranda_name);
			$("#popup_company").text(miranda_company);
			$("#popup_img").attr('src', miranda_img);
			$("#popup_desc").multiline(miranda_desc);
			break;
			case '3':
			$("#popup_name").text(evrim_name);
			$("#popup_company").text(evrim_company);
			$("#popup_img").attr('src', evrim_img);
			$("#popup_desc").multiline(evrim_desc);
			break;
			case '4':
			$("#popup_name").text(fei_name);
			$("#popup_company").text(fei_company);
			$("#popup_img").attr('src', fei_img);
			$("#popup_desc").multiline(fei_desc);
			break;
			default:
			$("#popup_name").text(rachel_name);
			$("#popup_company").text(rachel_company);
			$("#popup_img").attr('src', rachel_img);
			$("#popup_desc").multiline(rachel_desc);
		} 
		showpopup();
	});
	$("#cancel_button").click(function(){
		hidepopup();
	});
	$("#close_button").click(function(){
		hidepopup();
	});

});


function showpopup()
{
	$(".popup_box").fadeToggle();
	$(".backpop").fadeToggle();
	$(".popup_box").css({"visibility":"visible","display":"inline-block"});
	$(".backpop").css({"visibility":"visible","display":"block"});
}

function hidepopup()
{
	$(".popup_box").fadeToggle();
	$(".backpop").fadeToggle();
	$(".popup_box").css({"visibility":"hidden","display":"none"});
	$(".backpop").css({"visibility":"hidden","display":"none"});
}
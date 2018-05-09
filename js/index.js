// Created by Danielle Monroe for her Free Code Camp project on 3-6-2018
var getQuoteBtn = document.getElementById("moar-quotes"); //get more quotes button
var shareTweetBtn = document.getElementById("tweet-this"); // share to twitter button

function introLoad() { // loads first quote, by me! 
  document.getElementById("quote-box").innerHTML = "<i class='fas fa-quote-left' style='color: #b5c5d8; font-size: 5vh;'></i> Welcome to a collection of quotes provided by my weird and wonderful friends.";
  document.getElementById("author-box").innerHTML = "- DC";
}

getQuoteBtn.addEventListener("click", function(){ // tells quote button to pull data from the JSON quote url
  var quoteRequest = new XMLHttpRequest();
quoteRequest.open('GET', 'https://api.myjson.com/bins/tf4rl'); // JSON quote url location
quoteRequest.onload = function() {
  var quoteData = JSON.parse(quoteRequest.responseText);
  myFunction(quoteData);
};
quoteRequest.send();
});

function myFunction(data) {
  var quoteString = "";
  var authorString ="";
  var contributorString="";
  
  var num = Math.floor(Math.random() * 80); // 80 = total # of quotes. Randomly picks a number, so we get a random quote from the list.
 
  quoteString += data[num].quote;
  authorString += data[num].author; 
  contributorString += data[num].contributor;
  
  if (authorString === "Unknown") {
		authorString = "";
  } // ensures unknown authors don't display 
 
  document.getElementById("quote-box").innerHTML = "<i class='fas fa-quote-left' style='color: #b5c5d8; font-size: 5vh;'></i> " + quoteString;
  document.getElementById("author-box").innerHTML = authorString;
  document.getElementById("contributor-box").innerHTML = "Contributed by: " + contributorString;
} // inputs the called random JSON data into the assigned div locations 
  
shareTweetBtn.addEventListener("click", function(){ // waits for the tweet button to be clicked
  var cleanQuote = document.getElementById('quote-box').innerHTML;
  cleanQuote = cleanQuote.replace("❝ ",""); 
  document.getElementById('quote-box').innerHTML = cleanQuote; //removes weird extra quote from quote text, and makes a new one 
  var url = "https://twitter.com/intent/tweet"; //tweet share URL
  var text= "\"" + cleanQuote + "\" " + document.getElementById("author-box").textContent; //creates new URL data 

  var hashtags = "quotes, FCC, DCMonroe"; //my hashtags

  window.open(url + "?text=" + text + ";hashtags=" + hashtags, "width=500,heigth=300"); //opens twitter and assembles the URL for tweeting action! 
});
//Quote Animation 
var bubble=70;

for (var i=0 ;i <= bubble; i++ ){
  var moveVal = Math.ceil(Math.random()*50);
  var posVal = Math.ceil(Math.random()*40);
  var scaleVal = Math.ceil(Math.random()*10);
  var shakeVal = Math.ceil(Math.random()*5);
  var stretch = Math.ceil(Math.random()*5);
  $(".bubbles").append('<div class="move'+moveVal+' pos'+posVal+'"><div class="scale'+scaleVal+'"><div class="bubble shake'+shakeVal+'"><span class="bubble stretch'+stretch+'"><i class="fas fa-quote-left" style="color: #699bc8; font-size: 6vh; opacity: .3"></i></span></div></div>');
}
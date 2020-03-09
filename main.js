//here I am going to create the api connections to pass to the front end. ONE API TO RULE THEM ALL!!
// API key pBdojVpzHyA9Af8Jrr2x
// must be passed as http header not in the URL
var gandalfId = "5cd99d4bde30eff6ebccfea0";
var aragornId = "5cd99d4bde30eff6ebccfbe6";
var bagginsId = "5cd99d4bde30eff6ebccfc15";
var baseURL = 'https://the-one-api.herokuapp.com/v1/';

var apikey = 'pBdojVpzHyA9Af8Jrr2x';

// var gandalfButton = $('#gandalf');


// define classes 
class Gandalf {
    constructor(quotes) {
        this.gandyWis = quotes;
    }
    giveQuote() {
        //give a random quote
        let index = Math.floor((Math.random() * this.gandyWis.length) + 1);
        return this.gandyWis[index];
    }
}

class Aragorn {
    constructor(quotes) {
        this.aragornThots = quotes;
    }
    giveQuote() {
        //give a random quote
        let index = Math.floor((Math.random() * this.aragornThots.length) + 1);
        return this.aragornThots[index];
    }
}
class Frodo {
    constructor(quotes) {
        this.frodoFacts = quotes;
    }
    giveQuote() {
        //give a random quote
        let index = Math.floor((Math.random() * this.frodoFacts.length) + 1);
        return this.frodoFacts[index];
    }
}


//select start button
var startButton = $('#all-ajax');

//create event listener
startButton.on(
    {
        "click": function () {
            $.ajax({
                "url": baseURL + "character/" + gandalfId + "/quote",
                "type": "GET",
                "data": {},
                "dataType": "JSON",
                "headers": { "Authorization": "Bearer " + apikey }
            }).done(
                function (resultJSON) {
                    let quotes = [];
                    for (i = 0; i < resultJSON.docs.length; i++) {
                        quotes.push(resultJSON.docs[i].dialog);
                    }
                    var gandy = new Gandalf(quotes);
                    console.log(gandy.giveQuote());
                    var ganDOM = document.getElementById('gandyWis');
                    ganDOM.innerHTML += gandy.giveQuote();
                    
                }
            ).fail(
                function (xhr, status, error) {
                    console.log('there was an error ' + error);
                }
            ).always(
                function () {
                    $.ajax({
                        "url": baseURL + "character/" + bagginsId + "/quote",
                        "type": "GET",
                        "data": {},
                        "dataType": "JSON",
                        "headers": { "Authorization": "Bearer " + apikey }
                    }).done(
                        function (resultJSON) {
                            let quotes = [];
                            for (i = 0; i < resultJSON.docs.length; i++) {
                                quotes.push(resultJSON.docs[i].dialog);
                            }
                            var myLad = new Frodo(quotes);
                            console.log(myLad.giveQuote());
                            var froDOM = document.getElementById('frodoFacts');
                            froDOM.innerHTML += myLad.giveQuote();
                        }
                    ).fail(
                        function (xhr, status, error) {
                            console.log('there was an error ' + error);
                        }
                    ).always(
                        function () {
                            $.ajax({
                                "url": baseURL + "character/" + aragornId + "/quote",
                                "type": "GET",
                                "data": {},
                                "dataType": "JSON",
                                "headers": { "Authorization": "Bearer " + apikey }
                            }).done(
                                function (resultJSON) {
                                    let quotes = [];
                                    for (i = 0; i < resultJSON.docs.length; i++) {
                                        quotes.push(resultJSON.docs[i].dialog);
                                    }
                                    var elessar = new Aragorn(quotes);
                                    console.log(elessar.giveQuote());
                                    var arDOM = document.getElementById('aragornThots');
                                    arDOM.innerHTML += elessar.giveQuote();
                                }
                            ).fail(
                                function (xhr, status, error) {
                                    console.log('there was an error ' + error);
                                }
                            ).always(
                                function () {
                                    console.log('request complete');
                                }
                            );
                        }
                    );
                }
            );
        }
        
    }
);






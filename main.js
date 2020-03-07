//here I am going to create the api connections to pass to the front end. ONE API TO RULE THEM ALL!!
// API key pBdojVpzHyA9Af8Jrr2x
// must be passed as http header not in the URL
var gandalfId = "5cd99d4bde30eff6ebccfea0";
var aragornId = "5cd99d4bde30eff6ebccfbe6";
var bagginsId = "5cd99d4bde30eff6ebccfc15";
var baseURL = 'https://the-one-api.herokuapp.com/v1/';

var apikey = 'pBdojVpzHyA9Af8Jrr2x';

var gandalfButton = $('#gandalf');


gandalfButton.on(
    {
        "click": function(){
            $.ajax({
                "url": baseURL + "character/" + gandalfId + "/quote",
                "type": "GET",
                "data": {},
                "dataType": "JSON",
                "headers": {"Authorization": "Bearer " +apikey}
            }).done(
                function(resultJSON){
                    console.log('success!');
                    console.log(resultJSON);

                    // let characters = resultJSON.docs;
                    // for(i=0; i< characters.length; i++){
                    //     //console.log(characters[i].name);
                    //     if(characters[i].name == "Frodo Baggins"){
                    //         console.log(characters[i].name);
                    //         console.log(characters[i]._id);
                    //     } else {
                    //         //console.log('nothign');
                    //     }
                    // }
                }  
            ).fail(
                function(xhr, status, error){
                    console.log('there was an error ' + error);
                }
            ).always(
                function(){
                    console.log('request complete');
                }
            );
        }
    }
);

var frodoButton = $('#frodo');


frodoButton.on(
    {
        "click": function(){
            $.ajax({
                "url": baseURL + "character/" + bagginsId + "/quote",
                "type": "GET",
                "data": {},
                "dataType": "JSON",
                "headers": {"Authorization": "Bearer " +apikey}
            }).done(
                function(resultJSON){
                    console.log('success!');
                    console.log(resultJSON);

                    // let characters = resultJSON.docs;
                    // for(i=0; i< characters.length; i++){
                    //     //console.log(characters[i].name);
                    //     if(characters[i].name == "Frodo Baggins"){
                    //         console.log(characters[i].name);
                    //         console.log(characters[i]._id);
                    //     } else {
                    //         //console.log('nothign');
                    //     }
                    // }
                }  
            ).fail(
                function(xhr, status, error){
                    console.log('there was an error ' + error);
                }
            ).always(
                function(){
                    console.log('request complete');
                }
            );
        }
    }
);

var aragornButton = $('#aragorn');


aragornButton.on(
    {
        "click": function(){
            $.ajax({
                "url": baseURL + "character/" + aragornId + "/quote",
                "type": "GET",
                "data": {},
                "dataType": "JSON",
                "headers": {"Authorization": "Bearer " +apikey}
            }).done(
                function(resultJSON){
                    console.log('success!');
                    console.log(resultJSON);

                    // let characters = resultJSON.docs;
                    // for(i=0; i< characters.length; i++){
                    //     //console.log(characters[i].name);
                    //     if(characters[i].name == "Frodo Baggins"){
                    //         console.log(characters[i].name);
                    //         console.log(characters[i]._id);
                    //     } else {
                    //         //console.log('nothign');
                    //     }
                    // }
                }  
            ).fail(
                function(xhr, status, error){
                    console.log('there was an error ' + error);
                }
            ).always(
                function(){
                    console.log('request complete');
                }
            );
        }
    }
);
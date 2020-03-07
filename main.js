//here I am going to create the api connections to pass to the front end. ONE API TO RULE THEM ALL!!
// API key pBdojVpzHyA9Af8Jrr2x
// must be passed as http header not in the URL

var baseURL = 'https://the-one-api.herokuapp.com/v1/';

var apikey = 'pBdojVpzHyA9Af8Jrr2x';

var button = $('#button');


button.on(
    {
        "click": function(){
            $.ajax({
                "url": baseURL + "movie",
                "type": "GET",
                "data": {},
                "dataType": "JSON",
                "headers": {"Authorization": "Bearer " +apikey}
            }).done(
                function(resultJSON){
                    console.log('success!');
                    console.log(resultJSON);
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
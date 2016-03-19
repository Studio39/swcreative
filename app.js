var express = require('express');

var app = express();
https = require('https');

app.use(express.static(__dirname + '/public'));
var exhb = require('express3-handlebars');
app.engine('handlebars', exhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./app/routes.js')(app);
//
//https.get('https://api.twitter.com/1.1/statuses/user_timeline.json', function(data) {
//    
//});

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
    
    console.log('Server listening at http://%s%s', host, port)
});
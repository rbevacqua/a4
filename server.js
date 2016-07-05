var express = require('express');
var app = express();
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

// Set views path, template engine and default layout
app.use(express.static(__dirname + '/assets'));  // built in middleware function
app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(expressValidator({
    customValidators: {
    	
    }
})); // This line must be immediately after express.bodyParser()!    	


// Get the index page:
app.get('/', function(req, res) {
    
});

app.post('/signup', function(req, res) {

});

app.post('/login', function(req, res) {

});
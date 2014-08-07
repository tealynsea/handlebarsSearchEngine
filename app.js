var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var dummyData = require('./models/programming.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

app.post('/search', function(req, res) {
	console.log(dummyData);

	var title= '';
	var description= '';
	for(var language in dummyData.programming) {
		console.log(language, req.body.data);
		if(language.toUpperCase() === req.body.data.toUpperCase()) {
					title=language
					description=dummyData.programming[language].desc
		}
	}
		res.send({title: title, description: description});
	 
});

var server = app.listen(9234, function() {
	console.log('Express server listening on port ' + server.address().port);
});

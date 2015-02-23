var express = require('express')
var app = express()

// set engine
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

// define routes
app.use(express.static(__dirname + '/build'));
app.get('/:angjsroute(search|about|feedback)?', function (req, res) {
	res.render('index.html')
})
app.get('/static/:type/:module/:file', function (req, res) {
	res.sendFile(
		['app', req.params.module, req.params.type, req.params.file].join('/'),
		{"root": __dirname}
	)
});

var server = app.listen(3000, function() {

})

var express = require('express');
var app = express();
var db = require("./node/db.js");
var user = db.user;

app.get("/", function(req, res) {
	res.redirect("/pigbank/detail");
})

app.get("/pigbank", function(req, res) {
	res.redirect("/pigbank/detail");
})

app.get('/test', function(req, res) {
	res.send('test');
})

app.get('/db', function(req, res) {
	res.send(user);
})


app.get('/download', function(req, res) {
	res.download("bower.json", "文件");
})

app.use(express.static('app'));

app.get("*", function(req, res) {
	res.status(404).redirect('/error/404.html');
})

var server = app.listen(8088, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs');

const port = 3000;


var http = require('http');
var url = require('url');
var querystring = require('querystring');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



//The Routing//

app.get('/', (req, res) => {
  res.render('Main_page.ejs', {});
});

app.get('/Main_page.html', (req, res) => {
  res.render('Main_page.ejs', {});
});

app.get('/Menu.html', (req, res) => {
  res.render('Menu.ejs', {});
});

app.get('/Experience.html', (req, res) => {
  res.render('Experience.ejs', {});
});

app.get('/Location.html', (req, res) => {
  res.render('Location.ejs', {});
});

app.get('/Our_Team.html', (req, res) => {
  res.render('Our_Team.ejs', {});
});

app.get('/Reservation.html', (req, res) => {
  res.render('Reservation.ejs', {});
});

app.get('/Main_page_french.html', (req, res) => {
  res.render('Main_page_french.ejs', {});
});

app.get('/Menu_french.html', (req, res) => {
  res.render('Menu_french.ejs', {});
});

app.get('/Experience_french.html', (req, res) => {
  res.render('Experience_french.ejs', {});
});

app.get('/Location_french.html', (req, res) => {
  res.render('Location_french.ejs', {});
});

app.get('/Our_Team_french.html', (req, res) => {
  res.render('Our_Team_french.ejs', {});
});

app.get('/Reservation_french.html', (req, res) => {
  res.render('Reservation_french.ejs', {});
});

app.post('/resv', (req, res) => {
	var params = req.body;

	console.log("helo");
	console.log(params);

	retValue = params.fullname + params.pnumber + params.mail + params.attendee + params.res_date + params.res_time + "\r\n";

	fs.appendFile('reservation.txt', retValue, function (err) {
  				if (err) throw err;
  				console.log('Saved! to reservation.txt');
			});

	res.render('Reservation.ejs', {});
});




app.listen(port, () => {
  console.log('Express server is up!');
});

app.use( express.static( "public" ) );



app.post('/mesg_main_page', (req, res) => {
  var params = req.body;
retValue = params.email + "\r\n" +params.message + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Main_page.ejs', {});
});

app.post('/mesg_main_page_french', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Main_page_french.ejs', {});
});

app.post('/mesg_menu', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Menu.ejs', {});
});

app.post('/mesg_menu_french', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Menu_french', {});
});

app.post('/mesg_our_team', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Our_Team.ejs', {});
});

app.post('/mesg_our_team_french', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Our_Team_french.ejs', {});
});

app.post('/mesg_location', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Location.ejs', {});
});

app.post('/mesg_location_french', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Location_french.ejs', {});
});

app.post('/mesg_Reservation', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Reservation.ejs', {});
});

app.post('/mesg_Reservation_french', (req, res) => {
    var params = req.body;
retValue = params.email + "\r\n" +params.messgae + "\r\n";
fs.appendFile('messages.txt', retValue, function (err) {
if (err) throw err;
console.log('Saved! to reservation.txt');
});
res.render('Reservation_french.ejs', {});
});

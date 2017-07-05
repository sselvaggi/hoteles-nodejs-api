var express  = require("express"),
    methodOverride = require("method-override");
    bodyParser  = require("body-parser"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("To The World!");
});


router.get('/hotels', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.send(`
{
	"hotels" : [

		{
			"name" : "Hotel Emperador",
			"stars" : "3",
			"price" : "1596",
      "pic":"http://images.almundo.com/201/1000000/10000/1000/915/915_241_b.jpg"
		},
		{
			"name" : "Petit Palace San Bernardo",
			"stars" : "4",
			"price" : "2145",
      "pic":"http://images.almundo.com/201/2000000/1470000/1466600/1466559/1466559_113_b.jpg"
		},
		{
			"name" : "Hotel Nuevo Boston",
			"stars" : "2",
			"price" : "861",
      "pic":"http://images.almundo.com/201/1000000/20000/14800/14732/adb38b85_b.jpg"
		}
	]
}
`);
});


app.use(router);

mongoose.connect('mongodb://localhost/hotels', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});

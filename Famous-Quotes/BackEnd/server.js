var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
const request = require('request');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin1@ds117164.mlab.com:17164/project');

//mongoose connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

  //quote schema
  var QuoteSchema = new mongoose.Schema({
    quote:String,
    author:String,
    cat:String
  });

  //personal-quote schema
  var PersonalQuoteSchema = new mongoose.Schema({
    author:String,
    quote:String 
  });

  var QuoteData = mongoose.model('Quotes',QuoteSchema);
  var PersonalQuoteData = mongoose.model('Personal-Quotes',PersonalQuoteSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


    //save quote from quote-api to mongoDB
  app.route('/quote-gen')

  .post((req,res)=>{     
      QuoteData.create({quote: req.body.quote, author: req.body.author, cat: req.body.cat},(err) =>{    
        if(err) return handleError(err);
        res.end();
    })
  })
  
//================================================================================================================
  // gets quotes from api (quote-gen)
  app.get('/quote-gen', (req,res)=> {  
    request('https://talaikis.com/api/quotes/random/', (err,response, body)=>{
      if(err) return handleError(err);
      res.status(200).send(body);
      res.end();
    })      
  });

  // ========================================= EXPERIMENTAL =======================================================================
// gets 100 quotes from api and displays it for user to choose and save(not saved)
  app.get('/quote100-gen',(req,res)=>{
    request('https://talaikis.com/api/quotes/', (err,response, body)=>{
      if(err) return handleError(err);
      body = JSON.parse(body);           
      res.send(body);
      res.end();
    })    
  })

//retrieve saved quotes from MongoDB
app.get('/saved-quotes',(req,res)=>{
    QuoteData.find((err,quotes)=>{
    if(err) return handleError(err);
    res.json(quotes);
    res.end();
    })
  })

  //DELETE quote
  app.delete("/saved-quotes/:id",(req,res)=>{
    QuoteData.deleteOne({_id:req.params.id},(err,data)=>{
      if (err) return handleError(err);
      res.send(data);
      res.end();
    })      
  })
//=========================My Quotes ===========================================
  //save quote from create-quote to mongoDB 
  app.route('/personal-quotes')
  .post((req,res)=>{     
    PersonalQuoteData.create({author: req.body.author, quote: req.body.quote},(err) =>{    
        if(err) return handleError(err);
        res.end();
    })
  })

  //get saved personal quotes
  .get((req,res)=>{
    PersonalQuoteData.find((err,quotes)=>{
      if(err) return handleError(err);
      res.json(quotes);
      res.end();
      })
  })

  //delete personal quote(s)
  app.delete('/personal-quotes/:id',(req,res)=>{
    PersonalQuoteData.deleteOne({_id:req.params.id},(err,data)=>{
      if (err) return handleError(err);
      res.send(data);
      res.end();
    }) 
  })

//========================== EDIT/UPDATE PERSONAL QUOTES ========================

app.get('/personal-quotes/:id', (req,res)=>{
  PersonalQuoteData.findById(req.params.id, (err,data)=>{
    if (err) return handleError(err);
    res.json(data);
    res.end();
  })
 })


 app.put('/personal-quotes/:id', (req,res)=>{
  PersonalQuoteData.findByIdAndUpdate(req.params.id, req.body, (err,data)=>{
    if (err) return handleError(err);
    res.send(data);
    res.end();
   })
 })












var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
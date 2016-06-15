var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(request, response) {
  knex('hairdoos').select().then(function(hairdoos) {
    response.render('hair', {hairdoos: hairdoos});
  });
});

// GET requests at /hair/add
router.get('/add', function(request, response) {
  response.render('add');
});

router.get('/:id/edit', function(request, response) {
  knex('hairdoos').where({id: request.params.id}).first().then(function(hairdoo) {
    response.render('edit', {hairdoo: hairdoo});
  });
});

router.post('/:id/edit', function(request, response) {
  console.log('hi');
  knex('hairdoos').where({id: request.params.id}).update(request.body).then(function() {
    response.redirect('/hair/' + request.params.id);
  });
});

router.get('/:id/delete', function(request, response){
  knex('hairdoos').where({id: request.params.id}).del().then(function() {
    response.redirect('/hair');
  });
});

router.get('/:id', function (request, response) {
  knex('hairdoos').where({id: request.params.id}).first().then(function(hairdoo) {
    response.render('details', {hairdoo: hairdoo});
  });
});

// POST request on /hair/add
router.post('/add', function(request, response){
  //grab information from body
  var name = request.body.name;
  var description = request.body.description;
  var image = request.body.image;
  var rating = request.body.rating;
  //insert into tables
  knex.table('hairdoos').insert({
    name: name,
    description: description,
    image: image,
    rating: rating
  }).then(function() {
    response.redirect('/hair');
  }).catch(function(error) {
    next(error);
  });
});



module.exports = router;

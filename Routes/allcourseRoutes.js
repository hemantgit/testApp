var express = require( 'express' );
var jwt = require('jsonwebtoken');

var routes = function( Course ) {

var allcourseRouter = express.Router();
var courseController = require( '../Controllers/courseController' )( Course );

allcourseRouter.route( '/' ).get( courseController.getAll );

  return allcourseRouter;

};

module.exports = routes;

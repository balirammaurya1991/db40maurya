var express = require('express');
var router = express.Router();

/* GET home page. */
class University{
  constructor(university_name,university_location,university_type)
  {
    this.university_name = university_name;
    this.university_location= university_location;
    this.university_type = university_type;
  }
}
var uni1 = new University("Northwest","Marryville","Public");
var uni2 = new University("UCM","Marryville","Public");
var uni3 = new University("Cleveland state university","Cleveland","Public");

router.get('/', function(req, res, next) {
  res.render('university', { title: 'Search Results university',university:[uni1,uni2,uni3] });
});

module.exports = router;

require('../css/style.css');
var $ = require('jquery');
//var people = require('./people.js').people;
import {people} from './people';
console.log(people);

$.each(people, function(index, elem){
	$('body').append('<h1>' + elem + '</h1>');
});

let myFunc = () => {
	console.log('myFunc');
};
myFunc();
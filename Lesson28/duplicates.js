const _ = require('lodash');

let users = [
{
	"id": 31351313513,
	"name": "Mike"
},
{
	"id": 11351313013,
	"name": "Nick"
},
{
	"id": 31357316513,
	"name": "Sam"
},
{
	"id": 31350313513,
	"name": "Mike"
},
{
	"id": 11351313013,
	"name": "Sam"
},
{
	"id": 11351313013,
	"name": "David"
},
{
	"id": 11351313013,
	"name": "Sam"
}
];

console.log(users);

console.log("--------------------");

users = _.uniqBy(users, "id");

console.log(users);




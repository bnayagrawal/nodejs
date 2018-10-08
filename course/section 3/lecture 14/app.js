const notes = require('./notes.js');
const yargs = require('yargs');

var arg = yargs.argv;
console.log('yargs: ', arg);

var command = process.argv[2];

if(command === 'add') {
    notes.addNotes(arg.title, arg.body);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.readNotes(arg.title);
} else if(command === 'remove') {
    notes.removeNotes(arg.title);
} else {
    console.log('thengaa, not recognised. hahaha');
}
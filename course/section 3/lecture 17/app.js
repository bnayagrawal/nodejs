const notesJS = require('./notes.js');
const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs.argv;
console.log(argv);
var command = argv._[0];
console.log(command);
if(command === 'add') {
    var note = notesJS.addNote(argv.title,argv.body);
    if(note) {
        console.log('new note was printed ', note.title + ' ' + note.body);
    } else {
        console.log('no note was printed');
    }
} else {
    console.log('command not recognised');
}
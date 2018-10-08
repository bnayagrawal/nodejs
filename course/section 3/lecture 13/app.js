var command = process.argv[2];
console.log('command: ', command);


if(command === 'add') {
    console.log('Adding new note');
} else if(command == 'list') {
    console.log('list of all notes');
} else if(command === 'read') {
    console.log('fetching notes');
} else if(command === 'remove') {
    console.log('removing all notes');
} else {
    console.log('command not recognized');
}
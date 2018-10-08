console.log('starting notes.js');

var addNotes = (title, body) => {
console.log('Adding notes: ', title, body);
}

var getAll = () => {
    console.log('Getting all list');
}

var readNotes = (title) => {
    console.log('Reading note: ', title);
}

var removeNotes = (title) => {
    console.log('Removing note: ', title);
}

module.exports =  {
    addNotes,
    getAll,
    readNotes,
    removeNotes
};
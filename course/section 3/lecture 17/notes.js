const fs = require('fs');

var fetchNotes = () => {
    try {
        var readFile = fs.readFileSync('notes-JSON.json');
        return JSON.parse(readFile);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notesArray) => {
    fs.writeFileSync('notes-JSON.json', JSON.stringify(notesArray));
}

var addNote = (title,body) => {
var notesArray = fetchNotes();
var note = {
    title,
    body
};
var duplicateNotes = notesArray.filter((note) => note.title === title);

if(duplicateNotes.length === 0) {
    notesArray.push(note);
    saveNotes(notesArray);
    return note;
}
};

module.exports = {
    addNote
};
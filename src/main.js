const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note")




function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNotesElements(id, content) {

}

function addNote() {

}

function updateNotes(id, newContent) {

}

function deleteNotes(id, element) {

}
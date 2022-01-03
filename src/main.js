const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note")


//automatic loading for the exisiting notes it the page
getNotes.forEach(note => {
    //these properties came from the JSO in the localStorage
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});


function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
    const element = document.createElement("textarea");
    //Javascript representation of a JavaScript textarea 
    element.classList.add("note");
    //add the CSS rulls are goint to be aplied to de the new element
    element.vale = content;
    element.placeholder = "Empty sticky note";
    // default text inside the thext area

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });
    //react to when the user double clicks with the intention to delete a note 
    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you wish to delete this note?");
        if (doDelete) {
            deleteNote(id, element);
        }
    });


    return element;
}

function addNote() {

}

function updateNote(id, newContent) {
    console.log("updating note...");
    console.log(id, newContent);
}

function deleteNote(id, element) {
    console.log("Deleting note note...");
    console.log(id);
}
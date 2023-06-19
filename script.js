const addBtn = document.getElementById("addBtn");
const addTitle = document.getElementById("title");
const addNoteText = document.getElementById("note");
const notesDiv = document.getElementById("notes");

let notes = [];

function addNote() {
  if (addNoteText.value == "") {
    alert("Add a note");
    return;
  }
  const newNoteObj = {
    noteTitle: addTitle.value,
    noteText: addNoteText.value,
  };
  notes.push(newNoteObj);
  displayNotes();
  // console.log(notes);
}

function displayNotes() {
  let noteCard = ``;
  for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
    noteCard += `
      <div class="noteCard">
        <button class="deleteBtn">Delete</button>
        <div class="noteTitle">${
          notes[i].noteTitle === "" ? "No Title" : notes[i].noteTitle
        }</div>
        <div class="noteText">${notes[i].noteText}</div>
      </div>
    `;
  }
  notesDiv.innerHTML = noteCard;
}

addBtn.addEventListener("click", addNote);

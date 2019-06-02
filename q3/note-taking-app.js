const notes = [];

const divNotes = document.getElementById('notes');
const textareaNote = document.getElementById('note');
const colorList = document.getElementById('colorList');
const noteId = document.getElementById('noteId');

const defaultColor = 'red';

function init() {
    renderNotes();
}

function renderTable() {
    return ``;
}
function renderNote(id, value, color) {
    return `<div class="box ${color}" id="box${id}">
                <div id="note${id}" 
                    class="box-note" 
                    onclick="load('${id}')">
                    <div>
                        <p id="p${id}">${value}</p>
                    </div>
                </div>
                <button id="btn${id}" 
                    class="box-button" 
                    onclick="remove('${id}')">Delete</button>
            </div>`;
}

function renderNotes() {
    divNotes.innerHTML = notes
        .map(note => renderNote(note.id, note.value, note.color))
        .join('');
}

function load(id) {
    const item = notes.find(note => note.id === id);

    if(item) {
        textareaNote.value = item.value;
        colorList.value = item.color;
        noteId.value = item.id;
        textareaNote.focus();
    }
}

function clearForm() {
    textareaNote.value = '';
    colorList.value = defaultColor;
    noteId.value = '';

    textareaNote.focus();
}

function save() {
    if(noteId.value) {
        update();
    } else {
        create();
        renderNotes();
    }

    clearForm();
}

function validateForm() {
    if(!textareaNote.value) {
        alert("Note is required");
        return false;
    }

    if(!colorList.value) {
        alert("Color is required");
        return false;
    }

    return true;
}

function create() {
    if(!validateForm()){
        return;
    }

    const value = textareaNote.value;
    const id = notes.length + 1 + '';
    const color = colorList.value;

    notes.push({id, value, color});   
}

function update() {
    if(!validateForm()){
        return;
    }
    
    const note = notes.find(note => note.id === noteId.value);

    if(note) {
        updateColorBox(note, colorList.value);
        updateNoteValue(note, textareaNote.value);
    }
}

function updateColorBox(note, newColor) {
    const divBox = document.getElementById(`box${note.id}`);

    divBox.classList.remove(note.color);
    divBox.classList.add(newColor);

    note.color = colorList.value;
}

function updateNoteValue(note, newValue) {
    const pNote = document.getElementById(`p${note.id}`);

    pNote.innerHTML = newValue;

    note.value = textareaNote.value;
}

function remove(id) {
    const index = notes.findIndex(note => note.id === id);
    
    if(index >= 0) {
        notes.splice(index, 1);
        
        removeElement(`box${id}`);
    }   
}

function removeElement(id) {
    const element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

init();

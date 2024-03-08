document.getElementById('addNoteBtn').addEventListener('click', function() {
  var noteInput = document.getElementById('noteInput').value;
  if (noteInput.trim() !== '') {
    var noteElement = document.createElement('div');
    noteElement.className = 'alert alert-info';
    noteElement.textContent = noteInput;
    document.getElementById('notesContainer').appendChild(noteElement);
    document.getElementById('noteInput').value = '';
  } else {
    alert('Por favor, insira uma nota válida.');
  }
});

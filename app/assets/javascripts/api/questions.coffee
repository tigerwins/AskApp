# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

const txt = document.getElementById("modal-textarea");

for (let i = 0; i < txt.length; i++) {
  txt[i].setAttribute('style', 'height:' + (txt[i].scrollHeight) + 'px;overflow-y:hidden;');
  txt[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

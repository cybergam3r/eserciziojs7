const taskinput = document.getElementById("input");
const addtask = document.getElementById("addTaskBtn");
const listascritta = document.getElementById("lista");
const lista = [];
addtask.addEventListener("click", function (en) {
  en.preventDefault();
  inslista();
  printList();
  taskinput.value = "";

});
function inslista() {
  lista.push(taskinput.value);
}

function printList() {
  listascritta.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    let nuovo = document.createElement("p");
    nuovo.innerText = lista[i];
    let btnDelete = document.createElement('button');
	btnDelete.setAttribute('type', 'button');
	btnDelete.setAttribute('onclick', `deleteItem(${i})`);
	btnDelete.innerText = '🗑️';
    nuovo.appendChild(btnDelete);
    listascritta.appendChild(nuovo);
  }

}
function deleteItem(index) {
    lista.splice(index, 1); 
    printList();              
  }
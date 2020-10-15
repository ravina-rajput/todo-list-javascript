//Project Work:
const selectForm = document.querySelector('form');
const selectList = document.getElementById('items');

//====>Add Items:
selectForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newText = document.getElementById('item').value;
  //grab input value;
  const inputValue = document.getElementById('item').value;
  //create new list item:
  const newList = document.createElement('li');
  //add class:
  newList.className = 'list-group-item';
  //add text to new list
  newList.appendChild(document.createTextNode(newText));
  selectList.appendChild(newList);
  // add button to new list item:
  const button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('Delete'));
  newList.appendChild(button);
});

//====>Remove Items:
selectList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    if (confirm('Are You Confirm?')) {
      newList = event.target.parentElement;
      selectList.removeChild(newList);
    }
  }
});

//=====> Search(Filter items):

const search = document.getElementById('filter');

search.addEventListener('keyup', function (event) {
  //convert text to lowercase
  const text = event.target.value.toLowerCase();
  //console.log(text);
  //get list items
  const listItems = selectList.getElementsByTagName('li');
  //console.log(listItems);// covert this HTML collection into Array
  Array.from(listItems).forEach(function (item) {
    const itemValue = item.firstChild.textContent;
    //console.log(itemValue);
    if (itemValue.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

//console.dir(document);
/*
console.log(document.title);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.all);
*/
// We can change the title here:
document.title = 'Ravina DOM';
const header = document.querySelector('header');
//header.textContent = "DOM Model";
//header.innerText  = 'DOM Model';
header.style.backgroundColor = '#4f9c95';
header.style.color = 'salmon';
header.style.padding = '25px';
//header.innerHTML = '<h2>DOM MODEL</h2>';

header.onmouseover = function () {
  this.style.color = 'white';
};

const myName = document.querySelector('div h2');
myName.style.marginTop = '35px';
myName.style.color = '#09ed46';
myName.style.backgroundColor = '#f77a5e';
myName.style.border = '2px solid yellow';

const mainBox = document.querySelector('.main-div-dom');
mainBox.style.border = '2px solid #f51c40';
mainBox.style.height = '700px';
mainBox.style.width = '800px';
//mainBox.style.position = 'relative';
mainBox.style.marginTop = '30px';
mainBox.style.marginLeft = 'auto';
mainBox.style.marginRight = 'auto';
mainBox.style.padding = '10px';

const submit = document.querySelector('#submit');
submit.style.color = 'white';
submit.style.borderRadius = '15px';
submit.style.padding = '5px';
submit.style.width = '90px';
submit.style.backgroundColor = 'green';

const heading3 = document.querySelector('h3');
heading3.style.padding = '10px';
heading3.style.color = 'blue';

//console.log(heading3);

// IT selects the first Input Field BY Default:
const inputField = document.querySelector('input');
//inputField.value = 'Raveena';

// We can select the input if multiple inputs are there in the code then/;
/*
const inputField = document.querySelector('input[type="submit"]');
inputField.value = 'Submit This'
*/
/*
const heading4 = document.querySelector('h4:last-child');
heading3.style.backgroundColor = 'orange';
OR 
select the second item in list if they had the same class:
const heading4 = document.querySelector('h4:nth-child(2)');
*/

//==> If we want to select the alternate items in the list :
/*
const heading4 = document.querySelector('h4:nth-child(even)'); or we can give odd also.

for (var i = 0; i < heading4.lenght; i++) {
    heading4[i].style.color = 'red';
}
*/

mainBox.addEventListener('mousemove', function (event) {
  console.log(event.type);
  mouseText.innerHTML =
    '<h2>MouseX: ' +
    event.offsetX +
    '</h2><h2>MouseY: ' +
    event.offsetY +
    '</h2>';
  document.body.style.backgroundColor =
    'rgb(' + event.offsetX + ', ' + event.offsetY + ',60)';
});

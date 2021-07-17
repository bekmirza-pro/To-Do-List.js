

form.addEventListener('submit', function(evt){
evt.preventDefault();

 var newLi = document.createElement('li');
 var newBtn = document.createElement('button');

newLi.setAttribute('class', 'list-item m-2');
newBtn.setAttribute('class', 'btn-primary m-3');
newLi.textContent = input.value.trim();
newBtn.textContent = 'Button';


newLi.appendChild(newBtn);
 list.appendChild(newLi);
 input.value = null;

});

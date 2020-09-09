let tarea = document.querySelector('textarea');
let findipt = document.querySelector('#findtxt');
let reipt = document.querySelector('#reptxt');
let btn = document.querySelector('button');
let elem = document.querySelector('p');
btn.addEventListener('click', () => {
  let findtxt = findipt.value;
  console.log(findtxt);
  let reptxt = reipt.value;
  console.log(reptxt);
  let tagtxt = tarea.value;
  console.log(tagtxt);
  findtxt = new RegExp(findtxt, 'g');
  console.log(findtxt);
  tagtxt = tagtxt.replace(findtxt, reptxt);
  elem.innerText = tagtxt;
});
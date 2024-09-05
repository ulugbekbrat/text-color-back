let text = prompt('text kiriting');
let ttt = prompt('orqa fon rangi?');

let Color = prompt('textingiz rangi ');

let h1 = document.createElement('h1');
h1.innerText = text; 


document.body.appendChild(h1); 


h1.style.fontSize = '45px';
h1.style.color = Color;
document.body.style.backgroundColor = ttt;


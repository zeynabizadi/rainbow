let btn = document.getElementById('button');
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet' ,'#f2ccff'];
function change() {
	document.body.style.background = rainbow[Math.floor(8 * Math.random())];
}
btn.addEventListener('click', change);

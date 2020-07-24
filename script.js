var input = document.querySelector('input')
var button = document.querySelector('button')

var qrcode = new QRCode(document.querySelector('#qrcode'), {
    text: "Hola mundo",
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

button.addEventListener('click', ()=>{
	let inputValue = input.value;
	qrcode.makeCode(inputValue);
})
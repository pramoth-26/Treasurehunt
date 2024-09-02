// https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
const DATA_URL = "https://www.fesliyanstudios.com/play-mp3/387";  

const beep = () => {
  AUDIO.src = DATA_URL;
}

let currentText = '';

// https://blog.minhazav.dev/research/html5-qrcode
// https://github.com/mebjas/html5-qrcode
const onScanSuccess = (decodedText, decodedResult) => {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  document.querySelector('#result').innerText = decodedText;
  if (currentText !== decodedText) {
    currentText = decodedText;
    beep(); 
  }
}

const html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 200 });
html5QrcodeScanner.render(onScanSuccess);

// for iOS audio
// https://stackoverflow.com/questions/31776548/why-cant-javascript-play-audio-files-on-iphone-safari
const AUDIO = new Audio();
AUDIO.autoplay = true;
document.querySelector("#sound").addEventListener("click", () => {
  beep();

  
});

function verifybtn(){
  if(currentText==="hello"){
    window.location.href = 'bundles/nextpage.html';
}
else if(currentText==="welcome"){
  window.location.href = 'bundles/nextpage1.html';
}
else {
    alert('Invalid QR. Please try Your Lot QR.');
}
}
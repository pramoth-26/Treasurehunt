
var DAta=''
document.addEventListener('DOMContentLoaded',(event)=> {
  const data = localStorage.getItem('sharedData');
  DAta=document.getElementById('displayData').innerText = data;
 
});
function main(){
   const data = document.getElementById('dataInput').value;
  localStorage.setItem('sharedData', data);
  window.location.href = 'rules.html'; // Redirect to Page 2
}

var n =document.getElementById('displayData').innerText;
function next(){
  window.location.href = 'scan.html'; 
}


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
  console.log(DAta)

  if(currentText==="java" && DAta==="instagram"){
    window.location.href = 'bundles/quiz1.html';
    }
  else if(currentText==="python" && DAta==="instagram"){
    window.location.href = 'bundles/quiz2.html';
  }
  else if(currentText==="vb" && DAta==="facebook"){
    window.location.href = 'bundles/quiz3.html';
  }
  else if(currentText==="ruby" && DAta==="facebook"){
    window.location.href = 'bundles/quiz4.html';
  }
  else {
    alert('Invalid QR. Please Scan Your Lot QR.');
  }



}



const speak = document.querySelector(".speakBtn");

const textarea = document.querySelector(".textarea");

speak.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(textarea.value);

    speechSynthesis.speak(utterance);
});
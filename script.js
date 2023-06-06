const speak = document.querySelector(".speak-btn");

const textarea = document.querySelector(".textarea");

speak.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(textarea.value);

    speechSynthesis.speak(utterance);
});
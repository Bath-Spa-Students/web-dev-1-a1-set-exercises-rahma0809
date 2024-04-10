document.addEventListener('DOMContentLoaded', function(){

    //Select all elements with the class sample
    const samples= document.querySelectorAll('.Sample');

    //add click event listener to each sample
    samples.forEach(Sample => {
        Sample.addEventListener('click', function(){

            //retrieve the audio-path attribute value
            const audioPath=this.getAttribute('audio-path');

            //call the playAudio function with the audio path
            playAudio(audioPath);
    });
});

//function to play the audio
function playAudio(audioPath){
    //create a new audio object with the provided audio path
    const audio = new Audio(audioPath);

    //play the audio
    audio.play();
    }
});

    const textToSpeechInput= document.getElementById("text-to-speech");
    const speakButton=document.getElementById("speak-button");
function textToAudio(){
    let message= document.querySelector(".text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.pitch= 1;
    speech.text= message;
    window.speechSynthesis.speak(speech);
}

speakButton.addEventListener("click",function(){
    textToSpeechInput.classList.add("animate-input");
    speakButton.classList.add("animate-button");
    setTimeout(textToAudio,500);
    setTimeout(function(){
        textToSpeechInput.classList.remove("animate-input");
        speakButton.classList.remove("animate-button");},1500);
    });


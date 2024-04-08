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
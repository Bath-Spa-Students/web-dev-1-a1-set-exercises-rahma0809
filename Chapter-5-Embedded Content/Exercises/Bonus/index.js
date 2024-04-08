document.addEventListener('DOMContentLoaded', function(){
    const samples= document.querySelectorAll('.Sample');

    samples.forEach(Sample => {
        Sample.addEventListener('click', function(){
            const audioPath=this.getAttribute('audio-path');
            playAudio(audioPath);
    });
});

function playAudio(audioPath){
    const audio = new Audio(audioPath);
    audio.play();
    }
});
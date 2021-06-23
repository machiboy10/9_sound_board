const sounds = ['butter', 'dna', 'dynamite', 'idol', 'micdrop', 'boywithluv']

sounds.forEach( sound => {
    const btn = document.createElement('button')
    const duration = document.getElementById('duration')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', ()=> {
         stopSongs()
        const player = document.getElementById(sound)
        player.currentTime = 10;
        player.play();

        let sec = Math.floor(((player.duration / 60) - Math.trunc(player.duration / 60)) * 60)
        duration.innerHTML = `${Math.trunc(player.duration / 60)} mins and ${sec} sec`  ;
    })

    document.getElementById('buttons')
    .appendChild(btn)
})

function stopSongs () {
    sounds.forEach(sound => { 
        const song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0;

    })
}






const animals = document.querySelectorAll('.animal');

animals.forEach(animal => {
	animal.addEventListener('click', function(e) {
		const key = this.dataset["key"];
		playAudio(key);
	});
	
	animal.addEventListener('transitionend', function(e) {
		if(e.propertyName !== 'transform') {
			return;
		} else {
			this.classList.remove('animal--playing');
		}
	})
});


window.addEventListener('keypress', (e) => {
	playAudio(e.key);
});

const playAudio = (key) => {
	const audio = document.querySelector(`audio[data-key="${key}"]`);
	const animal = document.querySelector(`.animal[data-key=${key}]`);
	if(!audio) {
		return;
	} else {
		audio.currentTime = 0; //so we can rewind every time we click
		audio.src = audio.currentSrc; //because there's multiple sources for the audio, and the audio is playing from the src property
		audio.play();
		animal.classList.add('animal--playing');
	}
}
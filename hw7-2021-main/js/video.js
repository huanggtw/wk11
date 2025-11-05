var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// window.addEventListener("load", function() {
// 	const volumeSpan = document.querySelector("#volume");
// 	const slider = document.querySelector("#slider");
// 	const muteButton = document.querySelector("#mute");
// 	// video.volume is 0.0 - 1.0; convert to percentage
// 	const volPercent = Math.round((video.volume || 1) * 100);
// 	if (volumeSpan) volumeSpan.textContent = volPercent + "%";
// 	if (slider) slider.value = volPercent;
// 	if (muteButton) muteButton.textContent = video.muted ? "Unmute" : "Mute";
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In slower");
	console.log("Current speed " + video.playbackRate);
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In faster");
	console.log("Current speed " + video.playbackRate)
	video.playbackRate *= 1.1;
	console.log("New speed is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("In skip")
	console.log("The duration is " + video.duration)
	console.log("The current location is " + video.currentTime)
	if (video.currentTime + 5 >= video.duration){
		video.currentTime = 0;
		console.log("The new location is " + video.currentTime)
	} else {
		video.currentTime += 5;
		console.log("The new location is " + video.currentTime)
	}
	console.log("Current time is " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Toggle mute")
	video.muted = !video.muted;
	let muteButton = document.querySelector("#mute");
	let volumeSpan = document.querySelector("#volume");
	if (video.muted) {
		muteButton.textContent = "Unmute";
		volumeSpan.textContent = "0%"
		console.log("Mute audio")
	} else {
		muteButton.textContent = "Mute";
		volumeSpan.textContent = "100%"
		console.log("Unmute audio")
	}
})

document.querySelector("#slider").addEventListener("input", function(){
	console.log("Volume Slider");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100 + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School style")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original style")
	video.classList.remove("oldSchool")
})


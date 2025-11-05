var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In slower");
	console.log("Current speed " + video.playbackRate);
	video.playbackRate -= 0.5;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In faster");
	console.log("Current speed " + video.playbackRate)
	video.playbackRate += 0.5;
	console.log("New speed is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("In skip")
	console.log("The duration is " + video.duration)
	console.log("The current location is " + video.currentTime)
	video.currentTime += 5
	console.log("The new location is " + video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Toggle mute")
	video.muted = !video.muted;
	const muteButton = document.querySelector("#mute");
	if (video.muted) {
		muteButton.textContent = "Unmute";
	} else {
		muteButton.textContent = "Mute";
	}
})


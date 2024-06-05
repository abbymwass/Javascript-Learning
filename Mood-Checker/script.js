function checkmood() {
	const mood=document.getElementById("mood-select").value;
	const messageElement=document.getElementById("message");


	if(mood==="happy"){
		messageElement.textContent="yay!keep smiling😇";
	}else if (mood==="sad"){
		messageElement.textContent="aww,its okay to feel sad sometimes.Here is ahug🤗";

	}else if(mood==="excited"){
		messageElement.textContent="woohoo!enjoy your excitement🤭"
	}else if(mood==="tired"){
		messageElement.textContent="time to rest!sweet dreams🥱"
	}else{
		messageElement.textContent=""
	}
}
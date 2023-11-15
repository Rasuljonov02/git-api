const qidir: HTMLInputElement = document.querySelector(".qidir")!;
const https = "https://api.github.com/users/";
const qidiruvvalue = qidir.value;
function getUser(username: string) {
	fetch(`${https}${username}`)
		.then((res) => res.json())
		.then((user) => {
			barchamalumot(user.name, user.avatar_url, user.login, user.bio, user.location,user.name);
		});
}

function barchamalumot(params: string, img: string, niki: string, bio: string, lacat: string ,name:string) {
	const odmnirasm: HTMLImageElement = document.querySelector(".odmnirasm")!;
	const nikElements: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".nik");
	const nikid: HTMLParagraphElement = document.querySelector(".nikid")!;
	const ozihaqidaMalumot: HTMLParagraphElement = document.querySelector(".bio")!;
	const turarjoyLacation: HTMLParagraphElement = document.querySelector(".location")!;
	turarjoyLacation.innerText = `${lacat ? lacat : "Uzbekistan"}`;
	turarjoyLacation;
	nikid.innerText = `@${niki ? niki : "Rasuljonov02"}`;
	console.log(params);
	ozihaqidaMalumot.innerText = bio ? bio : `Bio yoq`;

	odmnirasm.src = `${
		img
			? img
			: `https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU`
	}`;

	nikElements.forEach((nik) => {
		nik.innerText = params ? params : "Rasuljonov Muhammad";
	});
}

getUser(qidiruvvalue);

function handleKeyDown(event: KeyboardEvent) {
	if (event.key === "Enter") {
		const qidiruvvalue = qidir.value;
		getUser(qidiruvvalue);
	}
}
qidir.addEventListener("keydown", handleKeyDown);

/**
 *Fetch and XHR(XMLHttpRequest) and AJAX(Async JavaScript And XML)
 *
 */

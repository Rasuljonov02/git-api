const Followers: HTMLParagraphElement = document.querySelector(".Followers")!;
const Following: HTMLParagraphElement = document.querySelector(".Following")!;
const Repositories: HTMLParagraphElement = document.querySelector(".Repositories")!;
const qidir: HTMLInputElement = document.querySelector(".qidir")!;
const qidiruvvalue = qidir.value ? qidir.value : "Rasuljonov02";

const https = "https://api.github.com/users/";

function getUser(username: string) {
	fetch(`${https}${username}`)
		.then((res) => res.json())
		.then((user) => {
			barchamalumot(
				user.name,
				user.avatar_url,
				user.login,
				user.bio,
				user.location,
				user.followers,
				user.following,
				user.public_repos
			);
		});
}

function barchamalumot(
	params: string,
	img: string,
	niki: string,
	bio: string,
	lacat: string,
	followers: number,
	following: number,
	repositories: number
) {
	const odmnirasm: HTMLImageElement = document.querySelector(".odmnirasm")!;
	const nikElements: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".nik");
	const nikid: HTMLParagraphElement = document.querySelector(".nikid")!;
	const ozihaqidaMalumot: HTMLParagraphElement = document.querySelector(".bio")!;
	const turarjoyLacation: HTMLParagraphElement = document.querySelector(".location")!;
	turarjoyLacation.innerText = `${lacat ? lacat : "location null"}`;
	turarjoyLacation;
	nikid.innerText = `@${niki ? niki : "nik null"}`;
	console.log(params);
	ozihaqidaMalumot.innerText = bio ? bio : `bio null`;

	odmnirasm.src = `${
		img
			? img
			: `https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU`
	}`;

	Followers.innerText = `${followers ? `${followers} Followers` : "0 Followers"}`;
	Following.innerText = `${following ? `${following} Following` : "0 Following"}`;
	Repositories.innerText = `${repositories ? `${repositories} Repositories` : "0 Repositories"}`;

	nikElements.forEach((nik) => {
		nik.innerText = params ? params : "null";
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

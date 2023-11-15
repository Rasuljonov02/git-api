const qidir: HTMLInputElement = document.querySelector(".qidir")!;
const https = "https://api.github.com/users/";
const qidiruvvalue = qidir.value;
function getUser(username: string) {
	fetch(`${https}${username}`)
		.then((res) => res.json())
		.then((user) => {
			barchamalumot(user.name, user.avatar_url);
		});
}

function barchamalumot(params: string, img: string) {
	const odmnirasm: HTMLImageElement = document.querySelector(".odmnirasm")!;
	console.log(img);

	const nik: HTMLParagraphElement = document.querySelector(".nik")!;
	console.log(params);
	odmnirasm.src = `${img}`;
	nik.innerText = `${params}`;
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

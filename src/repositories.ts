const repazitor: HTMLDivElement = document.querySelector(".repazitoria")!;
const qidir: HTMLInputElement = document.querySelector(".qidir")!;

const qidiruvvalue = qidir.value ? qidir.value : "Rasuljonov02";

const https = `https://api.github.com/users/${qidir}/repos`;

function getrepos(username: string) {
	fetch(`${https}${username}`)
		.then((res) => res.json())
		.then((repos) => {
			repositories(repos.id);
		});
}

function repositories(repos: string[]) {
	repos.forEach((repo) => {
		console.log(repo);
	});
}

getrepos(qidiruvvalue);

import "./main.css";
import "./api";

const repazitor: HTMLDivElement = document.querySelector(".chiz")!;
const qidir: HTMLInputElement = document.querySelector(".qidir")!;

const qidiruvvalue = qidir.value ? qidir.value : "Rasuljonov02";

const https = "https://api.github.com/users/";

function getrepos(username: string) {
	fetch(`${https}${username} /repos?per_page=100`)
		.then((res) => res.json())
		.then((repos) => {
			repositories(repos);
		})
		.catch((error) => {
			console.error("Error fetching repositories:", error);
		});
}

function repositories(repos: any[]) {
	if (repos && repos.length > -1) {
		repos.forEach((repo) => {
			repochizish(repo.name, repo.html_url);
		});
	} else {
		console.log("No repositories found.");
	}
}

function repochizish(name: string, link: string) {
	const a: HTMLAnchorElement = document.createElement("a");

	a.innerText = `${name}`;
	a.className = "repos";
	a.href = `${link}`;

	repazitor.appendChild(a);
}

function handleKeyDown(event: KeyboardEvent) {
	if (event.key === "Enter") {
		repazitor.innerHTML = "";
		const qidiruvvalue = qidir.value;
		getrepos(qidiruvvalue);
	}
}
qidir.addEventListener("keydown", handleKeyDown);

getrepos(qidiruvvalue);

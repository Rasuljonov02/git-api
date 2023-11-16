import './main.css';
import './api';
// import './repositories';

const repazitor: HTMLDivElement = document.querySelector(".repazitoria")!;
const qidir: HTMLInputElement = document.querySelector(".qidir")!;

const qidiruvvalue = qidir.value ? qidir.value : "Rasuljonov02";

const https = `https://api.github.com/users/${qidiruvvalue}/repos`;

function getrepos(username: string) {
    fetch(https)
        .then((res) => res.json())
        .then((repos) => {
            repositories(repos);
        })
        .catch((error) => {
            console.error('Error fetching repositories:', error);
        });
}
// bunda repositorialar kelayabdi
function repositories(repos: any[]) {
    if (repos && repos.length > 0) {
        repos.forEach((repo) => {
            console.log(repo);
        });
    } else {
        console.log('ooooooo kelamdiiii');
    }

}



















getrepos(qidiruvvalue);

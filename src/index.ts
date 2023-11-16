import './main.css';
import './api';
// import './repositories';

const repazitor: HTMLDivElement = document.querySelector('.chiz')!;
const qidir: HTMLInputElement = document.querySelector('.qidir')!;

const qidiruvvalue = qidir.value ? qidir.value : 'Rasuljonov02';

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

// Display repositories
function repositories(repos: any[]) {
    if (repos && repos.length > 0) {
        repos.forEach((repo) => {
            repochizish(repo.name);
        });
    } else {
        console.log('No repositories found.');
    }
}


function repochizish(name: string) {
    const p: HTMLParagraphElement = document.createElement('p');

    p.innerText = `${name}`;
    p.className = 'repos';

    repazitor.appendChild(p);
}

getrepos(qidiruvvalue);

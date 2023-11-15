
function getUser(username: string) {
	fetch(`https://api.github.com/users/${username}`)
		.then((res) => res.json())
		.then((user) => {
			console.log('user = ', user);
		});
}

function getRepos(username: string) {
	fetch(`https://api.github.com/users/${username}/repos`)
		.then((res) => res.json())
		.then((repos) => {
			console.log('repos = ', repos);
		});
}

getUser('arslonbekXX');
getRepos('arslonbekXX');

// Fetch and XHR(XMLHttpRequest) and AJAX(Async JavaScript And XML)

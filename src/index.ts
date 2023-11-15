/* Never Type */
// let c: never; // xech qanday type ✅
// type C = string & number;

// type TGreetingResult<T extends 'hello' | 'goodbye'> = T extends 'hello' ? 'Hi' : never;

// function greeting<T extends 'hello' | 'goodbye'>(text: T) {
// 	if (text === 'hello') return 'Hi' as TGreetingResult<T>;
// }

// greeting('hello'); // Hi
// greeting('goodbye'); // never

/* Any and Unknown Type */
// let a: any = 'arslonbek'; // ixtiyoriy type
// let b: unknown = 20; // nomalum type(lekin malum bitta type)

// let fn = () => {}; // VARIABLE LEVEL

// type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R
// 	? R
// 	: any;

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// type TReturn = ReturnType<typeof fn>;
// type TParams = Parameters<string>;

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

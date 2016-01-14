import axios from 'axois';

function getRepos(username) {
	return axios.get(`http://api.github.com/users/${username}/repos')`;
}


function getUserInfo(username) {
	return axios.get(`http://api.github.com/users/${username}`);
}
// let const
const helpers = {
	getGithubInfo(username) {
		return axios.all([getRepos(username), getUserInfo(username)])
			.then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
	}
};

export default helpers;
var axios = require('axios');

exports.getRepos = function(username) {
	return axios.get('http://api.github.com/users/' + username + '/repos');
}

exports.getUserInfo = function(username) {
	return axios.get('http://api.github.com/users/' + username);
};

exports.getGithubInfo = function(username){
		return axios.all([this.getRepos(username), this.getUserInfo(username)])

};

//axios.get('https://api.github.com/users/jprempeh').then(function(data) {
//	console.log('DATA', data)
//}, 4000);
var chai = require('chai');
var expect  = require('chai').expect;
var axios = require('axios');
var helpers = require('../app/utils/helpers');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

it('should get Repos from github api', function (done) {
	axios.get('https//api.github.com/users/jprempeh').then(function(data) {
		expect(data).to.eventually.equal('fuck');
	});

});
var React = require('React');

var UserProfiles = React.createClass({
	render: function() {
		return (
			<div> Username {this.props.username}
			<p>{this.props.bio.name}</p></div>
		)
	}
});

module.exports = UserProfiles;
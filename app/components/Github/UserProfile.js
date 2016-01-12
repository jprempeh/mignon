var React = require('React');

var UserProfiles = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			<div> Username {this.props.username}
			<p>{this.props.bio.name}</p></div>
		)
	}
});

module.exports = UserProfiles;
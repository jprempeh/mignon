var React = require('React');

var UserProfiles = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	render: function() {
		console.log('Bio', this.props.bio)
		return (
			<div> Username</div>
		)
	}
});

module.exports = UserProfiles;
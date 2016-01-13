var React = require('React');

var Repos = React.createClass({
	// Prop Types is validation for important information
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},
	render: function() {
		console.log('repos', this.props.repos);
		return (
			<div>
				<p> Repos </p>
				REPOS
			</div>
		)
	}
});

module.exports = Repos;
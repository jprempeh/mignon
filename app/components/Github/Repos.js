var React = require('React');

var Repos = React.createClass({
	// Prop Types is validation for important information
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},
	render: function() {
		return (
			<div>
				<p> Repos </p>
				REPOS: {this.props.repos}
			</div>
		)
	}
});

module.exports = Repos;
var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-md-4">
					Client Component
				</div>
				<div className="col-md-4">
					Repos Component
				</div>
				<div className="col-md-4">
					Notes component
				</div>
			</div>
		)
	}
});

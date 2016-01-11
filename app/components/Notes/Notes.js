/**
 * Created by Joe on 1/11/16.
 */
var React = require('React');

var Notes = React.createClass({
	render: function() {
		return (
			<div> <p> Notes</p>
				Notes: {this.props.notes}</div>
		)
	}
});

module.exports = Notes;
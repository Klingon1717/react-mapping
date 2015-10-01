var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.description.get('description')}</td>
			</tr>
		);

	}
})

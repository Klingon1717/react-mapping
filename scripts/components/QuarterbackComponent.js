var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.quarterback.get('name')}-</td>
				<td>-{this.props.quarterback.get('team')}</td>
				<td>{this.props.quarterback.get('attempts')}-</td>
				<td>{this.props.quarterback.get('completions')}-</td>
				<td>{this.props.quarterback.get('yards')}-</td>
				<td>-{this.props.quarterback.get('touchdown')}</td>
				<td>-{this.props.quarterback.get('interception')}</td>
				<td>-{this.props.quarterback.get('sacks')}</td>
			</tr>
		);
	}
})

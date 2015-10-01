var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {

		var todoList = this.props.todos.map(function(description) {
		
		return (

			<TodoComponent description={description} />
			)
		});

			

		
		return (

			<div className="row">
				<h1>Todos</h1>
				<table className="table">
					<thead>
						<tr>
							<th>description</th>
							
						</tr>
					</thead>
					<tbody>
					{todoList}
					</tbody>
				</table>
			</div>
		);
	}
});
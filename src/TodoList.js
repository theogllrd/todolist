import React from 'react';

class TodoList extends React.Component {
	render() {
		return(
			<div className="todoListMain">
				<div className="header">
					<form>
						<input placeholder="enter task">
							
						</input>
						<button type="submit">Add</button>
					</form>	
				</div>
			</div>
			);
	}
}

export default TodoList;
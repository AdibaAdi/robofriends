import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}

// 	componentDidMount(){
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response=> {
// 			return response.json();
// 	})
//     .then(users => {
// 	this.setState({robots : users});
// });
// }


onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value });
}

render() {
	const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
});

if(this.state.robots.length===0){
	return <h1>Loading...</h1>
}
else{

return (
	<div className='tc'>
	<h1 className='f1'>RoboFriends: my besties as robots</h1>
	<SearchBox searchChange={this.onSearchChange} />
	<Scroll>
	<ErrorBoundary>
	<CardList robots={filteredRobots} />
	</ErrorBoundary>
	</Scroll>

	</div>
	);
}
}
}

export default App;

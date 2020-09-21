import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Errorboundary from '../components/Errorboundary';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: "",
		}
	}

	onSearchChange = (event)=>{
		this.setState({searchField : event.target.value}); 
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}

	render(){
		const filterRobot = this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		if(this.state.robots.length === 0){
			return <h1>Loading...</h1>
		}
		else{
			return(
				<div className="tc">
					<h1>Robofriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<Errorboundary>
							<CardList robots = {filterRobot}/>
						</Errorboundary>
					</Scroll>
				</div>	
			);
		}	
	}
}

export default App;
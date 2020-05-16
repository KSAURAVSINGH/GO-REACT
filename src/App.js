import React from 'react';
import CardList from './CardList';
import {robots} from './college';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import 'tachyons';
import './App.css';

class App extends React.Component
{
	constructor(){
		super()
		this.state={
			robot:robots,
			searchfield:''
		}

	}
	
	onSearchChange=(event)=>
	{
       this.setState({
       	searchfield:event.target.value
       })
	}
		
	render(){
		const { robot, searchfield } = this.state;
		const filteredRobots=robots.filter(robots=>
		{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
	return(
        <div className='tc'>
        <h1 >Best Engineering Colleges</h1>
          <SearchBox  searchChange={this.onSearchChange} />
          <Scroll>
         <CardList robots={filteredRobots} />
          </Scroll>
        </div>
        
		);
} 
}
export default App;
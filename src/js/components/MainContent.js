import React, {Component} from 'react';
import News from './News'
import Settings from './Settings'

class MainContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className='mainContent'>
			<News/>
			<Settings/>
			</section>
		);
	}
}

export default MainContent;
import React, {Component} from 'react';

class News extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className='news'>
				<div className='news-header'>
					Посты по выбранным пользователям:
				</div>
				<div className='news-posts'>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
					<div className='post'>
					</div>
				</div>
			</section>
		);
	}
}

export default News;
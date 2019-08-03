import React, { Component } from 'react';
import SocialBlock from 'components/socialblock';
import Wave from 'components/wave';

import styles from './style.scss';

class HomePage extends Component {
	state = {
		videos: []
	};

	componentDidMount() {}

	render() {
		return (
			<div className="wrapper">
				<div className="hero">
					<div className="hero__topblock">
						<h1 className="hero__bigtext">1999999999</h1>
						<p className="hero__text">
							litres of water has been pledged to be reused
							until31st August 2020
						</p>
					</div>
					<h1 className="hero__heading">Take the RO challenge</h1>
					<p className="hero__text">Here comes some dummy text</p>
				</div>
				<SocialBlock />
				<Wave />
			</div>
		);
	}
}
export default HomePage;

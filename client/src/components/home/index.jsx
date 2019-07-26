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
			<div>
				This is home
				<SocialBlock />
				<Wave />
			</div>
		);
	}
}
export default HomePage;

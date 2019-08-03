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
				<div className="hero">
					<h1 className="heading">You can potentially re-use upto</h1>
					<span className="hero__text">1,29,999 litres</span>
					<p className="text">
						of RO waste by 31st August 2020, <br /> which is
						equivalent to
					</p>
					<div className="grid">
						<div className="grid__item fact">
							<span className="lnr lnr-leaf fact__icon" />
							<span className="fact__label">1000</span>
							<p className="fact__text">This is some text</p>
						</div>
						<div className="grid__item">
							<span className="lnr lnr-drop fact__icon" />
							<span className="fact__label">1000</span>
							<p className="fact__text">This is some text</p>
						</div>
						<div className="grid__item">
							<span className="lnr lnr-car fact__icon" />
							<span className="fact__label">1000</span>
							<p className="fact__text">This is some text</p>
						</div>
						<div className="grid__item">
							<span className="lnr lnr-layers fact__icon" />
							<span className="fact__label">1000</span>
							<p className="fact__text">This is some text</p>
						</div>
					</div>
				</div>
				<SocialBlock />
				<Wave />
			</div>
		);
	}
}
export default HomePage;

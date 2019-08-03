import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

function footer() {
	return (
		<footer>
			<div className="footer__container">
				<ul className="footer__menu">
					<li className="footer__menuitem">
						<Link to="/">Why the challenge</Link>
					</li>
					<li className="footer__menuitem">
						<Link to="/">Social feed</Link>
					</li>
					<li className="footer__menuitem">
						<Link to="/">Partners</Link>
					</li>
				</ul>
				<ul className="footer__menu">
					<li className="footer__menuitem">
						<Link to="/">Privacy policy</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
export default footer;

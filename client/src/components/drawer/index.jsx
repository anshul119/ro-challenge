import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

class Drawer extends Component {
	render() {
		const { isOpen, onClose } = this.props;
		return (
			<div className={`drawer ${isOpen ? 'drawer--isopen' : ''}`}>
				<span
					className="drawer__closeicon icon lnr lnr-cross"
					onClick={onClose}
				/>
				<div className="drawer__content">
					<ul className="menu">
						<li className="menu__item">
							<Link to="/">Home</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Drawer;

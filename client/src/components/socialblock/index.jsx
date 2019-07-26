import React from 'react';

import style from './style.scss';

const icons = [
	require('assets/icons/ig.svg'),
	require('assets/icons/tw.svg'),
	require('assets/icons/fb.svg'),
	require('assets/icons/wh.svg')
];

function SocialBlock() {
	return (
		<ul className="socialmenu">
			{icons.map(icon => {
				return (
					<li className="socialmenu__item">
						<a href="#">
							<img src={icon} className="socialmenu__icon" />
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default SocialBlock;

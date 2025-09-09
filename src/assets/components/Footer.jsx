
import React from 'react';

export default function Footer() {
	const style = {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Itim',
		background: 'linear-gradient(90deg, #7a0ad6 0%, #00b894 100%)',
		color: '#fff',
		padding: '18px 0 10px 0',
		position: 'fixed',
		left: 0,
		bottom: 0,
		zIndex: 100,
	};
	const textStyle = {
		fontSize: '18px',
		fontWeight: 'bold',
		letterSpacing: '1px',
		marginBottom: '2px',
		textShadow: '0 1px 4px #0002',
	};
	const copyrightStyle = {
		fontSize: '14px',
		letterSpacing: '0.5px',
		marginTop: '2px',
		color: '#ffeaa7',
		textShadow: '0 1px 2px #0001',
	};
	return (
		<footer style={style}>
			<div style={textStyle}>Create By Worameth 😋</div>
			<div style={copyrightStyle}>
				&copy; © 2025 Southeast Asia University
			</div>
		</footer>
	);
}

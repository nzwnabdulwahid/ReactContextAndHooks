import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends Component {
	// static contextType = ThemeContext;

	// render() {
	// 	const { isLightTheme, light, dark } = this.context;
	// 	const theme = isLightTheme ? light : dark;
	// 	return (
	// 		<nav style={{background: theme.ui, color:theme.syntax}}>
	// 			<h1>Context App</h1>
	// 			<ul>
	// 				<li>Home</li>
	// 				<li>About</li>
	// 				<li>Contact</li>
	// 			</ul>
	// 		</nav>
	// 	)
	// }

	render() {
		return (
			<AuthContext.Consumer>{(authContext) => (
				<ThemeContext.Consumer>{(themeContext) => {
					const { isLightTheme, light, dark } = themeContext;
					const { isAuthenticated, toggleAuth } = authContext;
					const theme = isLightTheme ? light : dark;

					return (
						<nav style={{background: theme.ui, color:theme.syntax}}>
							<h1>Context App</h1>
							<div>
								<button onClick={toggleAuth}>{isAuthenticated ? "Logout" : "Login"}</button>
							</div>
							<ul>
								<li>Home</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</nav>
					)
				}}
				</ThemeContext.Consumer>
			)}
			</AuthContext.Consumer>
		)		
	}	

}

export default Navbar;

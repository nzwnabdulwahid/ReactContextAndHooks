
# Context & Hooks Basic Tutorial

## Explaination - Context
**Context** is a way of handling state globally. 

 1. **Provider** - Where is state reside.
 2. **Consumer** - A parent that would allow its children to have access to the states.

## Example
During this README is written, this is 2 way of *consuming* the states.

 1. **contextType**
 ``` 
	 //NavBar.js
	 
	static contextType = ThemeContext;
	render() {
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		return (
			<nav style={{background: theme.ui, color:theme.syntax}}>
				<h1>Context App</h1>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		)
	}
```

2. **Context.Consumer**
```
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
```

3.  **useContext**
```
const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
```
## TODO
 - [x] useState
 - [x] useEffect

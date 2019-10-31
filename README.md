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
			<ThemeContext.Consumer>{(context) => {
				const { isLightTheme, light, dark } = context;
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
			}}
				
			</ThemeContext.Consumer>
		)		
	}	
```
## TODO
 - [ ] Creating Multiple Context
 - [ ] Consuming Multiple Context
 - [ ] Hooks

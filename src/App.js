import React from 'react';

import Navbar from './components/NavBar'
import Booklist from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
		<ThemeContextProvider>
			<AuthContextProvider>
				<Navbar />
				<Booklist/>
				<ThemeToggle />
			</AuthContextProvider>
		</ThemeContextProvider>
    </div>
  );
}

export default App;

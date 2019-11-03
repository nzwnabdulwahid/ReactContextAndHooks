import React, { useState } from 'react';

import Navbar from './components/NavBar'
import Booklist from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'
import ThemeToggle from './components/ThemeToggle';

import SongList from './components/SongList'


const App = () => {
  const [mode, setMode] = useState("context"); 
  
  const renderMode = () => {
	if (mode == "context") 
		return (
			<ThemeContextProvider>
				<AuthContextProvider>
					<BookContextProvider>
						<Navbar />
						<Booklist/>
						<ThemeToggle />
					</BookContextProvider>
				</AuthContextProvider>
			</ThemeContextProvider>
		)

	return <SongList />
  }

  const toggleMode = () => {
  	setMode(mode == "context" ? "hooks" : "context");
  }

  return (
    <div className="App">
		<button style={{marginBottom:40}} onClick={toggleMode}>Current Mode: {mode}</button>
		{renderMode()}
    </div>
  );
}

export default App;

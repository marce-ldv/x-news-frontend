import React from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import ArticlesContainer from './components/ArticlesContainer'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Drawer />
      </header>

      <div>
        <Drawer />
        <ArticlesContainer />
      </div>
    </div>
  );
}

export default App;

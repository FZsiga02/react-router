import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return <div>
      <header>
        Ide jön a navigáció
      </header>
      <main>
        <Routes>
          <Route path='/'element={<p>A főoldal tartalma</p>}/>
          <Route path='/about'element={<p>Elérhetőség, rólunk stb.</p>}/>
        </Routes>
      </main>
    </div>
  }

}

export default App;

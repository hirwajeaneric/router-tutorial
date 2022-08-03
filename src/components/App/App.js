import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link href='/manatee'>Manatee</Link></li>
            <li><Link href='/narwal'>Narwhal</Link></li>
            <li><Link href='/whale'>Whale</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
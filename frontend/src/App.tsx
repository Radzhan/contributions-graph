import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './containers/Mian/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h2>Not Found !</h2>} />
      </Routes>
    </div>
  );
}

export default App;

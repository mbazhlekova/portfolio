import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

import './App.css';

const App = () => (
  <div className="grid-container">
    <Sidebar />
    <main className="content" />
  </div>
);

export default App;

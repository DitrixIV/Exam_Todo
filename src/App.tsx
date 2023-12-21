
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ToDo from './pages/toDo';
import Inputs from './pages/inputs';
import Cards from './pages/cards';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
};

export default App;

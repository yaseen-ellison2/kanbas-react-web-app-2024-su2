import React from 'react';
import Labs from './Labs';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div>
        <h1>Yaseen Ellison</h1>
        <Routes>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/" element={<Navigate to="Labs" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

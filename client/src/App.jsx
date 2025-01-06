// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Upcoming from './pages/Upcoming/Upcoming';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
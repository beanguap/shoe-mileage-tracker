// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Upcoming from './pages/Upcoming/Upcoming';
import Collection from './pages/Collection/Collection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
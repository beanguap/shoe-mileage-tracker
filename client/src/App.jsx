import { useEffect, useState } from 'react';
import './styles/neumorphism.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001')
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Shoe Mileage Tracker</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

import { useState } from 'react';
import CountryFlag from './CountryFlag.jsx';
import './style.css';
import './App.css';

function App() {
  const [country, setCountry] = useState('us');
  const [rounded, setRounded] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [size, setSize] = useState('normal');

  return (
    <div className="app-container">
      <h1>Country Flag Demo</h1>
      <div className="controls">
        <label>
          Country code:
          <input value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="small">small</option>
            <option value="normal">normal</option>
            <option value="big">big</option>
          </select>
        </label>
        <label>
          <input type="checkbox" checked={rounded} onChange={() => setRounded(!rounded)} />
          Rounded
        </label>
        <label>
          <input type="checkbox" checked={shadow} onChange={() => setShadow(!shadow)} />
          Shadow
        </label>
      </div>
      <div className="flag-preview">
        <CountryFlag country={country} rounded={rounded} shadow={shadow} size={size} />
      </div>
    </div>
  );
}

export default App;

import * as React from 'react';
import './style.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const [catfact, setcatfact] = useState('');
  const fetchcatfact = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setcatfact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchcatfact();
  }, []);

  return (
    <div>
      <button onClick={fetchcatfact}>Generate Cat facts</button>
      <p>{catfact}</p>
    </div>
  );
}

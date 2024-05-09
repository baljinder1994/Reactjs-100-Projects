import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${isOnline ? 'online' : 'offline'}`}>
        <h1>Internet Connection Status</h1>
        <p>{isOnline ? 'Online' : 'Offline'}</p>
      </header>
    </div>
  );
}

export default App;

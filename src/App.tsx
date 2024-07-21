import React from 'react';
import logo from './logo.svg';
import './App.css';

type QuackType = {
  message: string;
  url: string;
};

function App() {
  const [duckySrc, setDuckySrc] = React.useState('');

  React.useEffect(() => {
    async function fetchImage() {
      try {
        const result = await fetch('https://random-d.uk/api/quack');
        const json = (await result.json()) as QuackType;

        setDuckySrc(json?.url ?? '/default_ducky.jpg');
      } catch (e) {
        console.error(e);
        setDuckySrc('/default_ducky.jpg');
      }
    }
    fetchImage();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <div className="cypress-area">
          <div data-qa="test">Test for cypress</div>
          <div className="ducky-container">
            <img
              data-qa="ducky-pic"
              src={duckySrc}
              alt="ducky"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

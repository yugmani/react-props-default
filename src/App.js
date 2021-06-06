import React from 'react';
import './style.css';
import MyComponent from './components/MyComponent';

export default function App() {
  return (
    <div className="app">
      <h1>Default Props</h1>
      <MyComponent />
      <MyComponent title="GeeksforGeeks" technology="Angular" />
      <p>
        <a href="https://www.geeksforgeeks.org/reactjs-props-set-2/?ref=rp">
          ReactJS | Props – Set 2 (Default Props)
        </a>
      </p>
    </div>
  );
}

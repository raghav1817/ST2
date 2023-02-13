import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Index = () => {
  return (
    <div>
      <h1>This is Index Component, Heading 1</h1>
      <h2>This is Index Component, Heading 2</h2>
      <p>This is Index Component</p>
      <App/>
    </div>
  )
}

export default Index;

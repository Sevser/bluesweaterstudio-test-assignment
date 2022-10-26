import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';


try {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <App />
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
} catch (e) {
  /* eslint-disable no-console */
  console.warn('main.js is unable to find application container.');
  console.warn('If you are running production or development app then worry');
  console.warn('If this is components, styleguide or storybook this behavior is expected');
  /* eslint-enable no-console */
  throw e;
}

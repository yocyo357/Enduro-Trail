import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './components/login';
import SignUp from './components/signup';
import PostRaces from './components/postraces';

function App() {
  return (
    <div className="container-fluid">
      <PostRaces />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import Login from './Login';
import { useStateValue } from './Stateprovider';


function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
    {!user ? (<Login />) : (
      <>
      <Header />
    <div className="app__body">
      <SideBar />
      <Feed />
    </div>
    </>
    )}
    </div>
  );
}

export default App;

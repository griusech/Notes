import React from 'react';
import './App.css';
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Tasks from './Components/Tasks/Tasks'
import { useStateValue } from './StateProvider'

function App() {

  const [{user}] = useStateValue();

  return (
    <div className="App">
      { !user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Tasks />
        </>
      )

      }
    </div>
  );
}

export default App;

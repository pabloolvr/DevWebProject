//import React from "react";
import React, { useState } from 'react';
import Login from './components/Login/Login';
import { SetupRouter } from "./Router";
{/*
function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <SetupRouter></SetupRouter>
    </div>
  );
}
*/}
export const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div>
      <SetupRouter></SetupRouter>
    </div>
  );
};

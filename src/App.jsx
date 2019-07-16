import React, { useState } from 'react';

import useStyle from './App.style'
import Layout from './components/Layout'
import AuthContext from './services/Auth/AuthContext'

function App() {

  const [user, setUser] = useState()

  const classes = useStyle()

  return ( 
    <AuthContext.Provider value={{user, setUser}}>
      <Layout/>
    </AuthContext.Provider>
  );
}

export default App;

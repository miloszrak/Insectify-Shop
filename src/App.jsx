import React from 'react';
import useStyle from './App.style'
import Start from './components/Start'

function App() {

  const classes = useStyle()

  return (
    <div className={classes.app}>
      <Start/>
    </div>
  );
}

export default App;

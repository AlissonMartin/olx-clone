import React from 'react';
import { GlobalStyle } from "./globalStyles";
import MainRoutes from './routes/routes';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <MainRoutes/>
    </div>
  );
}

export default App;

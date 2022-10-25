import React from 'react';
import { GlobalStyle } from "./globalStyles";
import Home from './pages/Home/Home';
import MainRoutes from './routes/routes';
import Header from "../src/components/Header/Header";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

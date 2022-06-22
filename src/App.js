import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from './common/Header';
import Footer from './common/Footer';


function App() {
  return (

    <div className="App">
      <Header />
      <Footer />
    </div>

  );
}

export default App;

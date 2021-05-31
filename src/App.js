import './App.css';
import Footer from './components/Footer/Footer';
import DieuHuongURL from './router/DieuHuongURL';

import {BrowserRouter as Router} from "react-router-dom";
import Menu from './components/Menu/Menu';
function App() {
  return (
    <Router>
      <Menu/>
      <DieuHuongURL/>
      <Footer/>
    </Router>
  );
}

export default App;

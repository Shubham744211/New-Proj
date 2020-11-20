import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
/* import Navbar from './component/Nav_comp'; */
import NavComp from './component/NavComp';
import Route from 'react-router-dom/Route'
import { BrowserRouter as Router } from 'react-router-dom'
import HomeTav from './component/Home/HomeTav'
function App() {
  return (
    <Router>
    <div className="App">
      <NavComp/>
      <Route path = "/" exact strict render ={() => {
        return <Login/>
      }}/>
      <Route path = "/home" exact  render ={() => {
        return <HomeTav />
      }}/>
      
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home';
import Add from './views/Add';
import { Link, Router } from '@reach/router'
import OnePage from './views/OnePage';
import Update from './views/Update';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Router>
          <Home path='/'/>
          <Add path='/add'/>
          <OnePage path='/product/1'/>
          <Update path='/product/update/1'/>
        </Router>
      </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Library from './Pages/Library';
import Botny from './Pages/Botny';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/Library' element={<Library/>}/>
          <Route path='/Botny' element={<Botny/>}/> 
        </Routes>  
      </div>
    </Router>
  );
}

export default App;

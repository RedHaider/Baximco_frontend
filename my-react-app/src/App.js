import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Tag from './Tag';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Charts from './charts';
import Alarm from './Alarm';
import Audit from './audit';


function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <div className='content'>
        <Routes>
          <Route path="/" element={<Tag/>}/>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="/alarm" element={<Alarm/>}/>
          <Route path="/audit" element={<Audit/>}/>
        </Routes>
       </div>
    </div>
    </Router>
  );
}

export default App;

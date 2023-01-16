import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import CodeForinterviewers from './components/CodeForInterviewers';
import AllUsers from './components/AllUsers';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/addusers" element={<AddUser/>}/>
      <Route path="/" element={<CodeForinterviewers/>}/>
      <Route path="/allusers" element={<AllUsers/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;

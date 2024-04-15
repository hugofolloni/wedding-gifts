import Header from "./Header";
import Homepage from "./Homepage";
import List from './List'
import Item from './Item'
import Admin from "./Admin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";


function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='list' element={<List/>}/>
          <Route path='/item/:id' element={<Item/>}/>
          <Route path='/admin-login' element={<Login/>}/>
          <Route path ='/admin' element={<Admin/>}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;

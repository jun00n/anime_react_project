import {  Route, Routes } from 'react-router-dom';
import Anime from './Anime';
import './App.css'
import Singlepage from './Singlepage';





function App() {
  return (
    <div className="App">
<Routes>
      <Route path='/' element={<Anime/>}> </Route>
      <Route path='/singlepage/:name' element={<Singlepage/>}></Route>
</Routes>    
    </div>
  );
}

export default App;

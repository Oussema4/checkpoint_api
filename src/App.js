import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './details';
import List from './list';

function App() {
  return (
    <div className="App">
      <h1>List</h1>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/details/:id" element={<Details ></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;

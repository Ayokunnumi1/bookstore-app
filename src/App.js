import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Category from './components/Category';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/saved" element={<saved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FrontPage from './pages/FrontPage';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
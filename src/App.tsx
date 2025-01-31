// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import SavedPage from './components/SavedPage';
import { useJokes } from './hooks/useJokes';

const App = () => {
  const { savedJokes, saveJoke } = useJokes();

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage saveJoke={saveJoke} />} />
          <Route path="/saved" element={<SavedPage savedJokes={savedJokes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

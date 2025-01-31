import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FrontPage from './pages/FrontPage';
import SavedPage from './components/SavedPage';
import { useJokes } from './hooks/useJokes';

const App = () => {
  const { savedJokes, saveJoke, deleteJoke } = useJokes();

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage saveJoke={saveJoke} />} />
          <Route path="/saved" element={<SavedPage savedJokes={savedJokes} deleteJoke={deleteJoke} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

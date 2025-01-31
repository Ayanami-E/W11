// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';    // 导入的文件名是小写
import Saved from './pages/saved';  // 导入的文件名是小写

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />     // 组件名必须大写
          <Route path="/saved" element={<Saved />} />  // 组件名必须大写
        </Routes>
      </div>
    </Router>
  );
}

export default App;
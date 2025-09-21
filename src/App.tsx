import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './pages/home/HomeScreen';
import { BlogPage } from './pages/blog/BlogPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;

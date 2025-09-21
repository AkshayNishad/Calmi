
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store/store';
import { HomeScreen } from './pages/home/HomeScreen';
import { BlogPage } from './pages/blog/BlogPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

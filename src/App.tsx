
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { HomeScreen } from './pages/home/HomeScreen';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomeScreen />
      </div>
    </Provider>
  );
}

export default App;

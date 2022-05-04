import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact={true} element={ <HomePage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

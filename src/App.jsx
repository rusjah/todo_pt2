import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/components/Nav';
import StartPage from './components/pages/StartPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/components/Nav';
import StartPage from './components/pages/StartPage';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className='min-h-[88vh]'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Nav from './components/components/Nav';
import StartPage from './components/pages/StartPage';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration'
import TodoList from './components/pages/TodoList';
import { useAppContext } from './contex/AppContext';
import OneList from './components/pages/OneList';

function App() {
  const {typeList} = useAppContext()
  return (
    <div className="App">
      <Nav />
      <main className='min-h-[88vh]'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/todoList' element={<TodoList />} />
          <Route path={`/${typeList}`} element={<OneList />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

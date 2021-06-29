import './App.scss';
import { Switch, Router, Redirect, BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

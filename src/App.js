import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Menu from './Menu';
import Agendamento from './Pages/Agendamento';
import Historia from './Pages/Historia';
import Trabalhe from './Pages/Trabalhe';
import Informacoes from './Pages/Informacoes';
import Rodape from './Rodape';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <body className="App-body">
        <Routes>
          <Route exact path="/Home" element={<Home/>}/>
          <Route path="/Historia" element={<Historia/>}/>
          <Route path="/Agendamento" element={<Agendamento/>}/>
          <Route path="/Trabalhe" element={<Trabalhe/>}/>
          <Route path="/Informacoes" element={<Informacoes/>}/>
        </Routes>
      </body>
      <footer className="App-footer">
        <Rodape/>
      </footer>
    </Router> 
  );
}

export default App;

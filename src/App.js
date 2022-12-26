import {BrowserRouter as Router, Route,Routes,Link} from "react-router-dom"
import TelaCadastroUsuario from "./components/TelaCadastroUsuario";
import TelaCadastroEvento from "./components/TelaCadastroEvento";
import TelaLogin from "./components/TelaLogin"
import TelaPrincipal from "./components/TelaPrincipal";
import TelaDetalhesEvento from "./components/TelaDetalhesEvento"
import TelaAtualizaEvento from "./components/TelaAtualizaEvento";
import TelaTrocaSenha from "./components/TelaTrocaSenha";



function App() {
  return (
    <Router>
      <Routes>
          <Route path = "/" element = {<TelaLogin></TelaLogin>}></Route>
          <Route path = "/cadastroUsuario" element = {<TelaCadastroUsuario></TelaCadastroUsuario>}></Route>
          <Route path = "/principal" element = {<TelaPrincipal></TelaPrincipal>}></Route>
          <Route path = "/cadastroEvento" element = {<TelaCadastroEvento></TelaCadastroEvento>}></Route>
          <Route path = "/detalhesEvento/:id" element = {<TelaDetalhesEvento></TelaDetalhesEvento>}></Route>
          <Route path = "/atualizaEvento" element = {<TelaAtualizaEvento></TelaAtualizaEvento>}></Route>
          <Route path = "/trocaSenha" element = {<TelaTrocaSenha></TelaTrocaSenha>}></Route>


      </Routes>
    </Router>
  );
}

export default App;

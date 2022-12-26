import styles from "./TelaLoginCSS.module.css";
import {Link,useNavigate} from 'react-router-dom';
import {useState,useEffect} from "react";
import axios from "axios";


const baseURL = 'http://localhost:8082';

function TelaLogin() {

    const navigate = useNavigate();
    const [contato,setContato] = useState('');
    const [senha,setSenha] = useState('');

    function getUsers() {
        axios.get(`${baseURL}/users/`)
        .then(function(res){
            setUsers(res.data);            
        })
        .catch(function () {});
    };

    useEffect(() => {
        getUsers();
    },[])

    const [users,setUsers] = useState([]);

    const user = users.find(u => u.contato === contato);


    function autenticacao() {
        if (typeof user === 'undefined') {window.alert("Login ou senha incorretos!"); return navigate('/');}
        else {window.alert("Autenticação realizada com sucesso!"); return navigate('/principal',{state:{user}});}
    }
  
    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainerLogin}>
                
                <input type = 'text' placeholder = "Email ou telefone" onChange = {e => setContato(e.target.value)}></input>
                <input type = 'password' security = "true" placeholder = "Senha" onChange = {e => setSenha(e.target.value)}></input>
                <button onClick = {autenticacao} className = {styles.buttonEntrada}>Entrar</button>
                <Link to = "/trocaSenha" className = {styles.buttonTrocaSenha}>Esqueceu a senha?</Link>
                
                <div className = {styles.subcontainerCadastro}>
                    <Link className = {styles.btn} to = "/cadastroUsuario">Criar nova conta</Link>
                </div>


            </div>
        </div>
    );
}

export default TelaLogin;
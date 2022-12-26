import styles from "./TelaTrocaSenhaCSS.module.css";
import {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
const baseURL = 'http://localhost:8082';



function TelaTrocaSenha() {

    const navigate = useNavigate();

    const [users,setUsers] = useState([]);
    const [auth,setAuth] = useState(false);
    const [contato,setContato] = useState('');
    const [senha,setSenha] = useState('');
    const [senhaNova,setSenhaNova] = useState('')


    function getUsers() {
        axios.get(`${baseURL}/users`)
        .then(function(res){
            setUsers(res.data);            
        })
        .catch(function () {});
    };


    function atualizaUser () {

        axios
            .patch(`${baseURL}/users/${user.id}`, 
            {
                "senha":senhaNova,
            })
            .then(function () {
                window.alert("Senha atualizada com sucesso!");
                navigate('/');
            })
            .catch(function () {
                window.alert("Ocorreu um erro ao trocar a senha!");
                navigate('/');
            });
    
        };

    useEffect(() => {
        getUsers();
    },[])

    const user = users.find(u => u.contato === contato);

    function verificaEmail() {
        
        if (typeof user === 'undefined') {window.alert("Este email não está cadastrado!"); return navigate('/');}
        else {setAuth(true);window.alert("Email encontrado!");}
    }


        function validaInputs() {
            if ((contato === "") || (contato.trim() === "") || (senha === "") || (senha.trim() === "") || (senhaNova === "") || (senhaNova.trim() === "")) {alert("Os campos não podem estar vazios!");}
            else if (senha != user.senha) {alert("A senha digitada está incorreta!");}
            else if (senha === senhaNova) {alert("Sua nova senha não pode possuir o valor da senha antiga!");}
            else {atualizaUser();}
        }

    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainer}>
                <div className = {styles.containerTitulo}>
                    <h1>Encontre sua conta</h1>
                </div>

                <div className = {styles.container2}>
                    <div className = {styles.containerInputs}>
                        <p>Insira o seu email para procurar a sua conta</p>
                        <input placeholder = "Email" type = "email" onChange = {(e) => setContato(e.target.value)}></input>

                        {auth && 
                            <input placeholder = "Digite a sua senha atual" type = "password" security = "true" onChange = {(e) => setSenha(e.target.value)}></input>
                        }

                        {auth && 
                            <input placeholder = "Digite a sua nova senha" type = "password" security = "true" onChange = {(e) => setSenhaNova(e.target.value)}></input>
                        }

                    </div>
                </div>

                <div className = {styles.container3}>

                    {auth && 
                        <button onClick = {validaInputs}>Atualizar senha</button>
                    } 

                    {auth || 
                        <button onClick = {() => navigate("/")}>Cancelar</button>
                    }

                    {auth || 
                        <button onClick = {verificaEmail}>Pesquisar</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default TelaTrocaSenha;
import styles from "./TelaDetalhesEventoCSS.module.css";
import {useState} from "react";
import {Link,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios'
const baseURL = 'http://localhost:8082';


function TelaDetalhesEvento() {

    const navigate = useNavigate();
    const location = useLocation();
    const {evento} = location.state;
    const {user} = location.state;

    function deletaEvento() {
        axios.delete(`${baseURL}/events/${evento.id}`)
        .then(function(req,res) {
            window.alert("Evento deletado com sucesso!");
            navigate("/principal", {state:{user:user}});
            window.location.reload(false);

        })
        .catch(function(req,res) {
            window.alert("Ocorreu um erro inesperado ao tentar deletar o evento!");
            navigate("/principal", {state:{user:user}});
            window.location.reload(false);
        })
    };


    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainer}>
                <div className = {styles.containerTitulo}>
                    <h1>{evento.titulo}</h1>
                </div>

                <div className = {styles.containerInformacoes}>
                    <ul>
                        <li>Local : {evento.local}</li>
                        <li>Data de Início : {evento.dataInicio}</li>
                        <li>Data de Término : {evento.dataFim}</li>
                        <li>Descrição : {evento.descricao}</li>
                        <li>Tipo de Evento : {evento.tipoEvento}</li>
                    </ul>
                </div>

                {evento.idCriador == user.id && 

                    <div className = {styles.containerBotao}>
                        <Link className = {styles.btn} to = "/atualizaEvento" state = {{evento:evento,user:user}}>Atualizar Evento</Link>
                        <Link onClick = {deletaEvento} className = {styles.btn}>Deletar Evento</Link>
                    </div>

                }

                

            </div>
        </div>
    );
}

export default TelaDetalhesEvento;
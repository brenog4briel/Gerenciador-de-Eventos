import styles from "./telaPrincipalCSS.module.css";
import {useState,useEffect} from "react";
import {Link,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios'
const baseURL = 'http://localhost:8082';



function TelaPrincipal() {

    const navigate = useNavigate();

    const location = useLocation();

    const {user} = location.state;

    const [eventos,setEventos] = useState([]);

    const renderizaEventos = () => {

        axios
            .get(`${baseURL}/events`)
            .then(function (res) {
                setEventos(res.data);
            })
            .catch(function (error,req,res) {
                window.alert("Ocorreu um erro ao resgatar os itens da API!");
            })
        };

    useEffect(() => {
        renderizaEventos();
    },[])


    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainer}>
                <div className = {styles.containerTitulo}>
                    <h1>Eventos</h1>
                </div>

                <div className = {styles.containerEventos}>
                    <ul>
                    {eventos.map(evento => {
                        return <Link to = {`/detalhesEvento/${evento.id}`} state = {{evento:evento,user:user}}><li key={evento.id}>{evento.titulo}</li></Link>
                    })}
                    </ul>
                </div>
                
            <div className = {styles.containerBotao}>
                <Link to = "/cadastroEvento" state = {{user:user}} className = {styles.btn}>Novo evento</Link>
            </div>


            </div>
        </div>
    );
}


export default TelaPrincipal;
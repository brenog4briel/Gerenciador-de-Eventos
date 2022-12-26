import styles from "./TelaCadastroEventoCSS.module.css";
import {useState} from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios'
const baseURL = 'http://localhost:8082';

const tiposEvento = ['Esporte','Estudo','Palestra','Festa'];


function TelaCadastroEvento() {

   const navigate = useNavigate();
   const location = useLocation();

   const {user} = location.state;

    const [titulo,setTitulo] = useState('');
    const [local,setLocal] = useState('');
    const [dataInicio,setDataInicio] = useState('');
    const [dataFim,setDataFim] = useState('');
    const [descricao,setDescricao] = useState('');
    const [tipoEvento,setTipoEvento] = useState('');


    function cadastraEvento () {

        axios
            .post(`${baseURL}/events`, 
            {
                "titulo": titulo,
                "local": local,
                "dataInicio": dataInicio,
                "dataFim": dataFim,
                "descricao": descricao,
                "tipoEvento": tipoEvento,
                "idCriador":user.id
            })
            .then(function (req,res) {
                window.alert("Evento criado com sucesso!");
                navigate('/principal',{state:{user:user}});
            })
            .catch(function (error,req,res) {
                window.alert("Ocorreu um erro ao cadastrar o evento!");
                navigate('/principal',{state:{user:user}});
            })
            .finally(function () {
                //alert('Finally called');
            });

            
        };

        function validaInputs() {
            if ((titulo || local || dataInicio || dataFim || descricao || tipoEvento) === "") {alert("Preencha todos os campos por favor!");}
            else if ((titulo.trim() || local.trim() || dataInicio.trim() || dataFim.trim() || descricao.trim() || tipoEvento.trim()) === "") {alert("Por favor insira valores válidos!");}
 
            else {cadastraEvento();}
        }

    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainer}>
                <div className = {styles.containerTitulo}>
                    <h1>Novo evento</h1>
                </div>
                
                <div className = {styles.containerInformacoes}>
                    <input type = "text" placeholder = "título" value = {titulo} onChange = {(e) => setTitulo(e.target.value)}></input>
                    <input type = "text" placeholder = "local" value = {local} onChange = {(e) => setLocal(e.target.value)}></input>
                    <input type = "text" placeholder = "data de início" value = {dataInicio} onChange = {(e) => setDataInicio(e.target.value)}></input>
                    <input type = "text" placeholder = "data de finalização" value = {dataFim} onChange = {(e) => setDataFim(e.target.value)}></input>
                    <input type = "text" placeholder = "descrição" value = {descricao} onChange = {(e) => setDescricao(e.target.value)}></input>

                    <select value = {tipoEvento} onChange = {(e) => setTipoEvento(e.target.value)}>
                            
                            {tiposEvento.map((value) => (
                                <option value = {value} key = {value}>
                                    {value}
                                </option>
                            ))}
                    </select>
                </div>

                <div className = {styles.containerBotao}>
                    <button onClick = {validaInputs} className = {styles.btn}>Criar evento</button>
                </div>

            </div>
        </div>
    );
}

export default TelaCadastroEvento;
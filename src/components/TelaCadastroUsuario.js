import styles from "./TelaCadastroUsuarioCSS.module.css";
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
const baseURL = 'http://localhost:8082';

const dias = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17',
              '18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const anos = ['2022','2021','2020','2019','2018','2017','2016','2015','2014','2013'];

function TelaCadastroUsuario() {

    const navigate = useNavigate();

    function cadastraUser () {

        const gen = getRadioValue();
        const data = formataData();

        setGenero(gen);
        setDataNascimento(data);
        
        axios
            .post(`${baseURL}/users`, 
            {
                "nome": nome,
                "sobrenome": sobrenome,
                "contato": contato,
                "senha": senha,
                "dataNascimento": gen,
                "genero": data,
            })
            .then(function (req,res) {
                window.alert("Usuário criado com sucesso!");
                navigate('/');
            })
            .catch(function (error,req,res) {
                window.alert("Ocorreu um erro ao cadastrar o usuário!");
                navigate('/');
            })
            .finally(function () {
            });
       

        };

        function validaInputs() {
            if ((nome || sobrenome || contato || senha || genero || dataNascimento) === "") {alert("Preencha todos os campos por favor!");}
            else if ((nome.trim() || sobrenome.trim() || contato.trim() || senha.trim() || genero.trim() || dataNascimento.trim()) === "") {alert("Por favor insira valores válidos!");}
 
            else {cadastraUser();}
        }

        function formataData () {
            return diaSelecionado + "/" + mesSelecionado + "/" + anoSelecionado;
        };

        function getRadioValue () {
            if (document.getElementById('fem').checked) {return document.getElementById('fem').value}
            else if (document.getElementById('masc').checked) {return document.getElementById('masc').value}
            else {return document.getElementById('outro').value}
        };
      


    const [nome,setNome] = useState('');
    const [sobrenome,setSobrenome] = useState('');
    const [contato,setContato] = useState('');
    const [senha,setSenha] = useState('');
    const [dataNascimento,setDataNascimento] = useState('');
    const [genero,setGenero] = useState('');

    const [diaSelecionado,setDiaSelecionado] = useState(dias[0]);
    const [mesSelecionado,setMesSelecionado] = useState(meses[0]);
    const [anoSelecionado,setAnoSelecionado] = useState(anos[0]);

    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainer}>
                <div className = {styles.containerTitulo}>
                    <h1>Cadastre-se</h1>
                </div>
                <div className = {styles.containerCadastrosuperior}>
                    <div className = {styles.containerNome}>
                        <input type = "text" placeholder = "Nome" value = {nome} onChange = {(e) => setNome(e.target.value)}></input>
                        <input type = "text" placeholder = "Sobrenome" value = {sobrenome} onChange = {(e) => setSobrenome(e.target.value)}></input>
                    </div>

                    <div className = {styles.containerEmail}>
                        <input type = "text" placeholder = "Celular ou email" value = {contato} onChange = {(e) => setContato(e.target.value)}></input>
                        <input type = "password" security = "true" placeholder = "Nova senha" value = {senha} onChange = {(e) => setSenha(e.target.value)}></input>
                    </div>

                </div>

                <div className = {styles.containerCadastroinferior}>


                    <div className = {styles.containerCadastroinferiord1}>
                        <small>Data de nascimento</small>
                    </div>

                    <div className = {styles.containerCadastroinferiord2}>
                        <select value = {diaSelecionado} onChange = {(e) => setDiaSelecionado(e.target.value)}>

                            {dias.map((value) => (
                                <option value = {value} key = {value}>
                                    {value}
                                </option>
                            ))}
                
                        </select>

                        <select value = {mesSelecionado} onChange = {(e) => setMesSelecionado(e.target.value)}>
                            
                            {meses.map((value) => (
                                <option value = {value} key = {value}>
                                    {value}
                                </option>
                            ))}
                        </select>

                        <select value = {anoSelecionado} onChange = {(e) => setAnoSelecionado(e.target.value)}>

                            {anos.map((value) => (
                                <option value = {value} key = {value}>
                                    {value}
                                </option>
                            ))}


                        </select>
                    </div>

                    <div className = {styles.containerCadastroinferiord3}>
                        <small>Gênero</small>
                    </div>

                    <div className = {styles.containerCadastroinferiord4}>
                        <div>
                            <label>Feminino</label>
                            <input name = "genero" id = "fem" type = "radio" value = "Feminino"></input>
                        </div>

                        <div>
                            <label>Masculino</label>
                            <input name = "genero" id = "masc" type = "radio" value = "Masculino"></input>
                        </div>

                        <div>
                            <label>Outro</label>
                            <input name = "genero" id = "outro" type = "radio" value = "Outro"></input>
                        </div>
                    </div>

                    <div className = {styles.containerButton}>
                        <button onClick = {validaInputs} className = {styles.btn}>Cadastrar-se</button>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default TelaCadastroUsuario;
import { useState } from 'react'; // importando hooks do React
import { useNavigate } from 'react-router-dom'; // use isso no lugar de window.location.href
import axios from 'axios'; // biblioteca para fazer requisições HTTP
import './style.css'; // importando estilos CSS
import logo from '../../assets/people.png'; // importando imagens
import seta from '../../assets/seta.png';

// SE USA APENAS O "window.location.href" quando quiser recarregar o estado atual da aplicação
/* SEMPRE que for mudar de componet atravez de link de navegação, usar o Link.

import { Link } from 'react-router';

<Link to="/users">Usuários</Link>
*/

const App = () => {
  // ======================
  // ESTADOS
  // ======================
  const navigate = useNavigate();
  
  // Array de usuários, inicialmente vazio
  const [users, setUsers] = useState([]);
  
  // Estado para controlar o valor do input "nome"
  const [name, setName] = useState('');
  
  // Estado para controlar o valor do input "idade"
  const [age, setAge] = useState('');

  // ======================
  // useEffect - substitui window.onload

  /* Ela sempre espera dois parametros: uma funcao e um array de dependencias ex: useEffect(() => {}, []) */


  /*O useEffects também pode ser alterado quando estados mudam, ex: useEffect(() => {}, [users])
    TODA VEZ QUE O USERS FOR ALTERADO, O useEffect SERÁ EXECUTADO/RECARREGADO
  */
  // ======================


  /* useEffect(() => { 
    // executado assim que o componente monta/atualiza. Efeito colateral
    // quando precisar usar async e await, sempre criar uma func assincrona aqui dentro
    
    async function fetchUsers() { //Função assíncrona para buscar usuários do servidor
      try {
        const { data } = await axios.get('http://localhost:3000/users'); // GET todos os usuários
        setUsers(data); // atualiza o estado com os usuários recebidos
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers(); // chama a função assim que o componente monta
  }, []); // array vazio → executa apenas uma vez assim que a aplicação iniciar
  */



  // é chamado quando a aplicação inicia ou qunado o array users mudar
  /* useEffect(() => {
    console.log('Usuários atualizados:', users[users.length - 1]);
  }, [users]) */

  // ======================
  // FUNÇÃO PARA ADICIONAR USUÁRIO
  // ======================
  
  async function addNewUser(event) {
    event.preventDefault(); // previne o comportamento padrão do submit (recarregar página)

    // validação simples: os campos não podem estar vazios
    if (!name || !age) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      // POST para criar um novo usuário
      const users_API = await axios.post('http://localhost:3000/users', { name, age });
      console.log('Resposta da API:', users_API.data);
      
      // Se a API retornou um array, pegamos o último item (usuário recém criado)
      const newUser = users_API.data[users_API.data.length - 1];

      // Atualiza o estado local adicionando apenas o novo usuário
      setUsers([...users, newUser]);

      setName(''); // limpa os inputs
      setAge('');

      navigate('/users')
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  }

  // ======================
  // FUNÇÃO PARA REMOVER USUÁRIO
  // ======================
  
  /* async function removeUser(id) {
    try {
      // DELETE para remover o usuário no backend
      await axios.delete(`http://localhost:3000/users/${id}`);

      // Atualiza o estado local removendo o usuário sem fazer outro GET
      setUsers(users.filter((user) => user.id !== id));
      
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
    }
  } */

  // ======================
  // RENDERIZAÇÃO
  // ======================
  
  return (
    <div className="home-page container">
      <img className="logo" src={logo} alt="Logo" />
      <div className="form-container">

        {/* onSubmit é a forma correta de lidar com formulários em React */}
        <form onSubmit={addNewUser}>
          <h1>Olá!</h1>

          {/* Input para nome */}
          <p>Nome</p>
          <input type="text" placeholder="Nome"
            value={name} // valor controlado pelo estado
            onChange={(e) => setName(e.target.value)} // atualiza o estado ao digitar
          />

          {/* Input para idade */}
          <p>Idade</p>
          <input type="number" placeholder="Idade"
            value={age} // valor controlado pelo estado
            onChange={(e) => setAge(e.target.value)} // atualiza o estado ao digitar
          />

          {/* Botão de cadastro */}
          <button type="submit" className="submit-button">
            Cadastrar <img className="seta" src={seta} alt="seta" />
          </button>
        </form>
      </div>
    </div>
  );
};

// Exporta o componente App para ser usado em outros arquivos
export default App;

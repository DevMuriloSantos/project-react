import { useState, useEffect } from 'react'; // importando hooks do React
import { Link } from 'react-router-dom'
import axios from 'axios'; // biblioteca para fazer requisições HTTP
import './users.css'; // importando estilos CSS
import avatar from '../../assets/avatar.png'; // importando imagens
import seta from '../../assets/seta.png';
import deleteImg from '../../assets/delete.png';

const Users = () => {
  // ======================
  // ESTADO -- useState
  // ======================

  // Array de usuários, inicialmente vazio
  const [users, setUsers] = useState([]);


  /*O useEffects também pode ser alterado quando estados mudam, ex: useEffect(() => {}, [users])
    TODA VEZ QUE O USERS FOR ALTERADO, O useEffect SERÁ EXECUTADO/RECARREGADO
  */
  // ======================


  useEffect(() => {
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



  // é chamado quando a aplicação inicia ou qunado o array users mudar
  useEffect(() => {
    console.log('Usuários atualizados:', users[users.length - 1]);
  }, [users])

  async function removeUser(id) {
    try {
      // DELETE para remover o usuário no backend
      await axios.delete(`http://localhost:3000/users/${id}`);

      // Atualiza o estado local removendo o usuário sem fazer outro GET
      setUsers(users.filter((user) => user.id !== id));

    } catch (error) {
      console.error('Erro ao remover usuário:', error);
    }
  }

  // ======================
  // RENDERIZAÇÃO
  // ======================

  return (
    <div className="users-page container">
      <img className="logo" src={avatar} alt="avatar" />

      <div className="form-container">
        <h1>Usúarios</h1>

        {/* Lista de usuários */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {/* Exibe nome e idade */}
              <p>{user.name}</p> - <p>{user.age}</p>

              {/* Botão de deletar usuário */}
              <button className="delete-button" onClick={() => { removeUser(user.id) }}>
                <img src={deleteImg} alt="Excluir" />
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="voltar">
          <Link to='/'><img className="seta" src={seta} alt="seta" /> Voltar</Link>
        </button>
      </div>
    </div>
  );
};

// Exporta o componente App para ser usado em outros arquivos
export default Users;

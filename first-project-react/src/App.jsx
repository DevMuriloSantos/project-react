import { useState } from 'react'
import './style.css'; // importa o arquivo de estilos CSS
import logo from './assets/people.png' // sempre importar uma imagem que será carregada
import seta from './assets/seta.png'
import deleteImg from './assets/delete.png'

const App = () => { // sempre ser declarado com letra maiúscula

  const [ users, setUsers ] = useState([]) // cria um estado
  // por padrão sempre se inicia com set a função
  // precisa colocar useState([]) para inicializar o estado como um array vazio
  // para adicionar um novo usuário, você deve usar 'setUsers'

  function addNewUser(event) {
    event.preventDefault() // previne o comportamento padrão do botão de submit

    const name = document.getElementById('nome').value;
    const age = document.getElementById('idade').value;

    setUsers([...users, {id: Math.random(), name, age}]) // add novo usuário
  } // Math.random() ---> gera um número aleatório

  return ( // retorna o que estiver aqui dentro, no HTML
    <div className="container"> {/* className é usado em vez de class no React */}

      <img className='logo' src={logo} alt="" />

      <div className='form-container'>
        <form action="">
          <h1>Olá!</h1>

          <p>Nome</p>
          <input type="text" name="nome" id="nome" placeholder='Nome' autoComplete='off'/>

          <p>Idade</p>
          <input type="number" name="idade" id="idade" placeholder='Idade' autoComplete='off' />

          <button type="submit" id='submit-button' onClick={addNewUser}>Cadastrar <img id='seta' src={seta} alt="" /></button>
          <ul>
            {users.map(user => ( // mapeia item por item do array users
              <li key={user.id}> {/* adiciona uma chave única para cada item */}
                <p>{user.name}</p> <p>{user.age}</p>

                <button id='delete-button'><img src={deleteImg} alt="" /></button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  )

}

export default App; // exporta a arrow function App


// Os componentes sempre rodam em formato de sanduíche, ou seja, dentro de uma elemento pai
import React from 'react';
import './style.css'; // importa o arquivo de estilos CSS
import logo from './assets/people.png' // sempre importar uma imagem que será carregada

const App = () => { // sempre ser declarado com letra maiúscula

  return ( // retorna o que estiver aqui dentro, no HTML
    <div className="container"> {/* className é usado em vez de class no React */}

      <img className='logo' src={logo} alt="" />

      <div className='form-container'>
          <form action="">
          <h1>Olá!</h1>

            <p>Nome</p>
            <input type="text" name="nome" id="nome" placeholder='Nome' autoComplete='off'/>

            <p>Idade</p>
            <input type="number" name="idade" id="idade" placeholder='Idade' autoComplete='off'/>

            <button type="submit" id='submit-button'>Cadastrar</button>
          </form>
      </div>
    </div>
  )

}

export default App; // exporta a arrow function App


// Os componentes sempre rodam em formato de sanduíche, ou seja, dentro de uma elemento pai
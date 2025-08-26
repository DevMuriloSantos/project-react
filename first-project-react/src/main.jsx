import { createRoot } from 'react-dom/client'
import App from './App.jsx' // importa o componente (arrow function) App do arquivo App.jsx

createRoot(document.getElementById('root')).render(
  // renderiza todos os componentes informados aqui, dentro do html na div "root"
  <>
    <App /> {/* componente React */}
    {/* <App2 /> */}
  </>
)


// app é o componente app.jsx
// nesse arquivo, não se deve mexer muito


/* IMPORTANTE SABER QUE SE FOR PRECISO RENDERIZAR VÁRIOS COMPONENTES, É NECESSÁRIO FAZER EM FORMATO DE UM "SANDUÍCHE" */

/*
createRoot(document.getElementById('root')).render(
  <>
    <App /> <Test />
  </>
)

^
| => DESSA FORMA  
*/
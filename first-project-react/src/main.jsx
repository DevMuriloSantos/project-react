import { createRoot } from 'react-dom/client'
import Routes from './routes.jsx'
import './global.css' // estilos globais (reset)

createRoot(document.getElementById('root')).render(
  // renderiza todos os componentes informados aqui, dentro do html na div "root"
  <>
    <Routes /> {/* componente React */}
    {/* <App2 /> */}
  </>
)

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
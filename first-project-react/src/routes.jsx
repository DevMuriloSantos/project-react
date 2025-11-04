import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/home/index.jsx'
import Users from './containers/users/users.jsx'

function AppRoutes() {
    // path é o endereço que eu vou navegar ex: /users. Se eu deixar só '/' -> indica a home
    // Em react-router-dom v6, Routes (plural) deve envolver os Route.

    // no react-router-dom v6, Routes (plural) deve envolver os Route. Use isso ao invés de Switch.
    // componet = element. Ex: element={<nom_do_componente />}
    // sempre usar a estrutura abaixo

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
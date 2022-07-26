import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routs from './routs'


export function App() {
    return (
        <Router>
            <Routes>
                {routs.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
            </Routes>
        </Router>
    )
}
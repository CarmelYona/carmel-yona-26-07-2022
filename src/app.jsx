import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import routs from './routs'


export function App() {
    return (
        <Router>
            <AppHeader />
            <Routes>
                {routs.map(route => <Route exact path={route.path} element={route.element} key={route.path} />)}
            </Routes>
        </Router>
    )
}
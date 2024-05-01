import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from "./routes/routers.jsx";

function App() {

    return (
        <Router>
            <MainRoutes />
        </Router>
    );
}

export default App

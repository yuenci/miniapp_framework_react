import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from "./routes/routers.jsx";
import ActionSheetButtons from "@/components/action-sheet-buttons.jsx";
import ActionSheetMenu from "@/components/action-sheet-menu.jsx";

function App() {

    return (
        <>
            <ActionSheetButtons />
            <Router>
                <MainRoutes />
            </Router>
            <ActionSheetMenu />
        </>

    );
}

export default App

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from "./routes/routers.jsx";
import ActionSheetButtons from "@/components/action-sheet-buttons.jsx";
import ActionSheetMenu from "@/components/action-sheet-menu.jsx";
import {useState} from "react";

function App() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <ActionSheetButtons showMenu={showMenu} setShowMenu={setShowMenu} />
            <Router>
                <MainRoutes />
            </Router>
            <ActionSheetMenu  showMenu={showMenu} setShowMenu={setShowMenu} />
        </>

    );
}

export default App

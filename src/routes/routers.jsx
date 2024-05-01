import { Routes, Route } from 'react-router-dom';
import Index from "../pages/index.jsx";
import About from "../pages/about.jsx";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}
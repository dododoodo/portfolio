import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ToggleSwitch from '../components/ToggleSwitch';
import MainPage from "../pages/MainPage";
import ProjectPage from "../pages/ProjectPage";
import DetailPage from '../pages/DetailPage';


function AppRouter() {

    const navigate = useNavigate();
    const location = useLocation();

    // Toggle Switch 버튼
    const toggleClick = () => {
        if (location.pathname === '/') {
            navigate('/project');
        } else {
            navigate('/');
        }
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/project/:id" element={<DetailPage />} />
            </Routes>

            
        
        <ToggleSwitch className="toggle_switch" onToggle={toggleClick}/>
        </>
    )
}

export default AppRouter;
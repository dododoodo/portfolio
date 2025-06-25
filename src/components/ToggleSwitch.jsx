import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ToggleSwitch({ onToggle }) {
    const location = useLocation();
    const [showToggle, setShowToggle] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const isDark = location.pathname === '/';

    // 스크롤 내려갈 때 버튼 숨기기
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowToggle(currentScrollY <= lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`toggle_wrapper ${showToggle ? 'show' : 'hide'}`}>
            <button
                className={`toggle_switch ${isDark ? 'left' : 'right'}`}
                onClick={onToggle}
            >
                <div className="circle" />
            </button>
        </div>
    );
}

export default ToggleSwitch;

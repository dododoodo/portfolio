import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TopBtn() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const scrollControl = () => {
            setShowTopBtn(window.scrollY > 300);
        };
    
        window.addEventListener("scroll", scrollControl);
        return () => window.removeEventListener("scroll", scrollControl);
    }, []);

    return (
        <button
        className={`top_btn ${showTopBtn ? "active" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <img src="/img/detail_topArrow_1.svg" alt="위쪽 화살표 이미지" />
        </button>
    )
}

export default TopBtn
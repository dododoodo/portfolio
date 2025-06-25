import { useEffect } from "react";
import "../styles/project.scss";
import Brackets1 from "../components/object/Brackets1";
import Brackets2 from "../components/object/Brackets2";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";
import TitleText2 from "../components/TitleText2";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectPage() {

    // 스크롤 애니메이션 aos
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // 다크모드/라이트모드
    useEffect(() => {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }, []);
    
    return (
        <>
        <div className="project_logo">
            <img src="/img/project_logo_1.svg" alt="포트폴리오 메인 로고" />

            <div className="motto_container">
                <Brackets1 className='brakets_1' theme="light"/>
                <div className="motto_text">
                    <h2>{"No Develop,\n No Human!"}</h2>
                    <p>발전이 없으면 사람이 아니다</p>
                </div>
                <Brackets2 className='brakets_2' theme="light"/>
            </div>
        </div>

        <section className="project_section">
            <TitleText2 text="Project" />
            <ProjectList />
        </section>
        
        <Footer />
        </>
    )
}

export default ProjectPage
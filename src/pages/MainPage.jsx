import { useEffect } from "react";
import "../styles/main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Brackets1 from "../components/object/Brackets1";
import Brackets2 from "../components/object/Brackets2";
import TitleText from "../components/TitleText";
import YellowDot1 from "../components/object/YellowDot1";
import WhiteDot2 from "../components/object/WhiteDot2";
import AboutBtn from "../components/AboutBtn";
import CareerContainer from "../components/CareerContainer";
import SkillsSection from "../components/SkillsSection";
import BounceObject from "../components/BounceObject";
import TopBtn from "../components/TopBtn";

function MainPage() {
    // 다크모드/라이트모드
    useEffect(() => {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }, []);

    // 스크롤 애니메이션 aos
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
        {/* 메인 로고 */}
        <div className="main_logo">
            <img src="/img/main_logo_1.svg" alt="포트폴리오 메인 로고" />

            <div className="motto_container" 
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
            >
                <Brackets1 className="brackets_1" theme="dark" />
                <div className="motto_text">
                    <h2>{"No Develop,\n No Human!"}</h2>
                    <p>발전이 없으면 사람이 아니다</p>
                </div>
                <Brackets2 className="brackets_2" theme="dark" />
            </div>
        </div>

        {/* 본문 */}
        <main>
            <section className="about_container">
            <TitleText text="About" />
            {/* 자기소개 */}
            <div className="about_me">
                <img src="/img/main_picture_1.png" alt="증명사진" />
                <div className="about_me_text">
                    <h2>주니어 프론트엔드 개발자</h2>
                    <div className="about_name">
                        <h1>김</h1>
                        <h2>도연</h2>
                        <p>
                        입니다. <YellowDot1 className="yellow_dot_1" />
                        </p>
                    </div>

                    {/* 프로필 */}
                    <div className="about_profile">
                        <Brackets1 className="brackets_3" theme="dark" />
                        <div className="profile_text">
                        <h2>
                            프로필
                            <WhiteDot2/>
                        </h2>
                        <p>생년월일 : 2003.01.25 (만 22세)</p>
                        <p>거주지 : 서울특별시 동작구 사당동</p>
                        </div>
                        <Brackets2 className="brackets_4" theme="dark" />
                    </div>

                    {/* 버튼 */}
                    <div className="about_btns">
                        <AboutBtn
                        text="이력서 다운받기"
                        icon="/img/main_resume_1.svg"
                        href="/files/resume.pdf"
                        download={true}
                        />
                        <AboutBtn
                        className='github'
                        text="Github"
                        icon="/img/main_github_1.svg"
                        href="/files/resume.pdf"
                        download={true}
                        />
                        <AboutBtn
                        text="Notion"
                        icon="/img/main_notion_1.svg"
                        href="/files/resume.pdf"
                        download={true}
                        />
                    </div>
                </div>
            </div>
            </section> 

            {/* 업무경험 */}
            <section>
                <CareerContainer />
            </section>

            {/* 스킬 */}
            <section className="skills_section">
                <TitleText text="Skills" />
                <SkillsSection/>
            </section>

            {/* 컨텍트 */}
            <section className="contact_wrapper">
                {/* 왼쪽 문구 영역 */}
                <div className="contact_text">
                    <TitleText text="Contact" />
                    <h2>
                    계속 <span>발전</span>하고 싶은 개발자,<br />
                    당신과 함께 성장하길 바랍니다!
                    </h2>
                </div>

                {/* 오른쪽 연락처 링크 영역 */}
                <div className="contact_info">
                    <div className="info">
                        <p>
                            <img src="/img/main_call_1.svg" alt="전화 아이콘" />
                            010-9505-5563
                        </p>
                        <p>
                            <img src="/img/main_mail_1.svg" alt="이메일 아이콘" />
                            nsa10050@gmail.com
                        </p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/dododoodo" target="_blank" rel="noopener noreferrer">
                            <img src="/img/main_linkArrow_10.svg" alt="GitHub 아이콘" />
                            Github
                        </a>
                        <a href="https://www.notion.so/your-id" target="_blank" rel="noopener noreferrer">
                            <img src="/img/main_linkArrow_10.svg" alt="Notion 아이콘" />
                            Notion
                        </a>
                    </div>
                </div>
                
                <BounceObject />
                </section>
                <TopBtn/>
        </main>
        </>
    );
}

export default MainPage;

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/detail.scss";
import projects from "../data/projects";
import DetailTitle from "../components/DetailTitle";
import Footer from "../components/Footer";
import TopBtn from "../components/TopBtn";

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    

    useEffect(() => {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }, []);

    const prevBtn = () => {
        navigate("/project");
    };

    return (
        <main className="detail_container">
            <nav>
                <button className="prevBtn" onClick={prevBtn}>
                <img src="/img/main_leftArrow_2.svg" alt="왼쪽 화살표 이미지" />
                </button>
            </nav>

            <section className="detail_section">
                <article className="article_thumb">
                    <p>{project.type}</p>
                    <div className="title_container">
                        <h1>{project.title}</h1>
                        <p>{project.mode}</p>
                    </div>
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        style={{ maxWidth: "100%" }}
                    />
                    <a
                        className="deploy_btn"
                        href={project.links.deploy}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/img/detail_linkArrow_1.svg" alt="바로가기 화살표" />
                        웹사이트 바로가기
                    </a>
                </article>

                <hr className="detail_hr" />

                {/* 프로젝트 소개 */}
                <article className="article_info">
                    <DetailTitle text='프로젝트 소개' />
                    <p>{project.summary}</p>
                </article>

                 {/* 프로젝트 기간/인원 */}
                <article className="article_info row1">
                    <div>
                        <DetailTitle text="프로젝트 기간" />
                        <p>{project.duration}</p>
                    </div>
                    <div>
                        <DetailTitle text="참여 인원" />
                        <p>{`총 ${project.members}명`}</p>
                    </div>
                </article>

                {/* 담당 업무 */}
                <article className="article_info">
                    <DetailTitle text="담당 업무" />
                    <ul>
                        {project.role?.map((r, i) => (
                            <li key={i}>{r}</li>
                        ))}
                    </ul>
                </article>

                {/* 기술 스택 */}
                <article className="article_info row2">
                    <div>
                        <DetailTitle text="기술 스택" />
                        <div className="stack_list">
                            {project.techStack?.map((tech, i) => (
                                <span className="stack_box" key={i}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* 관련 링크 */}
                    <div>
                        <DetailTitle text="관련 링크" />
                        <div className="link_list">
                            {project.links?.github && (
                                <a className="link_box" href={project.links.github} target="_blank" rel="noreferrer">
                                    <img src="/img/detail_github_1.svg" alt="깃허브 아이콘 이미지" />
                                    GitHub
                                    </a>
                            )}
                            {project.links?.figma && (
                                <a className="link_box" href={project.links.figma} target="_blank" rel="noreferrer">
                                    <img src="/img/detail_figma_1.svg" alt="피그마 아이콘 이미지" />
                                    Figma
                                    </a>
                            )}
                        </div>
                    </div>
                </article>

                <hr className="detail_hr" />
                
                {/* 프로젝트 상세 */}
                <article className="article_info">
                    <DetailTitle text="프로젝트 상세" />
                    <p>{project.description}</p>
                </article>

                {/* 프로젝트 주요 기능 */}
                <article className="article_info">
                    <DetailTitle text="주요 기능" />
                    <div className="feature_list">
                        {project.features?.map((feature, i) => (
                            <article className="feature_item" key={i}>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </article>
                

                <TopBtn/>
            </section>
            <Footer />
        </main>
        
    );
}

export default DetailPage;

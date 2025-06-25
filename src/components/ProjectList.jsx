import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import BlackDot2 from './object/BlackDot2';

function ProjectList() {
    const [selectedMode, setSelectedMode] = useState('팀 프로젝트');
    const filteredProjects = projects.filter(project => project.mode === selectedMode);
    const navigate = useNavigate();
    
    return (
        <>

        {/* 필터 */}
        <div className="project_filter">
            <button
                className={selectedMode === '팀 프로젝트' ? 'active' : ''}
                onClick={() => setSelectedMode('팀 프로젝트')}
            >
                {selectedMode === '팀 프로젝트' && <BlackDot2 />}
                팀 프로젝트
            </button>
            <button
                className={selectedMode === '개인 프로젝트' ? 'active' : ''}
                onClick={() => setSelectedMode('개인 프로젝트')}
            >
                {selectedMode === '개인 프로젝트' && <BlackDot2 />}
                개인 프로젝트
            </button>
        </div>


        {/* 프로젝트 카드 */}
        <div className="project_list">
            {filteredProjects.map(project => (
            <div key={project.id} className="project_card"
                onClick={() => navigate(`/project/${project.id}`)}>
                <img src={project.thumbnail} alt={project.title} className="thumbnail" />
                <p className="type">{project.type}</p>
                <h3 className="title">{project.title}</h3>
            </div>
            ))}
        </div>
        
        </>
    );
}

export default ProjectList;

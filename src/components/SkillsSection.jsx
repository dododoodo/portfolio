import { skillData } from '../data/skillData';
import AccordionItem from './AccordionItem';

function SkillsSection() {
    return (
        <div className="skills_group">

            {skillData.categories.map((cat, idx) => (
                <AccordionItem key={idx} title={cat.title} defaultOpen={idx === 0}>
                    <ul className="skill_box">
                        {cat.items.map((item, subIdx) => (
                            <li key={subIdx}>
                                <img src={item.icon} alt={item.name} className="skill_icon" />
                                <b>{item.name}</b> {item.description}
                            </li>
                        ))}
                    </ul>
                </AccordionItem>
            ))}
        </div>
    );
}

export default SkillsSection;

import WhiteDot2 from "./object/WhiteDot2";

function CareerSection({ category, list}) {
    return (
        <div className="career_section">
            <h3 className="career_category">
                {category}
                <WhiteDot2 className='white_dot_2'/>
            </h3>
            <ul className="career_list">
                {list.map((item, idx) => (
                    <li key={idx}>
                        <p className="career_title">{item.title}</p>
                        <div className="career_info">
                            <span>{item.etc}</span>
                            <span>{item.date}</span>
                        </div>

                        {list.length > 1 && idx !== list.length - 1 && (
                            <hr className="career_divider" />
                        )}
                    </li>
                ))}
            </ul>

            <hr className="career_divider_bold" />
        </div>
    );
}


export default CareerSection;

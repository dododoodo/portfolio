import BlackDot2 from "./object/BlackDot2"

import '../styles/components.scss';

function TitleText2({text}) {
    return (
        <div className='title_text' 
            data-aos="fade-up"
            data-aos-duration="350"
        >
            <h2>{text}</h2>
            <BlackDot2/>
        </div>
    )
}

export default TitleText2
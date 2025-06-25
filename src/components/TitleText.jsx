import WhiteDot1 from "./object/WhiteDot1"

import '../styles/components.scss';

function TitleText({text}) {
    return (
        <div className='title_text' 
            data-aos="fade-up"
            data-aos-duration="350"
        >
            <h2>{text}</h2>
            <WhiteDot1/>
        </div>
    )
}

export default TitleText
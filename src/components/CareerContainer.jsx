import careerData from "../data/careerData";
import CareerSection from "./CareerSection";

function CareerContainer() {
    return (
        <div className="career_container">
            <hr className="career_divider_bold" />
            
            {careerData.map((section, idx) => (
                <CareerSection
                key={idx}
                category={section.category}
                list={section.list}
                showBorder={idx !== careerData.length - 1}
                />
            ))}
        </div>
    );
}

export default CareerContainer
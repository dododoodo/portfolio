import { useState } from 'react';
import { Collapse } from 'react-collapse';
import UpArrow from './object/UpArrow';
import DownArrow from './object/DownArrow';
import BlackDot2 from './object/BlackDot2';

function AccordionItem({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="accordion_container">
        <div className="open_btn" onClick={() => setIsOpen(!isOpen)}>
            <p>
                {title} 
                {isOpen && <BlackDot2 />}
            </p>
            {isOpen ? <UpArrow /> : <DownArrow />}
        </div>

        <Collapse isOpened={isOpen}
        springConfig={{ stiffness: 50, damping: 18 }}
        >
            <div className={`accordion_contents ${isOpen ? 'animate-items' : ''}`}>
                {children}
            </div>
        </Collapse>

        </div>
    );
}

export default AccordionItem;

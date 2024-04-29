import { Minus, Plus } from '@phosphor-icons/react';
import React, { useState } from 'react';

interface AccordionProps {
    desc: string;
    label: string;
}

const Accordion: React.FC<AccordionProps> = ({ desc, label }) => {
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(prev => !prev);
    };

    return (
        <li className="mb-8">
            <p onClick={toggle} className="flexBetween cursor-pointer">
                <span className="w-fit text-sm sm:text-xl font-semibold mb-3">{ label}</span>
                {isActive ? <Minus size={24} /> : <Plus size={24} />}
            </p>
            <p
                className={`text-sm sm:text-lg overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20' : 'max-h-0'}`}
            >
                {desc}
            </p>
        </li>
    );
};

export default Accordion;

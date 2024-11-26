import { useState } from 'react';

interface Props {
  title: string,
  children: React.ReactNode
}

const Accordion = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="accordion-item border-b border-[#FFFFFF80] pb-3">
      <button onClick={toggleAccordion} className="text-body-1 font-bold flex justify-between items-center w-full py-4">
        <span>{title}</span>
        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion
import { useState } from "react";
import ModeToggle from "../modeToggle";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const anchorStyle = `text-primary-color transition duration-300 ease-in-out cursor-pointer
    hover:text-secondary-color hover:border-b-2 hover:border-solid hover:border-secondary-color`;
  
  const barsStyle = `w-[25px] h-[3px] bg-primary-color transition duration-300 ease-in-out 
    mt-[3px] mb-[3px]`;

    const handleNavigationClick = (event : React.MouseEvent<HTMLAnchorElement>, offset: number) => {
      event.preventDefault();
      setIsMenuOpen(false);
      const targetId = event.currentTarget.getAttribute('href');
      const target = document.querySelector(targetId?.toString() || '');
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    };
  
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-bg-color flex flex-row  dark:shadow-dark-header
          justify-between items-center px-6 py-4 shadow-3x5 dark:bg-slate-900`}
    >
      <h1
        className='text-primary-color text-2xl font-bold'
      >
        Renan Saldanha
      </h1>
      <nav className="flex justify-between items-center bg-bg-color dark:bg-slate-900 w-fit">
        <button 
          className={`md:hidden flex-col cursor-pointer flex hover:shadow-3x5 border-2 rounded-md p-2 
            ${isMenuOpen ? 'border-secondary-color' : 'border-primary-color'} hover:border-secondary-color hover:shadow-skill-card`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <div className={barsStyle}></div>
            <div className={barsStyle}></div>
            <div className={barsStyle}></div>
        </button>
      <ul className={`md:flex md:flex-row md:relative md:top-0 md:border-0 
          md:right-0 md:p-0 md:shadow-none border-2 rounded-sm p-4 
          border-primary-color list-none ${isMenuOpen ? '' : 'hidden'} 
          flex-col absolute top-[64px] right-[1.75rem] md:w-full text-center 
          bg-bg-color dark:bg-slate-900 shadow-about`}>
        <li className="mr-[20px]">
          <a
          className={anchorStyle}
          href="#about"
          onClick={(event) => handleNavigationClick(event, 90)}
        >
          About
        </a>
        </li>
        <li className="mr-[20px]">
        <a
          className={anchorStyle}
          href="#skills"
          onClick={(event) => handleNavigationClick(event, 50)}
        >
          Skills
        </a>
        </li>
        <li className="mr-[20px]">
        <a
          className={anchorStyle}
          href="#career"
          onClick={(event) => handleNavigationClick(event, 50)}
        >
          Career
        </a>
        </li>
        <li className="mr-[20px]">
        <a
          className={anchorStyle}
          href="#projects"
          onClick={(event) => handleNavigationClick(event, 50)}
        >
          Projects
        </a>
        </li>
        <li className="mr-[20px]">
        <a
          className={anchorStyle}
          href="#contact"
          onClick={(event) => handleNavigationClick(event, 50)}
        >
          Contact
        </a>
        </li>
        <li className="mr-[20px]">
          <ModeToggle/>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default Header;
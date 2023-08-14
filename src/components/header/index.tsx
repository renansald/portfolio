const Header = () => {

  const anchorStyle = `text-primary-color transition duration-300 ease-in-out cursor-pointer
    hover:text-secondary-color hover:border-b-2 hover:border-solid hover:border-secondary-color`;

    const handleNavigationClick = (event : React.MouseEvent<HTMLAnchorElement>, offset: number) => {
      event.preventDefault();
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
      className={`fixed top-0 left-0 w-full z-50 bg-bg-color flex flex-row 
          justify-between items-center px-6 py-4 shadow-3x5`}
    >
      <h1
        className='text-primary-color text-2xl font-bold'
      >
        Renan Saldanha
      </h1>
      <div
        className='flex justify-between items-center gap-4'
      >
        <a
          className={anchorStyle}
          href="#about"
          onClick={(event) => handleNavigationClick(event, 80)}
        >
          About
        </a>
        <a
          className={anchorStyle}
          href="#skills"
          onClick={(event) => handleNavigationClick(event, 40)}
        >
          Skills
        </a>
        <a
          className={anchorStyle}
          href="#career"
          onClick={(event) => handleNavigationClick(event, 40)}
        >
          Career
        </a>
        <a
          className={anchorStyle}
          href="#projects"
          onClick={(event) => handleNavigationClick(event, 40)}
        >
          Projects
        </a>
        <a
          className={anchorStyle}
          href="#contact"
          onClick={(event) => handleNavigationClick(event, 40)}
        >
          Contact
        </a>
      </div>
    </div>
  )
}

export default Header;
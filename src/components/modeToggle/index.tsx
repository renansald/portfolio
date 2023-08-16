import { useEffect, useState } from 'react';
import DarkIcon from '../../../public/assets/darkIcon';
import LightIcon from '../../../public/assets/lightIcon';

type Props = {}

const ModeToggle = (props: Props) => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setMode('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      setMode('light');
      localStorage.theme = 'light'
    }
  },[])

  const setTheme = () => {
    if(mode === 'dark') {
      setMode('light')
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    else {
      setMode('dark')
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <button
      type='button'
      className={`focus:outline-none border-2 rounded-full border-primary-color p-1 
                hover:border-secondary-color hover:shadow-3x5 w-[25px] h-[25px] mt-1 md:mt-0`}
      onClick={() => setTheme()}
    >
      <DarkIcon 
        className={`w-[100%] h-[100%] ${mode === 'dark' ? 'hidden' : 'block'}`} 
      />
      <LightIcon className={`w-[100%] h-[100%] ${mode === 'light' ? 'hidden' : 'block'}`} />
    </button>
  )
}

export default ModeToggle
import Github from '../../../public/assets/github'
import Instagram from '../../../public/assets/instagram'
import LinkedIn from '../../../public/assets/linkedIn'

type Props = {}

const Social = (props: Props) => {
  return (
    <div 
      className='grid grid-cols-1 gap-4 fixed left-1 bottom-[50%]'
    >
      <a
        href='https://github.com/renansald'
        target='_blank'
      >
        <Github className='w-10 h-10'/>
      </a>
      <a
        href='https://linkedin.com/in/renan-saldanha'
        target='_blank'
      >
        <LinkedIn className='w-10 h-10'/>
      </a>
      <a
        href='https://www.instagram.com/renansald/'
        target='_blank'
      >
        <Instagram className='w-10 h-10'/>
      </a>
    </div>
  )
}

export default Social
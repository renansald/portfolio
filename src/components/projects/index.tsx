import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

const Projects = (props: Props) => {


  const anchorStyle = `text-primary-color transition duration-300 ease-in-out cursor-pointer
    hover:text-secondary-color hover:border-b-2 hover:border-solid hover:border-secondary-color`;
  
  const itemsStyle = `flex flex-col items-center justify-center w-full gap-10 hover:border-primary-color
                      rounded-md shadow-skill-card border-2 border-solid border-secondary-shadow p-3`;

  const descriptionStyle = `text-black text-justify`;

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
      <motion.div 
        className={itemsStyle}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0}
        }}
      >
        <Image
          src='/images/readar_viral.png'
          alt='radar_viral'
          width={500}
          height={500}
        />
        <p className={descriptionStyle}>
          This marks my inaugural project, a collaborative effort among friends and me to create a system 
          designed to aid individuals amidst the pandemic. Drawing inspiration from a notable Brazilian initiative 
          called &ldquo;Radar Viral&rdquo;, we embarked on this endeavor with a shared goal: to provide meaningful 
          assistance during these challenging times. Our system sought to emulate the success of 
          &ldquo;Radar Viral&rdquo;, a project known for its impact in Brazil.
        </p>
        <a 
          className={anchorStyle}
          href='https://github.com/gabriel-nepo/coronavirus-app'
          target='_blank'
        >
            Check it out!
        </a>
      </motion.div>
      <motion.div 
        className={itemsStyle}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0}
        }}
      >
        <Image
          src='/images/pokedex.png'
          alt='pokedex'
          width={500}
          height={500}
        />
        <p className={descriptionStyle}>
          Step into the enchanting world of our Pokedex project, where the realms 
          of technology and Pokemon intertwine to create an immersive experience. 
          Our vision was to provide users with a dynamic platform that allows 
          them to embark on a journey of discovery, exploring the vast universe 
          of Pokemon and delving into their intricate stats.
        </p>
        <a 
          className={anchorStyle}
          href='https://github.com/renansald/pokedex'
          target='_blank'
        >
          Check it out!
        </a>
      </motion.div>
      <motion.div 
        className={itemsStyle}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1, y: 0}
        }}  
      >
        <Image
          src='/images/gym.png'
          alt='gym'
          width={500}
          height={500}
        />
        <p className={descriptionStyle}>
          An interactive gym landing page where visitors can explore a world of 
          fitness services and seamlessly connect with the gym. 
          This endeavor was fueled by the desire to create an engaging 
          digital space that not only showcases the gym&apos;s 
          offerings but also facilitates direct communication with potential clients.
        </p>
        <a 
          className={anchorStyle}
          href='https://github.com/renansald/gym'
          target='_blank'
        >
          Check it out!
        </a>
      </motion.div>
      <motion.div 
        className={itemsStyle}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1,y: 0}
        }}
      >
        <Image
          src='/images/netflix_clone.png'
          alt='netflix-clone'
          width={500}
          height={500}
        />
        <p className={descriptionStyle}>
          This project revolves around simulating a login page reminiscent of 
          Netflix&apos;s user interface. However, there&apos;s an intriguing twist: 
          we&apos;ve seamlessly integrated Google&apos;s Single Sign-On (SSO) services 
          to streamline the authentication process.
        </p>
        <a 
          className={anchorStyle}
          href='https://github.com/renansald/netflix_clone'
          target='_blank'
        >
          Check it out!
        </a>
      </motion.div>
    </div>
  )
}

export default Projects
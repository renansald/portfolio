'use client';
import Career from '@/components/career';
import Footer from '@/components/footer';
import Form from '@/components/form';
import Header from '@/components/header';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Social from '@/components/social';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isStatic, setIsStatic] = useState(true);

  useEffect(() => {setIsStatic(true)}, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start pt-[7rem] px-6 bg-white">
        <Social />
        <section
          id="about"
          className="flex items-center justify-center px-12 md:px-16 gap-10 w-full mb-8 flex-col md:flex-row"
        >
          <Image
            src='/images/profile_image.jpeg'
            alt="Renan Saldanha"
            width={200}
            height={200}
            className="rounded-full"
          />
          <motion.div
            className="p-3 rounded-md shadow-about md:w-[40%]"
            initial="hidden"
              whileInView="visible"
              transition={{duration: 1}}
              viewport={{once: true, amount: "some"}}
              variants={{
                hidden: {opacity: 0, y:-50},
                visible: {opacity: 1, y:0}
              }}
          >
            <h2
              className="text-2xl font-bold mb-2 text-primary-color"
            >
              About
            </h2>
            <p
              className="text-black py-2 leading-7"
            >
              Greetings! 🚀 I&apos;m a tech explorer armed with a degree from the Federal University of Ouro Preto. 
              With 3 years of coding magic, I&apos;m here to craft web wonders and cloud solutions. 
              React, TypeScript, .NET C# – I&apos;m fluent in the languages of innovation!
            </p>
          </motion.div>
        </section>
            
        <section
          id="more-about"
          className="bg-bg-color px-12 md:px-16 py-4 w-full"
        >
            <h2
              className="text-2xl font-bold text-primary-color mb-2 text-center"
            >
              More About Me
            </h2>
            <motion.p
              className='text-black p-2 leading-7 text-justify'
              initial="hidden"
              whileInView="visible"
              transition={{duration: 1}}
              viewport={{once: true, amount: "some"}}
              variants={{
                hidden: {opacity: 0, x:-10},
                visible: {opacity: 1, x:0}
              }}
            >
              Greetings from the digital realm! 🚀 Armed with a degree from the Federal University of Ouro Preto, 
              I&apos;m a curious coder with 3 years of experience weaving tech tales. 
              Full-stack development, cloud solutions, and unraveling coding enigmas are my domains of exploration.
            </motion.p>
            <motion.p
              className='text-black p-2 leading-7 text-justify'
              initial="hidden"
              whileInView="visible"
              transition={{duration: 1}}
              viewport={{once: true, amount: "some"}}
              variants={{
                hidden: {opacity: 0, x:10},
                visible: {opacity: 1, x:0}
              }}
            >
              When I&apos;m not decrypting the binary riddles, you&apos;ll find me strolling along the beach, 
              humming in harmony with melodies, and conquering virtual and analog realms. 
              I&apos;m a coding explorer with a palate for diverse cuisines and an eye for innovative solutions.
            </motion.p>
            <motion.p
              className='text-black p-2 leading-7 text-justify'
              initial="hidden"
              whileInView="visible"
              transition={{duration: 1}}
              viewport={{once: true, amount: "some"}}
              variants={{
                hidden: {opacity: 0, x:-10},
                visible: {opacity: 1, x:0}
              }}
            >
              From React to TypeScript, I dance through languages like a tech tango enthusiast. Just like a cloud chaser, 
              I&apos;ve honed my skills in the art of Azure and AWS architecture.
            </motion.p>
            <motion.p
              className='text-black p-2 leading-7 text-justify'
              initial="hidden"
              whileInView="visible"
              transition={{duration: 1}}
              viewport={{once: true, amount: "some"}}
              variants={{
                hidden: {opacity: 0, x:10},
                visible: {opacity: 1, x:0}
              }}
            >
              My motto? &ldquo;Problem-solving is my playground!&rdquo; 
              I collaborate closely with clients and stakeholders, crafting solutions that align seamlessly with aspirations.
            </motion.p>
            <motion.p
              className='text-black p-2 leading-7 text-justify'
              initial="hidden"
              whileInView="visible"
              transition={{duration: 1}}
              viewport={{once: true, amount: "some"}}
              variants={{
                hidden: {opacity: 0, x:-10},
                visible: {opacity: 1, x:0}
              }}
            >
              So, whether it&apos;s lines of code or footprints in the sand, I&apos;m ready to embark on an adventure 
              of co-creation. If you&apos;re up for a chat that&apos;s a blend of innovation and camaraderie, 
              let&apos;s connect and embark on this coding journey together! 🌟🌊🎶
            </motion.p>
          </section>
          <section
            id="skills"
            className='bg-bg-color w-full py-6 px-12 md:px-16'
          >
            <h2
              className="text-2xl font-bold text-primary-color mb-2 text-center"
            >
              Technologies
            </h2>
            <Skills />
          </section>
          <section
            id="career"
            className='bg-bg-color w-full py-6 px-12 md:px-16'
          >
            <h2
              className="text-2xl font-bold text-primary-color mb-2 text-center"
            >
              Career
            </h2>
            <Career />
          </section>
          <section
            id="projects"
            className='bg-bg-color w-full py-6 px-12 md:px-16'
          >
            <h2
              className="text-2xl font-bold text-primary-color mb-6 text-center"
            >
              Projects
            </h2>
            <Projects />
          </section>
          <section
            id="contact"
            className='bg-bg-color w-full pt-6 px-12 md:px-16'
          >
            <h2
              className="text-2xl font-bold text-primary-color mb-6 text-center"
            >
              Get in Touch With Me
            </h2>
            <Form />
          </section>
      </main>
      <Footer/>
    </>
  )
}

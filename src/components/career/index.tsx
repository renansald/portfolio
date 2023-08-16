import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const Career = (props: Props) => {
  return (
    <div 
      className='bg-bg-color text-black dark:text-white text-justify dark:bg-slate-900'
    >
      <div 
        className='flex flex-col justify-center items-center mt-2'
      >
        <div className='flex flex-row justify-start items-center gap-4 w-full mb-2'>
        <Image
          src='/images/dti_logo.png'
          alt='DTI Sistemas'
          height={50}
          width={50}
        />
        <h3
          className='text-xl font-bold dark:text-white'
        >
          DTI Sistemas
        </h3>
        </div>
        <p>
          DTI Sistemas is a Brazilian company that provides technology solutions and services. 
          They are known for offering software products and systems to various industries, 
          including financial institutions, government agencies, and other sectors. 
          DTI Sistemas specializes in areas such as digital transformation, document management, 
          financial solutions, and more.
        </p>
        <p className='mt-4'>
          I launched my career at DTI, spending three years collaborating with three diverse companies in 
          industrial and financial sectors. This experience refined my skills, including team management, 
          and provided insights into various industries. From optimizing processes to financial systems, 
          I led projects that showcased adaptability and innovation. 
          DTI&apos;s foundation has set me up for continued impactful contributions to the tech world.
        </p>
        <h3 className='color-black font-semibold mt-4 mb-4'>
          Clients and Projects
        </h3>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 w-full'>
          <motion.div 
            className='gap-8 flex flex-col justify-start items-center border-2 border-primary-shadow p-2 rounded-sm'
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1}}
            viewport={{once: true, amount: "some"}}
            variants={{
              hidden: {opacity: 0, y:-50},
              visible: {opacity: 1, y:0}
            }}
          >
              <h4 className='text-lg font-semibold'>
                Stellantis
              </h4>
              <Image
                src="/images/stellantis_logo.png"
                alt='stellantis-logo'
                height={100}
                width={100}  
              />
              <p className='italic text-justify'>
              Stellantis N.V. is a multinational automotive corporation formed from 
              the merger of Fiat Chrysler Automobiles (FCA) and Groupe PSA. The merger was completed in January 2021,
              creating one of the largest automotive groups in the world.
              </p>
              <h5 className='font-semibold'>Project</h5>
              <p>
                In this project, our task was to create a solution for managing incentives provided by the factory to 
                clients across Latin America. Our work involved integrating with other applications and utilizing AWS 
                solutions such as Lambda, S3 buckets, and EC2 instances. Our tech stack centered on Java with Spring 
                Boot for the API, using JUnit for testing, and Node.js for our Lambda functions. Our infrastructure 
                was built using Terraform, while GitLab served as our pipeline and repository.
              </p>
              <p>
                The frontend was developed using React.js, and we ensured the system was accessible in both Portuguese
                (BR) and Spanish, as it catered to various countries in Latin America. This project also marked the 
                inception of the Stellantis designer system, further expanding our contributions.
              </p>
              <p>
                By seamlessly weaving technology and teamwork, we crafted a solution that resonated across borders 
                and played a pivotal role in our client&apos;s operations.
              </p>
          </motion.div>
          <motion.div 
            className={`gap-8 flex flex-col justify-start items-center border-2 
              border-primary-shadow p-2 rounded-sm`}
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1}}
            viewport={{once: true, amount: "some"}}
            variants={{
              hidden: {opacity: 0, y:50},
              visible: {opacity: 1, y:0}
            }}  
          >
              <h4 className='text-lg font-semibold'>
                Fidis Bank
              </h4>
              <Image
                src="/images/fidis_logo2.png"
                alt='fidis-logo'
                height={0}
                width={100}  
              />
              <p className='italic'>
                Fidis is a financial institution based in Brazil that specializes in providing 
                financial and credit solutions, particularly in the area of vehicle financing. 
                They offer a range of financing options for purchasing vehicles, including cars, 
                motorcycles, and other types of vehicles.
              </p>
              <h5 className='font-semibold'>Project</h5>
              <p>
                In this project, our mission was to create an all-encompassing online banking system that allowed 
                clients to seamlessly order vehicles, explore offers, manage payments, and oversee their balances. 
                Essentially, it was an online bank tailored to the automotive realm.
              </p>
              <p>
                Our tech stack was built upon .NET Core C# for the backend. We orchestrated numerous integrations 
                with AWS services, including AWS Batch, Lambda, and SES, to ensure the system&apos;s efficiency 
                and communication. On the frontend, we employed React, bolstered by Cypress for testing. 
                Meanwhile, our backend underwent rigorous xUnit testing.
              </p>
              <p>
                My role in this venture encompassed a wide spectrum. I took charge of crafting comprehensive reports 
                and intuitive dashboards, enabling clients to gain clearer insights into crucial metrics. 
                Stepping into the role of a tech lead, I orchestrated the coordination of various facets, 
                and this project marked my first experience as a team manager.
              </p>
              <p>
                Through meticulous planning, coding prowess, and leadership, we brought to life a robust online 
                banking solution that seamlessly merged the world of finance and automotive.
              </p>
          </motion.div>
          <motion.div 
            className='gap-8 flex flex-col justify-start items-center border-2 border-primary-shadow p-2 rounded-sm'
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1}}
            viewport={{once: true, amount: "some"}}
            variants={{
              hidden: {opacity: 0, y:-50},
              visible: {opacity: 1, y:0}
            }}
          >
              <h4 className='text-lg font-semibold'>
                RHI Magnesita
              </h4>
              <Image
                src="/images/rhi_logo2.png"
                alt='rhi-logo'
                height={0}
                width={100}  
              />
              <p className='italic'>
                RHI Magnesita is a leading global provider of refractory solutions and services. The company 
                specializes in manufacturing refractory materials, which are heat-resistant materials used in 
                various industries, including steel, cement, glass, and non-ferrous metals. Refractory materials 
                play a crucial role in high-temperature industrial processes, providing insulation and protection 
                to equipment and structures.
              </p>
              <h5 className='font-semibold'>Project</h5>
              <p>
                In this project, our mission was to develop an internal project management solution tailored to
                the unique needs of RHI Magnesita. The challenge lay in accommodating diverse methodologies while 
                maintaining strict adherence to individual deadlines. Our role was to create a streamlined platform 
                capable of orchestrating projects with precision.
              </p>
              <p>
                Azure emerged as our trusted ally, with services like Azure Blob Storage, web services, Azure DevOps, 
                and Azure Functions empowering our project. A particularly notable feat was tackling legacy systems 
                built on Razor Pages—technology unfamiliar to our team. Nevertheless, we rose to the occasion, 
                learning and adapting to ensure its smooth operation.
              </p>
              <p>
                For new projects, we harnessed a host of contemporary technologies. C# and .NET Core took the lead, 
                complemented by the likes of Node and React. An intriguing twist came when we delved into low-code 
                solutions — a realm previously unexplored by our team. Navigating through limited documentation 
                and a steep learning curve, we successfully forged a path forward.
              </p>
              <p>
                Ultimately, this project underscored our adaptability, resilience, and capacity to leverage cutting-edge
                tools, even when confronted with unfamiliar terrain. By rising to these challenges, we transformed 
                complex requirements into a functional and impactful solution for RHI Magnesita&apos;s internal 
                project management needs.
              </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Career
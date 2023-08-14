import { motion } from 'framer-motion';
import AwsIcon from '../../../public/assets/awsIcon';
import AzureIcon from '../../../public/assets/azureIcon';
import CSharpIcon from '../../../public/assets/csharpIcon';
import CssIcon from '../../../public/assets/cssIcon';
import DockerIcon from '../../../public/assets/dockerIcon';
import DotNetIcon from '../../../public/assets/dotnetIcon';
import GitIcon from '../../../public/assets/gitIcon';
import JavaIcon from '../../../public/assets/javaIcon';
import JavascriptIcon from '../../../public/assets/javascriptIcon';
import MongoIcon from '../../../public/assets/mongoIcon';
import MysqlIcon from '../../../public/assets/mysqlIcon';
import ReactIcon from '../../../public/assets/reactIcon';
import SpringBootIcon from '../../../public/assets/srpingBootIcon';
import TailwindIcon from '../../../public/assets/tailwindIcon';
import TerraformIcon from '../../../public/assets/terraformIcon';
import TypescriptIcon from '../../../public/assets/typescriptIcon';

type Props = {}

const Skills = (props: Props) => {
  const classIcon = "lg:w-[20%] sm:w-[100%]"
  const classSection = "bg-bg-color flex flex-col justify-center items-center gap-1 p-2 w-full"
  const classIconCard = `flex flex-wrap justify-center items-center gap-4 
  bg-white rounded-md p-8 m-4 shadow-skill-card hover:shadow-about`

  return (
    <div
      className='grid lg:grid-cols-2 gap-1 w-full sm:grid-cols-1'
    >
      <motion.div
        className={classSection}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, x:-10, y: -50},
          visible: {opacity: 1, x:0, y: 0}
        }}
      >
        <h2 className='text-black font-bold'>
          Back End
        </h2>
        <div 
          className={classIconCard}
        >
          <CSharpIcon 
            className={classIcon}
          />
          <DotNetIcon 
            className={classIcon}
          />
          <JavaIcon 
            className={classIcon}
          />
          <SpringBootIcon 
            className={classIcon}
          />
          <MysqlIcon 
            className={classIcon}
          />
          <MongoIcon 
            className={classIcon}
          />
        </div>
      </motion.div>
      <motion.div
        className={classSection}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, x:10, y: -50},
          visible: {opacity: 1, x:0, y: 0}
        }}
      >
        <h2 className='text-black font-bold'>
          Front End
        </h2>
        <div 
          className={classIconCard}
        >
          <JavascriptIcon 
            className={classIcon}
          />
          <TypescriptIcon
            className={classIcon}
          />
          <ReactIcon
            className={classIcon}
          />
          <CssIcon 
            className={classIcon}
          />
          <TailwindIcon 
            className={classIcon}
          />
        </div>
      </motion.div>
      <motion.div
        className={classSection}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, x:-10, y: 50},
          visible: {opacity: 1, x:0, y: 0}
        }}
      >
        <h2 className='text-black font-bold'>
          DevOps
        </h2>
        <div 
          className={classIconCard}
        >
          <TerraformIcon 
            className={classIcon}
          />
          <DockerIcon
            className={classIcon}
          />
          <GitIcon
            className={classIcon}
          />
        </div>
      </motion.div>
      <motion.div
        className={classSection}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1}}
        viewport={{once: true, amount: "some"}}
        variants={{
          hidden: {opacity: 0, x:10, y: 50},
          visible: {opacity: 1, x:0, y: 0}
        }}
      >
        <h2 className='text-black font-bold'>
          Cloud Providers
        </h2>
        <div 
          className={classIconCard}
        >
          <AwsIcon
            className={classIcon}
          />
          <AzureIcon
            className={classIcon}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
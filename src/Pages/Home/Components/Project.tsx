import {FiExternalLink, FiGithub,} from 'react-icons/fi'
import NumberedHeading from "./NumberedHeading.tsx";
import cashflow from "../../../assets/Cashflow.png"
import gestureLock from "../../../assets/GestureLock.png"
import resumeBuilder from "../../../assets/ResumeBuilder.png"
import { motion } from 'framer-motion';


const Projects = ({fonts}: {
    fonts: { accent: string; primaryHeading: string; secondaryHeading: string; base: string }
}) => {
    const projects = [
        {
            image: cashflow,
            title: 'CashFlow',
            id: 'cash',
            description:
                'CashFlow. A webapp simulating virtual money transfers online, along with User authentication, utilises sessions to ensure Atomicity and Isolation in Transactions. Follows \'Fixed-point\' representation to eliminate decimal errors in DBs.',
            techStack: ['ReactJS', 'NodeJS', 'Express','MongoDB','tailwindcss'],
            link: 'https://cash-flow-rahul.vercel.app/',
            github: "https://github.com/RahulKrishna-A/CashFlow"
        },
        {
            image: gestureLock,
            id: 'gesture',
            title: "Gesture Based Digit Detection",
            description: 'Developed GestureLock , employing Google\'s MediaPipe library for precise hand gesture recognition, with a specific emphasis on recognizing digits 1 to 5. The application introduces gesture-based authentication and CAPTCHA using hand landmarks.',
            techStack: ['Javascript', 'MediaPipe', 'HTML','CSS'],
            link: 'https://rahulkrishna-a.github.io/GestureAIlock-MachineLearning_Powered_Hand_Gesture_Password_Detection/',
            github: "https://github.com/RahulKrishna-A/GestureAIlock-MachineLearning_Powered_Hand_Gesture_Password_Detection"
        },
        {
            image: resumeBuilder,
            id: 'resumeb',
            title: "Resume Builder",
            description:"A web App for Resume Generation using ReactJS and CSS to facilitate the seamless creation of professional resume. Implemented a user-friendly interface that allows users to effortlessly download resumes in PDF format.",
            techStack: ['ReactJs', 'CSS'],
            link: 'https://resume-builder-rahul.netlify.app/',
            github:"https://github.com/RahulKrishna-A/ResumeBuilder"
        },


    ]
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{ease: 'easeOut', duration: 1, delay: 0.75}}
            className={`flex flex-col gap-6 ${fonts.base} group flex flex-col min-h-screen justify-center pt-10`}>
            <NumberedHeading number='.03' title="Things I've Built"/>

            {/* mobile screens */}
            <div className='flex md:hidden flex-col gap-24'>
                {projects.map((project, i) => (
                    <div key={i} id={project.id} className='flex flex-col text-white'>
                        <div className={`py-4`}>
                            <div className={`flex flex-col gap-4 h-[80%] w-full`}>
                                <div className={`flex flex-col gap-1`}>
                                    <div className={fonts.accent}>Featured Project</div>
                                    <div className={`${fonts.primaryHeading} text-xl`}>
                                        {project.title}
                                    </div>
                                </div>
                                <div className={`relative aspect-video z-3 rounded-xl `}>
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            src={project.image}
                                            alt='image'
                                            className='rounded-lg'

                                        />
                                    </a>
                                </div>
                                <div
                                    className={`${fonts.base} w-full z-20 bg-[#011f38] p-6 aspect-4/5 text-sm sm:text-[16px] rounded-md shadow-md shadow-black/70 leading-relaxed tracking-[.01rem]`}
                                >
                                    {project.description}
                                </div>
                                <ul className='flex flex-row gap-5 font-mono text-gray-400 text-xs flex-wrap sm:text-sm z-4'>
                                    {project.techStack.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <div className='flex flex-row gap-6'>
                                    {project.github ? (
                                        <a
                                            className='text-gray-200 '
                                            aria-label='GitHub'
                                            title='GitHub'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={project.github}
                                        >
                                            <FiGithub className='h-[20px] w-[20px]'/>
                                        </a>
                                    ) : null}
                                    {project.link ? (
                                        <a
                                            className='text-gray-200 '
                                            aria-label='External Link'
                                            title='External Link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={project.link}
                                        >
                                            <FiExternalLink className='h-[20px] w-[20px]'/>
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* desktop screens */}
            <div className='hidden md:flex flex-col gap-24'>
                {projects.map((project, i) => (
                    <div
                        key={project.title}
                        id={project.id}
                        className='flex flex-col lg:grid lg:grid-cols-10 text-white'
                    >
                        {i % 2 !== 0 ? (
                            <div className={`relative col-span-6 aspect-video z-10 rounded-xl`}>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src={project.image}
                                        alt='image'
                                        className='hover:translate-x-2 hover:translate-y-2 transition ease-in-out rounded-lg z-20 relative shadow-md  shadow-[]' // Added hover shadow effect
                                    />
                                </a>
                            </div>
                        ) : null}
                        <div
                            className={`py-4 col-span-4 ${i % 2 !== 0 ? 'items-end' : 'items-start'}`}
                        >
                            <div
                                className={`flex flex-col gap-4 ${i % 2 !== 0 ? 'items-end' : 'items-start'} h-[80%] w-full`}
                            >
                                <div className={`flex flex-col gap-1 ${i % 2 !== 0 ? 'items-end' : 'items-start'}`}>
                                    <div className={fonts.accent}>Featured Project</div>
                                    <div className={`${fonts.primaryHeading}  text-lg sm:text-2xl`}>
                                        {project.title}
                                    </div>
                                </div>
                                <div
                                    className={`${fonts.base} w-full lg:w-[110%] ${i % 2 !== 0 ? 'text-right' : 'text-left'} z-20 bg-[#011f38] p-6 aspect-4/5 rounded-md shadow-md shadow-black/70 leading-relaxed tracking-[.01rem] text-sm sm:text-[16px]`}
                                >
                                    {project.description}
                                </div>
                                <ul className='flex flex-row gap-5 font-mono text-gray-400 text-sm z-4'>
                                    {project.techStack.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <div className='flex flex-row gap-6'>
                                    {project.github ? (
                                        <a
                                            className='text-gray-200 hover:text-[#05BFDB] cursor-none'
                                            aria-label='GitHub'
                                            title='GitHub'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={project.github}
                                        >
                                            <FiGithub className='h-[20px] w-[20px]'/>
                                        </a>
                                    ) : null}
                                    {project.link ? (
                                        <a
                                            className='text-gray-200 hover:text-[#05BFDB] cursor-none'
                                            aria-label='External Link'
                                            title='External Link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={project.link}
                                        >
                                            <FiExternalLink className='h-[20px] w-[20px]'/>
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        {i % 2 === 0 ? ( // Ensure only one image is rendered in the odd index
                            <div className={`relative col-span-6 aspect-video z-10 rounded-xl`}>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                   <img
                                        src={project.image}
                                        alt='image'
                                        className='hover:translate-x-2 hover:translate-y-2 transition ease-in-out rounded-lg z-20 relative shadow-md  shadow-[]' // Added hover shadow effect
                                    />
                                </a>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Projects
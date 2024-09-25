import {motion} from "framer-motion"
import {FiGithub, FiLinkedin, FiMessageSquare, FiTwitter,} from 'react-icons/fi'

const SocialsSidebar = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{ease: 'easeOut', duration: 0.3, delay: 2.2}}
            className='invisible lg:visible z-50 fixed bottom-0 left-[40px] w-[40px] '
        >
            <ul className='w-full h-full  flex flex-col gap-4 items-center justify-center after:content-[""] after:block after:w-[1px] after:h-[90px] after:bg-gray-200/80'>
                <a
                    className='group '
                    title='GitHub'
                    aria-label='GitHub'
                    href='https://www.github.com/'
                >
                    <li className='text-gray-200 group-hover:text-[#05BFDB] hover:-translate-y-1 transition-transform  p-2'>
                        <FiGithub className='h-[20px] w-[20px]'/>
                    </li>
                </a>

                <a
                    className='group '
                    title='Twitter'
                    aria-label='Twitter'
                    href='https://twitter.com/'
                >
                    {' '}
                    <li className='text-gray-200 group-hover:text-[#05BFDB]  hover:-translate-y-1 transition-transform  p-2'>
                        <FiTwitter className='h-[20px] w-[20px]'/>
                    </li>
                </a>

                <a
                    className='group '
                    title='LinkedIn'
                    aria-label='LinkedIn'
                    href='https://www.linkedin.com/in//'
                >
                    <li className='text-gray-200 group-hover:text-[#05BFDB] hover:-translate-y-1 transition-transform  p-2'>
                        <FiLinkedin className='h-[20px] w-[20px]'/>
                    </li>
                </a>

                <a
                    className='group '
                    aria-label='Email'
                    title='Email'
                    href='mailto:rahulkrish321123@gmail.com?&subject=Hey Rahul&body=Want to talk about something!'
                >
                    <li className='text-gray-200 group-hover:text-[#05BFDB] hover:-translate-y-1 transition-transform  mb-[1rem] p-2'>
                        <FiMessageSquare className='h-[20px] w-[20px]'/>
                    </li>
                </a>
            </ul>
        </motion.div>
    )
}

export default SocialsSidebar
import { motion } from "framer-motion"

const EmailSidebar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.3, delay: 2.2 }}
            className='invisible lg:visible z-50 block fixed bottom-0 right-[40px] w-[40px] cursor-none'
        >
            <a
                aria-label='Email'
                title='Email'
                href='mailto:rahulkrish321123@gmail.com?&subject=Hey Rahul&body=Want to talk abot something Interesting!'
                className='group relative cursor-none h-full w-full flex flex-col justify-start items-center after:content-[""] after:block after:w-[1px] after:h-[90px] after:bg-gray-200/80'
            >
                <div
                    style={{ writingMode: 'vertical-lr' }}
                    className='pb-[25px] tracking-widest text-gray-400 text-sm group-hover:text-[#05BFDB] cursor-none font-mono group-hover:-translate-y-1 transition-transform'
                >
                    rahulkrish321123@gmail.com
                </div>
            </a>
        </motion.div>
    )
}

export default EmailSidebar
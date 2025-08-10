import {motion} from "framer-motion"

const NumberedHeading = ({number, title}: { number: string, title: string }) => {
    return (
        <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{ease: 'easeOut', duration: 0.5, delay: 0.25}}
            style={{
                fontSize: 'clamp(20px, 3.5vw, 24px)',
            }}
            className='flex flex-row flex-nowrap whitespace-nowrap gap-2 items-center pb-6 tracking-tight'
        >
            <div className={`text-[#05BFDB] text-base font-mono`}>{number}</div>
            <div className={`text-gray-400 font-bold font-sans`}>{title}</div>
            <div
                className={`w-[50%] justify-center items-center h-[1px] bg-[#05BFDB]/10`}
            ></div>
        </motion.div>
    )
}

export default NumberedHeading
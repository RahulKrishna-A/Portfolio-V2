import {motion} from "framer-motion"
import Button from "../../Layout/Components/Button.tsx";

const Hero = ({fonts}: {
    fonts: { accent: string; primaryHeading: string; secondaryHeading: string; base: string }
}) => {
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                delay: 0.7,
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        hidden: {opacity: 0, y: -10},
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.4,
            },
        },
    }

    return (
        <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='flex flex-col gap-6 items-start min-h-[600px] h-screen justify-center'
        >
            <motion.p variants={item} className={fonts.accent}>
                Hi, my name is
            </motion.p>
            <div
                style={{
                    fontSize: 'clamp(40px, 9vw, 64px)',
                }}
            >
                <motion.h1 variants={item} className={fonts.primaryHeading}>
                    Rahul Krishna
                </motion.h1>
                <motion.h1 variants={item} className={fonts.secondaryHeading}>
                    I build cool Softwares.
                </motion.h1>
            </div>
            <motion.p variants={item} className={`md:max-w-[55%] ${fonts.base} pb-4`}>
                More formally, I&apos;m a <span className={"font-bold"}>Full Stack Developer</span> specializing in building engaging, and accessible web experiences. Currently, I&apos;m focused on building  tech solutions for fast-growing startups.
            </motion.p>
            <motion.div
                variants={item}
                className='relative text-[#05BFDB] text-sm font-mono'
            >
                <Button to={'#about'}>Learn More!</Button>
                <div className='absolute z-10 rounded-md whitespace-nowrap bg-[#05BFDB] px-8 py-3 top-0 left-0'>
                    Learn More!
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Hero
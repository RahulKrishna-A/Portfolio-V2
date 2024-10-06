
// import { Link } from 'react-scroll'
// import { useOnInView } from '/utils/useOnInView'
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(faClose)

const MobileNav = ({navItems, handleMobileMenu}: {
    navItems: Array<{
        name: string;
        link: string;
        key: string;
    }>, handleMobileMenu: ()=>void
}) => {
    // animation refs & controls
    // const { ref: navRef, controls: navControls } = useOnInView()

    const textStyle =

        'font-mono font-normal font-extrabold text-[20px] no-underline hover:no-underline'

    return (
        <motion.nav
            // ref={navRef}
            className='z-front   fixed bg-[#0B192E] top-10 left-0 w-full flex h-full items-center justify-center  p-8 font-futuraCond text-2xl font-extrabold uppercase italic tracking-wider text-wolvesFrost'
            initial='hidden'
        >
            <button
                className='absolute top-0 right-2 p-2 text-wolvesFrost'
                onClick={handleMobileMenu}
            >
                <FontAwesomeIcon icon={faClose} className='w-5'/>
            </button>
            <ul className='show mx-auto my-auto flex max-w-6xl flex-col items-center justify-around sm:hidden'>
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={`${textStyle} cursor-pointer py-[12px] uppercase text-wolvesFrost`}
                    >
                        <a href={`#${item.link}`} onClick={handleMobileMenu}>
                            {item.name}
                        </a>
                    </li>
                ))}

            </ul>
        </motion.nav>
    )
}

export default MobileNav

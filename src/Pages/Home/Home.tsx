import {useContext, useEffect} from 'react'; // Add this import
import EmailSidebar from "./Components/EmailsSideBae.tsx";
import SocialsSidebar from "./Components/SocialsBar.tsx";
import Hero from "./Components/Hero.tsx";
import About from "./Components/About.tsx";
import Contact from "./Components/Contact.tsx";
import {ActiveContext} from "../Layout/Layout"
import Work from "./Components/Work.tsx";
import Projects from "./Components/Project.tsx";


export default function Home() {
    const {setActive} = useContext(ActiveContext);


    useEffect(() => {
        const sections = document.querySelectorAll('.sectionObserve');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, {threshold: 0.5}); // Adjust threshold as needed

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const fonts = {
        accent: 'text-[#05BFDB] text-sm font-mono',
        primaryHeading:
            'whitespace-nowrap text-gray-200 font-bold leading-tight font-sans',
        secondaryHeading: 'text-gray-400 font-bold leading-tight font-sans',
        base: 'text-gray-400 text-base font-sans',
    }

    return <div className='min-h-screen flex bg-[#0B192E] bg-grid-small-[#efefef]/5'>
        <SocialsSidebar/>
        <EmailSidebar/>
        <main className=' h-max w-screen flex flex-col  relative'>
            <section
                id='home'

                className='sectionObserve mt-[1px] min-h-[800px] h-[100vh] w-full px-[2rem] sm:px-[5%] lg:px-[15%]'
            >
                <Hero fonts={fonts}/>
            </section>
            <section
                id='about'

                className='sectionObserve mt-[3px] min-h-[800px] h-full w-full px-[2rem] sm:px-[5%] lg:px-[15%]'
            >
                <About fonts={fonts}/>
            </section>
            <section
                id='experience'

                className='sectionObserve mt-[1px] min-h-[800px] sm:h-full w-full bg-[#0B192E] px-[2rem] sm:px-[5%] lg:px-[15%]'
            >
                <Work fonts={fonts}/>

            </section>
            <section
                id='work'

                className='sectionObserve mt-[1px] min-h-[800px] sm:h-full w-full bg-[#0B192E] px-[2rem] sm:px-[5%] lg:px-[15%]'
            >
                <Projects fonts={fonts}/>

            </section>

            <section
                id='contact'

                className='sectionObserve mt-[1px] min-h-[800px] h-[101vh] w-full bg-[#0B192E] bg-grid-small-[#efefef]/5 px-[2rem] sm:px-[5%] lg:px-[15%]'
            >
                <Contact fonts={fonts}/>
            </section>
            <section className='absolute bottom-2 w-full flex flex-col gap-1 font-mono text-gray-200 text-center'>
                <p className='text-[.5rem]'>Built with &#128153; by Brad Tramel</p>
                <p className='text-[.5rem]'>
                    Design inspired by
                    <a
                        href='https://brittanychiang.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Brittany Chiang
                    </a>
                </p>
            </section>
        </main>
    </div>
}

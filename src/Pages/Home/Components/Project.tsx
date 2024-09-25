import {FiExternalLink, FiGithub,} from 'react-icons/fi'
import NumberedHeading from "./NumberedHeading.tsx";


const Projects = ({fonts}: {
    fonts: { accent: string; primaryHeading: string; secondaryHeading: string; base: string }
}) => {
    const projects = [
        {
            image: single,
            title: 'Single Game Tickets LP',
            id: 'sgt',
            description:
                'I redesigned and rebuilt our Single Game Tickets landing page, the primary point of sales for Timberwolves tickets. The overhauled site, with its clean interface and robust features, facilitated an impressive 66% year-over-year increase in ticket sales.',
            techStack: ['NextJS', 'Tailwind', 'APIs'],
            link: 'https://www.nba.com/timberwolves/single',
        },
        {
            image: city,
            id: 'city',
            title: "'23 City Edition LP",
            description:
                'This landing page was the web component of a Hashtag Sports Award-nominated marketing campaign. Using animated SVGs and subtle gradients, it celebrates a uniform inspired by the summertime fun that can only be found in the Land of 10,000 Lakes.',
            techStack: ['NextJS', 'Tailwind', 'Framer Motion'],
            link: 'https://www.nba.com/timberwolves/lakelife',
        },
        {
            image: classic,
            id: 'classic',
            title: "'23 Classic Edition LP",
            description:
                "Featuring a trailing mouse cursor and clever pop-ups, this landing page puts a modern twist on 90's web design to unveil the Timberwolves' 35th Anniversary Classic Edition Uniforms.",
            techStack: ['NextJS', 'Tailwind', 'Framer Motion'],
            link: 'https://www.nba.com/timberwolves/classic',
        },
        {
            image: behere,
            id: 'behere',
            title: 'Be Here',
            description:
                'I designed and built a fan-focused social media experience in our app. It integrates posts from Instagram and Twitter to help folks understand the excitement of being at Target Center for a game.',
            techStack: ['NextJS', 'Figma', 'Tailwind', 'Framer Motion'],
            link: 'https://www.nba.com/timberwolves/app/behere',
        },
        {
            image: howler,
            id: 'howler',
            title: 'Howler',
            description:
                'Sometimes folks just want to have fun. Inspired by the real-life, fan-favorite Howler giveaway item, I created a virtual Howler for fans who missed the giveaway to use in their Timberwolves app.',
            techStack: ['NextJS', 'Tailwind', 'Framer Motion'],
            link: 'https://www.nba.com/timberwolves/app/howl',
        },
        {
            image: playoffs,
            id: 'playoffs',
            title: 'Playoffs Hub',
            description:
                "I built a flexible, dynamic page that served as the public's one-stop shop for tickets, content, and scores during the Timberwolves' playoff run to the Western Conference Championship.",
            techStack: ['NextJS', 'Tailwind', 'APIs'],
            link: 'https://www.nba.com/timberwolves/playoffs',
        },
        {
            image: jaden,
            id: 'badnight',
            title: 'All-Defense Campaign',
            description:
                "Minnesota Timberwolves forward Jaden McDaniels loves making the NBA's best players have a 'bad night.' This microsite, built to encourage his inclusion on the All-Defensive team, takes that quote and runs with it.",
            techStack: ['NextJS', 'Tailwind', 'Framer Motion'],
            link: 'https://www.nba.com/timberwolves/badnight',
        },
        {
            image: community,
            id: 'community',
            title: 'Community Hub',
            description:
                'I redesigned and rebuilt the web presence for the Timberwolves and Lynx Community Impact team. The new look and feel prioritizes organization and imagery, capturing the human connections and joy this team brings to the Twin Cities community.',
            techStack: ['NextJS', 'Figma', 'Tailwind', 'Framer Motion'],
            link: 'https://www.nba.com/timberwolves/community',
        },

    ]
    return (
        <div className='flex flex-col min-h-screen justify-center py-40'>
            <NumberedHeading number='.03' title="Things I've Built"/>

            {/* mobile screens */}
            <div className='flex md:hidden flex-col gap-24'>
                {projects.map((project, i) => (
                    <div key={i} id={project.id} className='flex flex-col text-white'>
                        <div className={`py-4`}>
                            <div className={`flex flex-col gap-4 h-[80%] w-full`}>
                                <div className={`flex flex-col gap-1`}>
                                    <div className={fonts.accent}>Featured Project</div>
                                    <div className={`${fonts.primaryHeading} text-2xl`}>
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
                                    className={`${fonts.base} w-full z-20 bg-[#011f38] p-6 aspect-4/5 rounded-md shadow-md shadow-black/70 leading-relaxed tracking-[.01rem]`}
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
                            <div
                                className={`relative col-span-6 aspect-video z-3 rounded-xl `}
                            >
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src={project.image}
                                        alt='image'
                                        className='hover:translate-x-2 hover:translate-y-2 transition ease-in-out rounded-lg'
                                        fill
                                    />
                                </a>
                                <div className='bg-[#05BFDB] h-full w-full rounded-xl'/>
                            </div>
                        ) : null}
                        <div
                            className={`py-4 col-span-4 ${
                                i % 2 !== 0 ? 'items-end' : 'items-start'
                            }`}
                        >
                            <div
                                className={`flex flex-col gap-4 ${
                                    i % 2 !== 0 ? 'items-end' : 'items-start'
                                } h-[80%] w-full`}
                            >
                                <div
                                    className={`flex flex-col gap-1 ${
                                        i % 2 !== 0 ? 'items-end' : 'items-start'
                                    }`}
                                >
                                    <div className={fonts.accent}>Featured Project</div>
                                    <div className={`${fonts.primaryHeading} text-2xl`}>
                                        {project.title}
                                    </div>
                                </div>
                                {i % 2 !== 0 ? (
                                    <div
                                        className={`relative col-span-6 aspect-video z-3 rounded-xl `}
                                    >
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <img
                                                src={project.image}
                                                alt='image'
                                                className='hover:translate-x-2 hover:translate-y-2 transition ease-in-out rounded-lg'

                                            />
                                        </a>
                                        <div className='bg-[#05BFDB] h-full w-full rounded-xl'/>
                                    </div>
                                ) : null}
                                <div
                                    className={`${fonts.base} w-full lg:w-[110%] ${
                                        i % 2 !== 0 ? 'text-right' : 'text-left'
                                    } z-20 bg-[#011f38] p-6 aspect-4/5 rounded-md shadow-md shadow-black/70 leading-relaxed tracking-[.01rem]`}
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
                                            className='text-gray-200 hover:text-[#05BFDB] '
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
                                            className='text-gray-200 hover:text-[#05BFDB] '
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
                        {i % 2 == 0 ? (
                            <div
                                className={`relative col-span-6 aspect-video z-3 rounded-xl `}
                            >
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src={project.image}
                                        alt='image'
                                        className='hover:-translate-x-2 hover:-translate-y-2 transition ease-in-out rounded-lg'

                                    />
                                </a>
                                <div className='bg-[#05BFDB] h-full w-full rounded-xl'/>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
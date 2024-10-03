import {motion} from "framer-motion";
import NumberedHeading from "./NumberedHeading.tsx";
import hosaksham from "../../../assets/hosaksham.jpg"
import ebo from "../../../assets/ebo.png"


export default function Work({fonts}: {
    fonts: { accent: string; primaryHeading: string; secondaryHeading: string; base: string }
}) {

    return (
        <div>
            <NumberedHeading number={'03.'} title={"Where I've Worked"}/>
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{ease: 'easeOut', duration: 1, delay: 0.75}}
                className={`flex flex-col gap-6 ${fonts.base}`}
            >
                <div>

                    <div className="group relative flex gap-x-5">

                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                                <img className="w-32 sm:w-52 h-full absolute inset-0 object-cover rounded-full "
                                     src={hosaksham}
                                     alt="Blog Image"/>
                            </div>
                        </div>


                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="mb-1 text-xs text-gray-400">
                                June 2024 - Present
                            </h3>

                            <p className="font-semibold text-sm text-gray-300">
                                Software Engineer at Hosaksham
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                Building subscriber management, revenue growth, lead management, and various solutions tailored for MSMEs.
                            </p>

                            <ul className="list-disc ms-6 mt-3 space-y-1.5 text-gray-400">
                                <li className="ps-1 text-sm ">
                                    What we are doing is best captured at <a className={"cursor-pointer underline underline-offset-4"} href={"https://hosaksham.com/"} target={"_blank"}>hosaksham.com</a>
                                </li>

                            </ul>
                        </div>

                    </div>


                    <div className="group relative flex gap-x-5">

                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 size-6 flex justify-center items-center bg-black">
                                K
                            </div>
                        </div>


                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="mb-1 text-xs text-gray-400">
                                Feb 2024 - June 2024
                            </h3>

                            <p className="font-semibold text-sm text-gray-300">
                                Software Developer Intern at Klaimz (Stealth Startup)
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                This is a B2B company focused on solving claims issues in supply chain management,
                                incubated at IIM Bangalore | NSRCEL. I contributed until the pre-revenue stage, helping
                                develop the MVP.
                            </p>

                            <div className="mt-3">

                                <ul className="list-disc ms-6 mt-3 text-gray-400  space-y-1.5">
                                    <li className="ps-1 text-sm ">
                                        Implemented role-based authentication and protected routes, integrated Google
                                        reCAPTCHA, and handled 30+ API calls.
                                    </li>
                                    <li className="ps-1 text-sm ">
                                        Contributed to developing MVP, rapidly iterating features based on agile user
                                        feedback.
                                    </li>
                                    <li className="ps-1 text-sm ">
                                        Accountable for over 40 % of the Frontend code base, Implemented functionalities
                                        - API integrations, session managements, dynamic data manipulation for graphs.
                                    </li>
                                    <li className="ps-1 text-sm ">
                                        Developed responsive NextJS web app with Framer Motion animations, reducing load
                                        times by 30%.
                                    </li>

                                </ul>
                            </div>
                            <div className={"flex flex-wrap max-w-[80%] sm:max-w-[70%] mt-4 gap-2"}>
                            <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                Next.js
                            </span>
                                <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                React
                            </span>
                                <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                TailwindCss
                            </span>

                                <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                Framer Motion
                            </span><span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                REST APIs
                            </span><span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                HighCharts
                            </span>
                            </div>
                        </div>

                    </div>

                    <div className="group relative flex gap-x-5">

                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                                <img className="w-32 sm:w-52 h-full absolute inset-0 object-cover rounded-full "
                                     src={ebo}
                                     alt="Blog Image"/>
                            </div>
                        </div>

                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="mb-1 text-xs text-gray-400">
                                March 2023 - April 2023
                            </h3>

                            <p className="font-semibold text-sm text-gray-300">
                                Frontend Developer Intern at EBO (E-Commerce)
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                Worked at an e-commerce company providing celebration decoration services, focusing on
                                delivering a seamless online shopping experience.
                            </p>
                            <div className="mt-3">

                                <ul className="list-disc ms-6 mt-3 text-gray-400  space-y-1.5">
                                    <li className="ps-1 text-sm ">
                                        Developed fully responsive, pixel-perfect front-end web pages using HTML5, CSS3,
                                        and JavaScript, ensuring cross-browser compatibility and optimal user
                                        experience.
                                    </li>
                                    <li className="ps-1 text-sm ">
                                        Implemented key features like drop-down navigation menus and interactive content
                                        cards, improving site usability and engagement..
                                    </li>

                                </ul>
                            </div>

                            <div className={"flex flex-wrap max-w-[80%] sm:max-w-[70%] mt-4 gap-2"}>
                            <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                HTML
                            </span>
                                <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                CSS
                            </span>
                                <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                JavaScript
                            </span>

                                <span className={" px-2 py-1 bg-amber-50 rounded-2xl text-xs blue tilebg"}>
                                Git
                            </span>
                            </div>
                        </div>

                    </div>


                </div>
            </motion.div>
        </div>
    )

}
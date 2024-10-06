import Button from "../../Layout/Components/Button.tsx";
import {FiLinkedin, FiTwitter} from "react-icons/fi";

const Contact = ({fonts}: {
    fonts: { accent: string; primaryHeading: string; secondaryHeading: string; base: string }
}) => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-4'>
            <div className='group w-1/2 flex flex-col items-start justify-start gap-6 text-left'>
                <h1 className={`${fonts.accent}`}>04. What&apos;s Next?</h1>
                <h2 className={`${fonts.primaryHeading} text-[2.25rem]`}>
                    Get in Touch
                </h2>
                <p className={`${fonts.base} leading-relaxed tracking-[.01rem]`}>
                    My inbox is open. I&apos;m always happy to chat about code, design, or
                    anything.
                </p>
                <div className={"flex flex-row gap-4 mt-4 "}> {/* Added gap for spacing */}
                    <div >
                        <Button
                            id={"tallyButton"}
                            to={
                                '#tally-open=3EJ0Vr&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=4500'
                            }
                        >
                            Say Hello
                        </Button>
                    </div>

                    <div className={"flex flex-row gap-4 ml-[150px] items-center"}>
                        <span className="text-white">
                            --
                        </span>
                        <a
                            className='group'
                            title='Linkedin'
                            aria-label='LinkedIn'
                            href='https://www.linkedin.com/in/rahul-krishnaa28/'
                        >
                            <span
                                className='text-gray-200 hover:text-[#05BFDB] hover:-translate-y-1 transition-transform p-2'>
                                <FiLinkedin className='h-[20px] w-[20px]'/>
                            </span>
                        </a>

                        <a
                            className='group'
                            title='Twitter'
                            aria-label='Twitter'
                            href='https://x.com/RahulKrishnaa28'
                        >
                            <span className='text-gray-200 hover:text-[#05BFDB] hover:-translate-y-1 transition-transform p-2'>
                                <FiTwitter className='h-[20px] w-[20px]'/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
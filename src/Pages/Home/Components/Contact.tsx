import Button from "../../Layout/Components/Button.tsx";

const Contact = ({fonts}: {
    fonts: { accent: string; primaryHeading: string; secondaryHeading: string; base: string }
}) => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-4'>
            <div className='group w-1/2 flex flex-col items-start justify-start gap-6 text-left'>
                <h1 className={`${fonts.accent}`}>04. What&apos;s Next?</h1>
                <h2 className={`${fonts.primaryHeading} text-[2.25rem]`}>
                    Don&apos;t Be Shy
                </h2>
                <p className={`${fonts.base} leading-relaxed tracking-[.01rem]`}>
                    My inbox is open. I&apos;m always happy to chat about code, design, or
                    nothing in particular.
                </p>
                <Button
                    to={
                        'mailto:bradtramel@gmail.com?&subject=Hey Brad&body=Cool portfolio website!'
                    }
                >
                    Say Hello
                </Button>
            </div>
        </div>
    )
}

export default Contact
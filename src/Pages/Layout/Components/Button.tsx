const Button = ({children, to,id}: { children: string, to: string ,id?:string }) => {
    return (
        <a id={id?id:undefined} href={to}>
            <div className='relative text-[#05BFDB] text-sm font-mono'>
                <button
                    className={`cursor-pointer absolute z-20 border-2 border-[#05BFDB] px-6 py-3 bg-[#0B192E] rounded-md hover:translate-x-1 hover:translate-y-1 transition-all top-0 left-0 whitespace-nowrap`}
                >
                    {children}
                </button>
                <div className='absolute z-10 rounded-md whitespace-nowrap bg-[#05BFDB] px-6 py-3 top-0 left-0'>
                    {children}
                </div>
            </div>
        </a>
    )
}

export default Button
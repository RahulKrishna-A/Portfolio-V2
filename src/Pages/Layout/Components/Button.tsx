type ButtonProps = { children: string; to: string; id?: string; size?: 'sm' | 'md' }

const Button = ({ children, to, id, size = 'md' }: ButtonProps) => {
    const padding = size === 'sm' ? 'px-4 py-2' : 'px-6 py-3'
    const textSize = size === 'sm' ? 'text-[12px]' : 'text-[13px]'

    return (
        <a id={id ?? undefined} href={to} className='group inline-block'>
            <span className={`relative inline-flex items-center ${textSize} font-mono`}>
                <span className='rounded-md p-[2px] bg-gradient-to-r from-[#05BFDB] to-[#46e0ff] transition-all duration-300 group-hover:from-[#46e0ff] group-hover:to-[#05BFDB] group-hover:shadow-[0_0_20px_rgba(5,191,219,0.25)]'>
                    <span className={`block ${padding} rounded-[6px] bg-[#0B192E] text-[#05BFDB] tracking-wide`}>
                        <span className='flex items-center gap-2'>
                            {children}
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='none'
                                className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5'
                            >
                                <path d='M5 12h14M13 6l6 6-6 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        </span>
                    </span>
                </span>
            </span>
        </a>
    )
}

export default Button
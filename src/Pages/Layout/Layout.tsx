import {Outlet} from "react-router-dom";
import {useState} from "react";
import Nav from "./Components/Nav.tsx";

export default function Layout(){

    const navItems = [
        {
            name: 'home',
            link: 'home',
            key: '01.',
        },
        { name: 'about', link: 'about', key: '02.' },
        { name: 'work', link: 'work', key: '03.' },
        { name: 'contact', link: 'contact', key: '04.' },
    ]
    const fonts = {
        accent: 'text-[#05BFDB] text-sm font-mono',
        primaryHeading:
            'whitespace-nowrap text-gray-200 font-bold leading-tight font-sans',
        secondaryHeading: 'text-gray-400 font-bold leading-tight font-sans',
        base: 'text-gray-400 text-base font-sans',
    }

    const [active, setActive] = useState(navItems[0].name)

    return(
        <div>
            <Nav
                fonts={fonts}
                navItems={navItems}
                active={active}
                setActive={setActive}
            />
        </div>
    )


}
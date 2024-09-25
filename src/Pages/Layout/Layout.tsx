import {createContext, useState} from "react"; // Add this import
import Nav from "./Components/Nav.tsx";
import {Outlet} from "react-router-dom";

// Create a context for active state
export const ActiveContext = createContext({
    active: '',
    setActive: (name: string) => {
    }
});

export default function Layout() {


    const navItems = [
        {
            name: 'home',
            link: 'home',
            key: '01.',
        },
        {name: 'about', link: 'about', key: '02.'},
        {name: 'work', link: 'work', key: '03.'},
        {name: 'contact', link: 'contact', key: '04.'},
    ]

    const fonts = {
        accent: 'text-[#05BFDB] text-sm font-mono',
        primaryHeading:
            'whitespace-nowrap text-gray-200 font-bold leading-tight font-sans',
        secondaryHeading: 'text-gray-400 font-bold leading-tight font-sans',
        base: 'text-gray-400 text-base font-sans',
    }

    const [active, setActive] = useState(navItems[0].name)


    return (
        <ActiveContext.Provider value={{active, setActive}}>
            <div>
                <Nav
                    fonts={fonts}
                    navItems={navItems}
                    active={active}
                    setActive={setActive}
                />
                <Outlet/>
            </div>
        </ActiveContext.Provider>
    )


}
import { navItems } from "../../atoms/NavItems/NavItems"

const Header = () => {
    return (
        <div className="md:hidden block">
            <div className="flex  bg-[rgba(19,36,80,1)] px-5 md:px-8 py-3 justify-between items-center">
                <img src="/images/logo.svg" alt="logo" />
                <img src="/images/menu.svg" alt="menu" />
            </div>
            <div className="px-5 md:px-8 py-4">
                <div className="flex gap-1 items-center text-[rgba(19,36,80,1)]">
                    {navItems[1].icon}
                    <p className="font-bold text-[12px] leading-5">{navItems[1].label}</p>
                    <img src="/images/dropdown.svg"/>
                </div>
            </div>
            <div className="w-full h-px bg-[rgba(237,237,237,1)]"></div>
        </div>
    )
}

export default Header
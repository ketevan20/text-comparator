import type { ReactNode } from "react"

interface SidebarItemProps {
    icon: ReactNode
    label: ReactNode | string
    isActive?: boolean
    onClick: () => void;
    isOpen: boolean;
}

const SidebarItem = ({ icon, label, isActive = false, onClick, isOpen }: SidebarItemProps) => {
    return (
        <>
            {
                isActive ?
                    <div className="cursor-pointer" onClick={onClick}>
                        {isOpen ? <img src="/images/bg.svg" alt="" className="absolute right-0 z-99 -translate-y-[32%]" /> : <img src="/images/bg-small.svg" alt="" className="absolute right-0 z-99 -translate-y-[32%]" /> } 
                        <div className="relative z-100 flex items-center gap-2 text-[rgba(19,36,80,1)]">
                            {icon}
                            { isOpen && <p className="font-normal text-[14px] leading-5 tracking-[0%]">{label}</p> }
                        </div>
                    </div>
                    :
                    <div onClick={onClick} className="flex items-center gap-2 text-white cursor-pointer hover:opacity-60">
                        {icon}
                        { isOpen && <p className="font-normal text-[14px] leading-5 tracking-[0%] flex items-center gap-1">{label}</p> }
                    </div>
            }
        </>
    )
}

export default SidebarItem
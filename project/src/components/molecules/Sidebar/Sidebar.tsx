import { useState } from "react"
import SidebarItem from "../../atoms/SidebarItem/SidebarItem"
import { motion } from "motion/react"
import { navItems } from "../../atoms/NavItems/NavItems";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [open, setOpen] = useState(true);

  return (
    <div className="sticky top-0 hidden md:block h-screen bg-[rgba(19,36,80,1)]" style={{width: open ? '240px' : '79px'}}>
      <div className="px-6 py-5">
        <div className="flex flex-col gap-3">
          <motion.button animate={{ rotate: open ? 0 : 180 }} transition={{duration: 0.1}} onClick={() => setOpen(!open)} className="self-end cursor-pointer"><img src="/images/chevrons-left.svg" alt="" /></motion.button>
          <div className="flex gap-[11.06px]">
            <img src="/images/main-logo.svg" alt="logo" className="w-8 h-8 shrink-0"/>
            {open && <img src="/images/ENAGRAM.svg" />}
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-13.25">
          {navItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              isOpen={open}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="h-px w-full bg-[rgba(158,185,255,0.2)]"></div>

        <div className="py-5 px-3 flex items-center" style={{justifyContent: !open ? 'center' : 'space-between'}}>
          <div className="flex items-center gap-1.25">
            <div className="w-5 h-5 bg-[rgba(158,200,255,1)] border border-white rounded-full font-bold text-[10px] leading-6 tracking-[0.1px] text-[rgba(19,36,80,1)] flex items-center justify-center">ქ</div>
            { open && <p className="font-normal text-[14px] leading-5 tracking-normal text-white">ქეთი სამუკაშვილი</p> }
          </div>
          { open && <img src="/images/dots-menu.svg" alt="" className="cursor-pointer" /> }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
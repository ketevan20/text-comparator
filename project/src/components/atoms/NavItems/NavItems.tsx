import { arrowRight, checkIcon, mic, pdf, textComparable, voice } from "../../../icons/Icons"

export const navItems = [
  { icon: checkIcon, label: "მართლმწერი" },
  { icon: textComparable, label: "ტექსტის შედარება" },
  { icon: mic, label: <span className="flex items-center gap-1">ხმა {arrowRight} ტექსტი</span> },
  { icon: voice, label: <span className="flex items-center gap-1">ტექსტი {arrowRight} ხმა</span> },
  { icon: pdf, label: "PDF კონვერტაცია" },
]
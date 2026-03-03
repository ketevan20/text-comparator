import { plusIcon } from "../../../icons/Icons"

const MainContainer = () => {
  return (
    <div className="flex-1 w-full h-full md:p-6 flex flex-col gap-6 px-4 py-6">
      <div className="flex gap-4 sm:items-center sm:justify-between flex-col sm:flex-row text-[rgba(56,58,72,1)] text-[14px] leading-5.5 tracking-[1%] font-normal">
        <div className="flex sm:items-center gap-6 flex-col sm:flex-row">
          <div className="relative inline-block">
            <select className="appearance-none w-full bg-transparent py-1.5 pl-3.5 pr-16.25 rounded-lg cursor-pointer outline-0 border border-[rgba(224,224,224,1)]">
              <option>ქართული</option>
              <option>ქართული</option>
            </select>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none"><img src="/images/dropdown.svg" /></span>
          </div>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 border-2 border-[rgba(224,224,224,1)] rounded-sm cursor-pointer"
            />
            ფორმატის შენარჩუნება
          </label>
        </div>

        <button className="hover:opacity-80 cursor-pointer disabled:cursor-not-allowed bg-[rgba(69,113,228,1)] py-1.5 pr-4 pl-3 rounded-md flex gap-1 items-center justify-center text-white disabled:bg-[rgba(56,58,72,0.6)]" disabled>{plusIcon} ახლის გახსნა</button>
      </div>

      <div className="w-full h-px bg-[rgba(237,237,237,1)]"></div>

      <div className="flex gap-5 md:gap-2.5 md:items-center flex-col md:flex-row">
        <textarea className="md:flex-1 h-47.5 md:h-108 bg-[rgba(240,247,255,1)] rounded-lg p-3 resize-none outline-none placeholder:text-[18px] text-[rgba(56,58,72,1)] text-[18px] leading-6.5" placeholder="დაიწყე წერა..."></textarea>
        <img src="/images/compare.svg" className="self-center max-md:rotate-90"/>
        <textarea className="md:flex-1 h-47.5 md:h-108 bg-[rgba(240,247,255,1)] rounded-lg p-3 resize-none outline-none placeholder:text-[18px] text-[rgba(56,58,72,1)] text-[18px] leading-6.5" placeholder="დაიწყე წერა..."></textarea>
      </div>

      <button className="hover:opacity-80 cursor-pointer disabled:cursor-not-allowed self-center bg-[rgba(69,113,228,1)] py-1.5 pr-4 pl-3 rounded-md flex gap-1 items-center justify-center text-white disabled:bg-[rgba(56,58,72,0.6)]" disabled>შედარება</button>

    </div>
  )
}

export default MainContainer
import { useRef, useState } from "react"
import { plusIcon } from "../../../icons/Icons"
import { diffWords } from "diff";
import Loader from "../../atoms/Loader/Loader";

type DiffPart = { text: string; type: "unchanged" | "removed" | "added" }

const compareFunction = (text1: string, text2: string): [DiffPart[], DiffPart[]] => {

  const differences = diffWords(text1, text2);

  const left: DiffPart[] = []
  const right: DiffPart[] = []

  differences.forEach(part => {
    if (part.added) {
      right.push({ text: part.value, type: "added" })
    } else if (part.removed) {
      left.push({ text: part.value, type: "removed" })
    } else {
      left.push({ text: part.value, type: "unchanged" })
      right.push({ text: part.value, type: "unchanged" })
    }
  })

  return [left, right]
}

const MainContainer = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [compared, setCompared] = useState(false)
  const [loading, setLoading] = useState(false);
  const [text1Result, setText1Result] = useState<DiffPart[]>([])
  const [text2Result, setText2Result] = useState<DiffPart[]>([])
  const textareaRef1 = useRef<HTMLTextAreaElement>(null);
  const textareaRef2 = useRef<HTMLTextAreaElement>(null);
  const [hasEdited, setHasEdited] = useState(false)


  const HandleCompare = () => {
    setLoading(true);
    const [left, right] = compareFunction(text1, text2)
    setText1Result(left)
    setText2Result(right)
    setCompared(true);
    setHasEdited(true)
  }

  const renderTexts = (parts: DiffPart[]) => (
    <>
      {parts.map((part, idx) => (
        <span
          key={idx}
          style={
            part.type === "removed"
              ? { background: "rgba(181,0,34,1)", color: "rgba(162,132,94,1)", padding: "0 1px" }
              : part.type === "added"
                ? { background: "rgba(62,188,94,1)", padding: "0 1px" }
                : {}
          }
        >
          {part.text}
        </span>
      ))}
    </>
  )

  const reset = () => {
    setCompared(false)
    setText1('')
    setText2('')
    setText1Result([])
    setText2Result([])
    setHasEdited(false)
  }

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

        <button onClick={reset} className="hover:opacity-80 cursor-pointer disabled:cursor-not-allowed bg-[rgba(69,113,228,1)] py-1.5 pr-4 pl-3 rounded-md flex gap-1 items-center justify-center text-white disabled:bg-[rgba(56,58,72,0.6)]" disabled={!compared}>
          {plusIcon} ახლის გახსნა
        </button>
      </div>

      <div className="w-full h-px bg-[rgba(237,237,237,1)]"></div>

      <div className="flex gap-5 md:gap-2.5 md:items-center flex-col md:flex-row">
        {
          loading ? <Loader setLoading={setLoading}/> : 
            <>
              <div className="relative md:flex-1 h-47.5 md:h-108 bg-[rgba(240,247,255,1)] rounded-lg p-3 text-[rgba(56,58,72,1)] text-[18px] leading-6.5">
                <div onClick={() => { setCompared(false); setTimeout(() => textareaRef1.current?.focus(), 0) }} className={`${compared ? 'block' : 'hidden'} absolute inset-0 p-3 cursor-text`}>{renderTexts(text1Result)}</div>
                <textarea ref={textareaRef1} onChange={(e) => setText1(e.target.value)} value={text1} className={`${!compared ? 'block' : 'hidden'} w-full h-full resize-none outline-none placeholder:text-[18px]`} placeholder="დაიწყე წერა..." />
              </div>

              <img src="/images/compare.svg" className="self-center max-md:rotate-90" />

              <div className="relative md:flex-1 h-47.5 md:h-108 bg-[rgba(240,247,255,1)] rounded-lg p-3 text-[rgba(56,58,72,1)] text-[18px] leading-6.5">
                <div onClick={() => { setCompared(false); setTimeout(() => textareaRef2.current?.focus(), 0) }} className={`${compared ? 'block' : 'hidden'} absolute inset-0 p-3 cursor-text`}>{renderTexts(text2Result)}</div>
                <textarea ref={textareaRef2} onChange={(e) => setText2(e.target.value)} value={text2} className={`${!compared ? 'block' : 'hidden'} w-full h-full resize-none outline-none placeholder:text-[18px]`} placeholder="დაიწყე წერა..." />
              </div>
            </>
        }

      </div>

      <button onClick={HandleCompare} className="hover:opacity-80 cursor-pointer disabled:cursor-not-allowed self-center bg-[rgba(69,113,228,1)] py-1.5 pr-4 pl-3 rounded-md flex gap-1 items-center justify-center text-white disabled:bg-[rgba(56,58,72,0.6)]" disabled={!text1 || !text2 || loading}>
        {hasEdited ? <img src="/images/restart.svg" className="mr-1" /> : ''}
        შედარება
      </button>
    </div>
  )
}

export default MainContainer
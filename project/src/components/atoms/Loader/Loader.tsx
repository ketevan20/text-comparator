import { useEffect, useState } from "react";

type LoaderProps = {
    setLoading: (compared: boolean) => void;
}
const Loader = ({ setLoading }: LoaderProps) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return p + 10
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => setLoading(false), 200)
            return () => clearTimeout(timer)
        }
    }, [progress])

    return (
        <div className="h-116 md:h-108 w-full flex items-center justify-center">
            <div className="border border-[rgba(225,225,225,1)] px-4 py-5 flex gap-2 items-center rounded-lg">
                <div className="w-10 h-10 border-2 border-[rgba(69,113,228,1)] rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[rgba(69,113,228,1)] rounded-full"></div>
                </div>
                <div>
                    <p className="text-[rgba(56,58,72,0.6)] text-[10px] leading-4 mb-1">Converting...Thank you For your Patience</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-[rgba(56,58,72,1)] font-bold text-[16px] leading-6">{progress}%</p>
                        <div className="bg-[rgba(246,249,255,1)] rounded-[64px] w-full h-2">
                            <div className={`bg-[rgba(69,113,228,1)] h-full rounded-[64px]`} style={{width: `${progress}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
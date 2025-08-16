import { JSX } from "react";

export function Card({ children }: { children: JSX.Element | String | Array<JSX.Element|String> }) {
    return <div className="min-w-[10rem] max-w-[15rem] relative">
        { children }
    </div>
}
export function Image({ src }: { src: string }) {
    return <img className="w-full max-w-[15rem]" src={src} />;
}
export function Cover({ datetime }: { datetime: string }) {
    return <div style={{
        background: "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 100%)"
    }} className="absolute bottom-[0] px-2 pb-1 w-full h-[30%] text-white text-sm flex">
        <div className="mt-auto">{ datetime }</div>
    </div>
}
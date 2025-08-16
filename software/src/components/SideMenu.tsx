import { JSX } from "react";

function MenuButton({ href, active, children }: { href: string, active: boolean, children: JSX.Element | String | Array<JSX.Element|String> }) {
    return <a
        href={href}
        className={
            "block rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 " +
            (active ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700")
        }>
            { children }
    </a>;
}

export default function SideMenu({ activePage }: { activePage: "live_camera" | "object_detection" | "history" | "notifications" }) {
    return <div className="flex flex-1 h-screen flex-col justify-between border-e border-gray-200 bg-white max-w-xs">
        <div className="px-4 py-6">
            <ul className="mt-6 space-y-1">
            <li>
                <MenuButton href="/" active={activePage == "live_camera"}>
                    <svg className="w-[1.25rem] h-[1.25rem] text-gray-800 dark:text-white inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd"/>
                    </svg>
                    Live Camera
                </MenuButton>
            </li>

            <li>
                <MenuButton href="/object_detection" active={activePage == "object_detection"}>
                    <svg className="w-[1.25rem] h-[1.25rem] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    Object Detection
                </MenuButton>
            </li>

            <li>
                <MenuButton href="/history" active={activePage == "history"}>
                    <svg className="w-[1.25rem] h-[1.25rem] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"/>
                    </svg>
                    History
                </MenuButton>
            </li>

            <hr className="border-gray-200 my-3" />

            <li>
                <MenuButton href="/notifications" active={activePage == "notifications"}>
                    <svg className="w-[1.25rem] h-[1.25rem] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                    </svg>
                    Notifications
                </MenuButton>
            </li>
            
            </ul>
        </div>
    
    </div>;
}
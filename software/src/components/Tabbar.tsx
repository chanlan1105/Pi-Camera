"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { JSX, useState } from "react";

/**
 * Defines an Object of Subpages for a Tabbar.
 * Key corresponds to the name of the tab, value is the JSX element(s) to display for that page.
 */
interface Subpages {
    [key: string]: JSX.Element | string | Array<JSX.Element | string >
}

/**
 * Props for the Tabbar component.
 * 
 * @template Items A tuple of strings representing tab names.
 */
type TabbarProps<Items extends readonly string[]> = {
    /** The list of tab names to display. */
    tabItems: Items, // Specify that tabItems must be an array of immutable strings
    /** Optional mapping of tab names to JSX content to display. */
    subpages?: Subpages,
    /** Tab to select by default, must be included in `tabItems`. Defaults to the first element of `tabItems`. */
    defaultTab?: Items[number] | null // Specify that defaultTab must be in tabItems
}

export default function Tabbar<Items extends readonly string[]>({ tabItems, subpages={}, defaultTab }: TabbarProps<Items>) {
    const [selectedTab, setSelectedTab]: [string, Function] = useState(defaultTab ?? tabItems[0]);

    return (
        <Tabs.Root
            className="max-w-screen-xl mt-2 px-4 md:px-8 mt-6 flex-1"
            value={selectedTab}
            onValueChange={(val) => setSelectedTab(val)}
        >
            <Tabs.List
                className="hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex justify-center"
                aria-label="Manage your account"
            >
                {tabItems.map((item, idx) => (
                    <Tabs.Trigger
                        key={idx}
                        className="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium"
                        value={item}
                    >
                        {item}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            <div className="relative text-gray-500 sm:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
                <select
                    value={selectedTab}
                    className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-gray-800 text-sm"
                    onChange={(e) => setSelectedTab(e.target.value)}
                >
                    {tabItems.map((item, idx) => (
                        <option key={idx}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            {tabItems.map((item, idx) => (
                <Tabs.Content key={idx} className="py-6" value={item}>
                    {
                        item in subpages ? 
                        subpages[item] :
                        <p className="text-xs leading-normal">
                            This is <b>{item}</b> Tab
                        </p>
                    }
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
};

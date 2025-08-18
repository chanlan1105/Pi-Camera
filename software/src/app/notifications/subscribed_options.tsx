import { OBJECT_TYPES } from "@/globals/objectTypes";
import { Checkbox, Label } from "flowbite-react";
import { useState } from "react";

export default function SubscribedOptions() {
    const [selected, setSelected] = useState(Object.fromEntries(OBJECT_TYPES.map(object => [object, false])));

    return <>
        <h3 className="text-gray-800 text-xl font-bold mt-5 mb-3">Object Detection</h3>

        {
            OBJECT_TYPES.map(object => {
                return <div className={`flex items-center gap-3 ps-4 mb-3 border border-gray-200 rounded-sm dark:border-gray-700 hover:bg-gray-50 transition-colors ${selected[object] ? "bg-gray-50" : ""}`} key={object}>
                    <Checkbox id={`notif-${object}`} className="rounded-sm" checked={selected[object]} onChange={() => {
                        const newSelected = {...selected};
                        newSelected[object] = !selected[object];
                        setSelected(newSelected);
                    }} ></Checkbox>
                    <Label htmlFor={`notif-${object}`} className="py-4 flex-1 cursor-pointer">{object}</Label>
                </div>;
            })
        }
    </>
}
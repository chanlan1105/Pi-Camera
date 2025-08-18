import SideMenu from "@/components/SideMenu";
import Tabbar from "@/components/Tabbar";
import People from "./People";
import { OBJECT_TYPES } from "@/globals/objectTypes";

export default function Object_Detection() {
    return <main className="flex">
        <SideMenu activePage="object_detection"></SideMenu>
        <Tabbar tabItems={OBJECT_TYPES} subpages={{
            "People": <People></People>
        }}></Tabbar>
    </main>;
}
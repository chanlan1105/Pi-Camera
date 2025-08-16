import SideMenu from "@/components/SideMenu";
import Tabbar from "@/components/Tabbar";
import People from "./People";

export default function Object_Detection() {
    return <main className="flex">
        <SideMenu activePage="object_detection"></SideMenu>
        <Tabbar tabItems={[
            "People",
            "Couriers",
            "Vehicles"
        ]} subpages={{
            "People": <People></People>
        }}></Tabbar>
    </main>;
}
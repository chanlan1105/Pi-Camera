import Image from "next/image";
import SideMenu from "../components/SideMenu";

export default function Home() {
    return (
        <main>
            <SideMenu activePage="live_camera"></SideMenu>
        </main>
    );
}

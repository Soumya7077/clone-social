import { Feed } from "../../components/feed/feed";
import { Rightbar } from "../../components/rightbar/rightbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { TopBar } from "../../components/topbar/topbar";
import './home.css';



export function Home()
{
    return(
        <div className="container-fluid">
            <TopBar />
            <div className="homeContainer">
            <Sidebar/>
            <Feed />
            <Rightbar/>
            </div>
        </div>
    )
}
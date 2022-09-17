import NavBar from "./NavBar"
import Corpo from "./Corpo"
import SideBar from "./SideBar"

export default function App() {
    return (
        <div class="container">
            <header>
                <NavBar/>
            </header>
           <Corpo/>
           <SideBar/>
        </div>
    )
}
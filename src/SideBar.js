import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {
    return(
        <div class="sidebar">
          <Usuario/>
          <Sugestoes/>
        </div>
    )
}
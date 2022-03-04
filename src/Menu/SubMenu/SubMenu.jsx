import { UnorderedList, Li,Plus,Link } from "../../../styledcomponents/list";
import {useState} from 'react'
import Menu from "../Menu";
const SubMenu = ({
    category,
    items,
}) => {
    const [showMenu,setShowMenu] = useState(true);
    return (
        <>
         <Link>{category} <Plus onClick={() => setShowMenu(!showMenu)}>+</Plus></Link>
         <Menu data={items} isHidden={showMenu}/>
        </>

    )
}

export default SubMenu
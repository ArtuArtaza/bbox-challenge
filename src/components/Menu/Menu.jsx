import { UnorderedList, Li,Plus,Link,MenuContainer } from "../../styledcomponents/list";
import { useState } from "react";
import SubMenu from "./SubMenu/SubMenu";
const Menu = ({ data,isHidden = false }) => {
  return (
    <UnorderedList isHidden={isHidden}>
      {data.map((item) => (
        <Li key={item.category}>
            {
                item.items
                ? (
                <>
               {/* <Link>{`${item.category}`} <Plus onClick={() => setShowMenu(!showMenu)}>+</Plus></Link>
                <Menu data={item.items} isHidden={showMenu}/>*/}
                <SubMenu category={item.category} items={item.items}/>
                </>
                )
                : <Link>{`${item.category}`}</Link>
            }
        </Li>
      ))}
    </UnorderedList>
  );
};

export default Menu;

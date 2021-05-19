/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Sidebar.css';
import icon1 from '../../assets/icon_arrow1.png';
import icon2 from '../../assets/icon_arrow2.png';

interface listProps {
  items: Array<any>;
}

function SubMenu({ items }: listProps) {

  const [subnav, setSubnav] = React.useState(false)

  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <div className="sbDropdown" onClick={showSubNav}>
        <img className="sbListIcon" src={icon1} alt="icon1" />
        <p>Minhas listas</p>
      </div>
      {subnav && items.map((item: any, index: any) => {
        return (
          <a className="sbLink" href={'/verlista'} onClick={showSubNav}>
            <div className="arrow-edit">
              <img className="sbListIcon" src={icon2} alt="icon2" />
              <div>{item.title}</div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default SubMenu;
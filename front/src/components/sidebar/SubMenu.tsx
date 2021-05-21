/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Sidebar.css';
import icon1 from '../../assets/icon_arrow1.svg';
import icon2 from '../../assets/icon_arrow2.svg';

interface listProps {
  items: Array<any>;
}

/*<svg className = "sbListIcon" xmlns="http://www.w3.org/2000/svg" fill="#5BED43">
          <path d="M21 12l-18 12v-24z"/>
        </svg>*/

function SubMenu({ items }: listProps) {

  const [subnav, setSubnav] = React.useState(false)

  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <div className="sbDropdown" onClick={showSubNav}>
        <img className="sbListIcon" src={icon1} alt="icon1"/>

        <p>Minhas Listas</p>
      </div>
      {subnav && items.map((item: any, index: any) => {
        return (
          <a className="sbLink" href={`/${item.title}/${item._id}`} onClick={showSubNav}>
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
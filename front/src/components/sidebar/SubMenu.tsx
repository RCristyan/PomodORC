/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Sidebar.css';

function SubMenu({ item }: any) {
  const [subnav, setSubnav] = React.useState(false)

  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <div className="sbDropdown" onClick={item.subNav && showSubNav}>
        <img className="sbListIcon" src={item.icon} />
        <div>{item.title}</div>
      </div>
      {subnav && item.subNav.map((item: any, index: any) => {
        return (
          <a className="sbLink" href={item.path} onClick={item.subNav && showSubNav}>
            <div className="arrow-edit">
              <img className="sbListIcon" src={item.icon} />
              <div>{item.title}</div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default SubMenu;
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import icon from '../../assets/icon_plus.png';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import SubMenu from './SubMenu';

function Sidebar() {
  return (
    <section className="sidebar">
      <a href="">
        <img className="plusIcon" src={icon} />
      </a>

      <div className="sidebarLink">
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Sidebar;
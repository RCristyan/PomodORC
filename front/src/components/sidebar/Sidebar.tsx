/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import icon from '../../assets/icon_plus.svg';
import './Sidebar.css';
import SubMenu from './SubMenu';
import api from '../../services/api';

function Sidebar() {

  const [listTitle, setListTitle] = useState([]);

  useEffect(() => {

    api.get(`/read`).then(res => {
      const list = res.data;
      setListTitle(list);
    })

  })

  return (
    <section className="sidebar">
      <div className="plus-content">
      <a href="/criarlista">
        <img className="plusIcon" src={icon} />
      </a>
      </div>
      <div className="sidebarLink">
        <SubMenu items={listTitle} />
      </div>
    </section>
  );
}

export default Sidebar;
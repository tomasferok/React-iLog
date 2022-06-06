import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Proveedores',
    path: '/list-prov',
    icon: <FaIcons.FaUserTie />,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Categorias',
    path: '/team',
    icon: <BsIcons.BsFillCalendarWeekFill />,
    cName: 'nav-text'
  },
  {
    title: 'SubCategorias',
    path: '/messages',
    icon: <BsIcons.BsFillCalendar2WeekFill />,
    cName: 'nav-text'
  },
  {
    title: 'Empresas',
    path: '/support',
    icon: <FaIcons.FaWarehouse />,
    cName: 'nav-text'
  }
];
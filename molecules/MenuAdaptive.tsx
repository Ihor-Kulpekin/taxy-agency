import React from 'react';
import useMedia from '../hooks/useMedia';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

const MenuAdaptive = () => {
    const { mobile } = useMedia();
    return <>{!mobile ? <Menu /> : <MenuMobile />}</>;
};

export default MenuAdaptive;

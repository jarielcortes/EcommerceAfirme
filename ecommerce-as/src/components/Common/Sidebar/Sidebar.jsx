import React, { useState, useEffect } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import { Bars4Icon } from '@heroicons/react/24/outline'
import { getMenuItems } from '../../../utils/Menu';
import "./Sidebar.css";
import logoAfirme from '../../../assets/logoAfirme.png';

function Sidebar({ selectedItem, onSelectItem }) {
    
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const items = getMenuItems();
        setMenuItems(items);
    }, []); //Execute once at render

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`bg-white p-5 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex justify-between items-center mb-5">
                {!isCollapsed && (
                    <img src={logoAfirme} alt="Afirme Logo" style={{ maxWidth: '150px' }} />
                )}
                <button
                    onClick={handleToggleSidebar}
                    className="focus:outline-none"
                    title={isCollapsed ? "Colapsar" : "Expandir"}
                >
                    {Bars4Icon && <Bars4Icon className="w-6 h-6" />}
                </button>
            </div>
            <nav className="mt-10">
                {menuItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        isSelected={selectedItem === item.label}
                        onClick={() => onSelectItem(item.label)}
                        isCollapsed={isCollapsed}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
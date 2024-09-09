import { BriefcaseIcon, CubeIcon, GlobeAltIcon, PhoneIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const Menu_Dashboard = "Dashboard";
const Menu_About = "About";
const Menu_Products = "Products";
const Menu_Services = "Services";
const Menu_Contact = "Contact";

const MENU_ITEMS = [
    { label: Menu_Dashboard, id: 1, icon: 'presentation-chart-bar' },
    { label: Menu_About, id: 2, icon: 'cube' },
    { label: Menu_Products, id: 3, icon: 'globe-alt' },
    { label: Menu_Services, id: 4, icon: 'briefcase' },
    { label: Menu_Contact, id: 5, icon: 'phone' },
];

// Mapping of hero icons
const iconMapping = {
    presentation_chart_bar: PresentationChartBarIcon,
    cube: CubeIcon,
    globe_alt: GlobeAltIcon,
    briefcase: BriefcaseIcon,
    phone: PhoneIcon,
};

function getMenuItems() {
    return MENU_ITEMS;
}

function getMenuItemByLabel(label) {
    const items = MENU_ITEMS.find(menuItem => menuItem.label === label);
    if (!items) {
        throw new Error('Invalid menu label');
    }
    return items;
}

function getMenuIconMappingByLabel(iconName) {
    const iconNameMapping = replaceDashesWithUnderscores(iconName);
    return iconMapping[iconNameMapping];
}

function replaceDashesWithUnderscores(str) {
    return str.replace(/-/g, '_');
}

export { getMenuItems, getMenuItemByLabel, getMenuIconMappingByLabel, Menu_Dashboard, Menu_About, Menu_Products, Menu_Services, Menu_Contact };